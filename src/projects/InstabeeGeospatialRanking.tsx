import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";
import InstabeeMapBackground, { type GeoJSON } from "../components/InstabeeMapBackground";

export default function InstabeeGeospatialRanking() {
  const [suburbData, setSuburbData] = useState<GeoJSON | null>(null);
  const [citiesData, setCitiesData] = useState<GeoJSON | null>(null);

  useEffect(() => {
    // Load Nuenen regions data
    fetch('/nl-regions.geojson')
      .then(response => response.json())
      .then((data: GeoJSON) => setSuburbData(data))
      .catch(error => console.error('Error loading regions data:', error));

    // Load cities data
    fetch('/nl-cities.geojson')
      .then(response => response.json())
      .then((data: GeoJSON) => setCitiesData(data))
      .catch(error => console.error('Error loading cities data:', error));
  }, []);

  return (
    <InstabeeMapBackground geoJson={suburbData} citiesGeoJson={citiesData}>
      <BackButton />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <PageContainer>
              <PageHeader
                title="Geospatial Ranking"
                company="Instabee"
                year="2025"
                description="Replaced manual ranking with a simple algorithm."
              />

              <PageContent>
                <PageSection>Oh that one is my favorite!</PageSection>

                <PageSection>
                  So, I was assigned to temporarily take ownership of an abandoned geospatial
                  ranking service right before launch in a new market. It was
                  used to rank parcel lockers by proximity to the customer, but a lot of work was
                  done <i>manually</i> and the results weren't too accurate or consistent, so we faced a
                  mountain of manual work if nothing changed.
                </PageSection>

                <PageSection>
                  I've took the initiative to use routing data from OpenStreetMap and automate
                  things, which immediately improved both accuracy and reliability. The changes were
                  deliberately non-intrusive - fully backward-compatible, no backend modifications
                  required, and no extra risks introduced during a critical launch window.
                </PageSection>

                <PageSection>
                  This work unblocked the development, saved the team a lot of time, and gave
                  stakeholders confidence that the launch could move forward. It also set the
                  foundation for future improvements without creating technical debt.
                </PageSection>

                <PageSection>
                  I've also built a simple visualisation UI to visualize the results, which turned
                  out to be essential during the validation phase of the project. And i <i>love</i> making tools!
                </PageSection>

                <PageSection>
                  Later, once things calmed down, another team took over ownership - and they were
                  happy to inherit a service that was stable, useful, and already making progress.
                </PageSection>

                <PageSection>
                  The service was running in <Tag>go</Tag>, additional data processing performed in{" "}
                  <Tag>python</Tag> using data from <Tag>OpenStreetMap</Tag> and <Tag>OSRM</Tag>.
                  Front-end done in <Tag>next.js</Tag>, <Tag>TypeScript</Tag>, using{" "}
                  <Tag>maplibre</Tag>. Most of the development was done in <Tag>cursor</Tag>.
                </PageSection>
              </PageContent>
            </PageContainer>
          </div>
        </div>
      </div>
    </InstabeeMapBackground>
  );
}
