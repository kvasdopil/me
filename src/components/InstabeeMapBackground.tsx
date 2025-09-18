import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import maplibregl from "maplibre-gl";

interface GeoJSONFeature {
    type: "Feature";
    geometry: {
        type: "Point" | "Polygon" | "MultiPolygon" | "LineString";
        coordinates: any;
    };
    properties: Record<string, unknown>;
}

export interface GeoJSON {
    type: "FeatureCollection";
    features: GeoJSONFeature[];
}

interface InstabeeMapBackgroundProps {
    center?: [number, number];
    zoom?: number;
    style?: string;
    interactive?: boolean;
    children?: ReactNode;
    className?: string;
    geoJson?: GeoJSON | null;
    citiesGeoJson?: GeoJSON | null;
}

const mapStyle = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

// Nuenen coordinates
const NUENEN_CENTER: [number, number] = [5.0, 52.1];

export default function InstabeeMapBackground({
    center = NUENEN_CENTER, // Center on Nuenen since we're only showing that region
    zoom = 10, // Higher zoom to see Nuenen clearly
    style = mapStyle,
    interactive = true,
    children,
    className = "absolute inset-0 w-full h-full",
    geoJson,
    citiesGeoJson,
}: InstabeeMapBackgroundProps) {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style,
            center,
            zoom,
            interactive,
        });

        // Add GeoJSON data if provided
        if (geoJson) {
            map.on("load", () => {
                // MultiPolygon layer for municipality regions only
                const polygonFeatures = geoJson.features.filter(f =>
                    f.geometry.type === "Polygon" || f.geometry.type === "MultiPolygon"
                );

                if (polygonFeatures.length > 0) {
                    map.addSource("regions", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: polygonFeatures,
                        },
                    });

                    // Fill layer for regions - use color property
                    map.addLayer({
                        id: "region-fill",
                        type: "fill",
                        source: "regions",
                        paint: {
                            "fill-color": [
                                "match",
                                ["get", "color"],
                                "green", "#22c55e", // Green for regions containing cities
                                "yellow", "#eab308", // Yellow for regions within 5km
                                "blue", "#3b82f6", // Blue for regions within 10km
                                "gray", "#9ca3af", // Gray for regions farther than 10km
                                "#9ca3af" // Default gray
                            ],
                            "fill-opacity": 0.5,
                        },
                    });

                    // Boundary lines for regions - thin gray
                    map.addLayer({
                        id: "region-boundaries",
                        type: "line",
                        source: "regions",
                        paint: {
                            "line-color": "#6b7280", // Gray color
                            "line-width": 1, // Thin 1px line
                            "line-opacity": 0.8,
                        },
                    });
                }
            });
        }

        // Add cities data if provided
        if (citiesGeoJson) {
            map.on("load", () => {
                // Filter for point features (cities)
                const cityFeatures = citiesGeoJson.features.filter(f =>
                    f.geometry.type === "Point"
                );

                if (cityFeatures.length > 0) {
                    map.addSource("cities", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: cityFeatures,
                        },
                    });

                    // City markers - larger circles for cities
                    map.addLayer({
                        id: "city-markers",
                        type: "circle",
                        source: "cities",
                        paint: {
                            "circle-radius": 8,
                            "circle-color": "#3b82f6", // light blue
                            "circle-stroke-color": "#ffffff",
                            "circle-stroke-width": 2,
                            "circle-opacity": 0.9,
                        },
                    });

                    // City labels
                    map.addLayer({
                        id: "city-labels",
                        type: "symbol",
                        source: "cities",
                        layout: {
                            "text-field": ["get", "name"],
                            "text-size": 12,
                            "text-anchor": "bottom",
                            "text-justify": "center",
                            "text-allow-overlap": false,
                            "text-ignore-placement": false,
                            "text-offset": [0, -1.5], // Position above the marker
                        },
                        paint: {
                            "text-color": "#1f2937",
                            "text-halo-color": "#ffffff",
                            "text-halo-width": 2,
                        },
                    });
                }
            });
        }

        // Clean up on unmount
        return () => {
            map.remove();
        };
    }, [center, zoom, style, interactive, geoJson, citiesGeoJson]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Map background */}
            <div ref={mapContainer} className={className} style={{ zIndex: 0, opacity: 0.8 }} />

            {/* Content overlay */}
            {children && <div className="relative z-10">{children}</div>}
        </div>
    );
}
