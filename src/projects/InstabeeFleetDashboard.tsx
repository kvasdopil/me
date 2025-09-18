import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import MapBackground from "../components/MapBackground";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";
import type { GeoJSON } from "../components/MapBackground";

export default function InstabeeFleetDashboard() {
  const [supermarkets, setSupermarkets] = useState<GeoJSON | null>(null);

  useEffect(() => {
    fetch("/supermarkets.geojson")
      .then((response) => response.json())
      .then((data: GeoJSON) => setSupermarkets(data))
      .catch((error) => console.error("Error loading supermarkets:", error));
  }, []);

  return (
    <MapBackground geoJson={supermarkets || undefined}>
      <BackButton />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-12">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <PageContainer>
              <PageHeader
                title="Fleet Management Dashboard"
                company="Instabee"
                year="2025"
                description="Internal tools for monitoring and managing a fleet of IoT devices."
              />

              <PageContent>
                <PageSection>
                  When I started, just to get a sense of what's going on I've built a small
                  dashboard with all the parcel lockers we managed. It showed them on a map, had
                  some filters, search, historical values and basic reports. Nothing fancy - just a
                  quick experiment so I could get a grip on things and understand how APIs are wired
                  together.
                </PageSection>

                <PageSection>
                  Turns out, the team really liked it. They had been discussing a similar idea for
                  years but couldn't get it moving past the meetings. My little prototype unblocked
                  the project, and together we started shaping it into a proper fleet management
                  dashboard.
                </PageSection>

                <PageSection>
                  So it wasn't just about the tool - it was about showing how a simple experiment
                  can spark collaboration and get everyone moving in the same direction.
                </PageSection>

                <PageSection>
                  In the end, the ultimate goal of this project was to demonstrate the value of
                  quick iterations and side projects. I like bringing people along, building
                  momentum, and proving that even small ideas can turn into something the whole team
                  is proud of.
                </PageSection>

                <PageSection>
                  The project was done in <Tag>TypeScript</Tag> for <Tag>next.js</Tag>, using{" "}
                  <Tag>maplibre</Tag> for map rendering. A small <Tag>psql</Tag> database to keep
                  historical data. Deployments done with <Tag>gh actions</Tag>, <Tag>helm</Tag> and{" "}
                  <Tag>terraform</Tag> to <Tag>k8s</Tag> cluster on <Tag>gcp</Tag>. Most of the
                  development was done in <Tag>cursor</Tag>.
                </PageSection>
              </PageContent>
            </PageContainer>
          </div>
        </div>
      </div>
    </MapBackground>
  );
}
