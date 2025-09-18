#!/usr/bin/env node

// Haversine formula to calculate distance between two points in meters
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth's radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Cluster points within 200 meters
function clusterPoints(points, maxDistance = 200) {
  const clusters = [];
  const processed = new Set();

  for (const point of points) {
    if (processed.has(point.id)) continue;

    const cluster = [point];
    processed.add(point.id);

    // Find all points within maxDistance
    for (const otherPoint of points) {
      if (processed.has(otherPoint.id)) continue;

      const distance = calculateDistance(point.lat, point.lon, otherPoint.lat, otherPoint.lon);

      if (distance <= maxDistance) {
        cluster.push(otherPoint);
        processed.add(otherPoint.id);
      }
    }

    clusters.push(cluster);
  }

  return clusters;
}

// Calculate centroid of a cluster
function calculateCentroid(cluster) {
  const totalLat = cluster.reduce((sum, point) => sum + point.lat, 0);
  const totalLon = cluster.reduce((sum, point) => sum + point.lon, 0);

  return {
    lat: totalLat / cluster.length,
    lon: totalLon / cluster.length,
  };
}

const CLUSTER_DISTANCE = 1000;

// Convert OSM to GeoJSON
function osmToGeoJson(osmData) {
  // Extract all points from OSM data
  const points = [];

  osmData.elements.forEach((element) => {
    if (element.type === "node" && element.lat !== undefined && element.lon !== undefined) {
      points.push({
        id: element.id,
        lat: element.lat,
        lon: element.lon,
        operator: element.tags?.name,
      });
    }
  });

  // Cluster points within 500 meters
  const clusters = clusterPoints(points, CLUSTER_DISTANCE);

  // Create GeoJSON features for each cluster
  const features = clusters.map((cluster, index) => {
    const centroid = calculateCentroid(cluster);

    // Determine operator value: Coop = 1, ICA = 2, Both = 3
    const uniqueOperators = [...new Set(cluster.map((p) => p.operator).filter(Boolean))];
    let operator = 0;
    if (uniqueOperators.length === 1) {
      if (uniqueOperators[0].toLowerCase().includes("coop")) operator = 1;
      else if (uniqueOperators[0].toLowerCase().includes("ica")) operator = 2;
    } else if (uniqueOperators.length > 1) {
      operator = 3; // Both Coop and ICA
    }

    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [centroid.lon, centroid.lat], // GeoJSON uses [lng, lat]
      },
      properties: {
        // clusterId: index,
        count: cluster.length,
        // Store individual point IDs for reference
        // pointIds: cluster.map(p => p.id),
        operator: operator,
      },
    };
  });

  return {
    type: "FeatureCollection",
    features,
  };
}

// CLI functionality - read from stdin, write to stdout
let inputData = "";

process.stdin.on("data", (chunk) => {
  inputData += chunk;
});

process.stdin.on("end", () => {
  try {
    const osmData = JSON.parse(inputData);
    const geoJson = osmToGeoJson(osmData);
    process.stdout.write(JSON.stringify(geoJson, null, 2) + "\n");
  } catch (error) {
    console.error("Error processing OSM data:", error);
    process.exit(1);
  }
});

process.stdin.on("error", (error) => {
  console.error("Error reading from stdin:", error);
  process.exit(1);
});
