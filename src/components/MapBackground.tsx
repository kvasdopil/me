import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import maplibregl from "maplibre-gl";

interface GeoJSONFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: Record<string, unknown>;
}

export interface GeoJSON {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

interface MapBackgroundProps {
  center?: [number, number];
  zoom?: number;
  style?: string;
  interactive?: boolean;
  children?: ReactNode;
  className?: string;
  geoJson?: GeoJSON;
}

const mapStyle = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

export default function MapBackground({
  center = [17.45, 59.4], // Stockholm coordinates
  zoom = 9.1,
  style = mapStyle,
  interactive = false,
  children,
  className = "absolute inset-0 w-full h-full",
  geoJson,
}: MapBackgroundProps) {
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
        map.addSource("supermarkets", {
          type: "geojson",
          data: geoJson,
        });

        // Circle layer - color coded by operator
        map.addLayer({
          id: "supermarkets-circles",
          type: "circle",
          source: "supermarkets",
          paint: {
            "circle-radius": 6, // Fixed size for all points
            "circle-color": [
              "match",
              ["get", "operator"],
              1,
              "#10b981", // Green for Coop (operator 1)
              2,
              "#ef4444", // Red for ICA (operator 2)
              3,
              "#f97316", // Orange for Both (operator 3)
              "#3b82f6", // Default blue fallback
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
            "circle-opacity": 0.8,
          },
        });

        // Text layer - show count only for clusters (count > 1)
        map.addLayer({
          id: "supermarkets-labels",
          type: "symbol",
          source: "supermarkets",
          layout: {
            "text-field": ["get", "count"],
            "text-size": 9,
            "text-anchor": "center",
            "text-justify": "center",
            "text-allow-overlap": false,
            "text-ignore-placement": false,
          },
          paint: {
            "text-color": "#ffffff",

            "text-halo-color": "#ffffff",
            "text-halo-width": 0.2,
          },
          // Only show labels for clusters with count > 1
          filter: [">", ["get", "count"], 1],
        });
      });
    }

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, [center, zoom, style, interactive, geoJson]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Map background */}
      <div ref={mapContainer} className={className} style={{ zIndex: 0, opacity: 0.8 }} />

      {/* Content overlay */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
