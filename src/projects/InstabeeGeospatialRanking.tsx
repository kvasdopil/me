import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";
import InstabeeMapBackground from "../components/InstabeeMapBackground";
import type { FeatureCollection } from "geojson";

export default function InstabeeGeospatialRanking() {
  const [suburbData, setSuburbData] = useState<FeatureCollection | null>(null);
  const [citiesData, setCitiesData] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    // Load Nuenen regions data
    fetch("/nl-regions.geojson")
      .then((response) => response.json())
      .then((data: FeatureCollection) => setSuburbData(data))
      .catch((error) => console.error("Error loading regions data:", error));

    // Load cities data
    fetch("/nl-cities.geojson")
      .then((response) => response.json())
      .then((data: FeatureCollection) => setCitiesData(data))
      .catch((error) => console.error("Error loading cities data:", error));
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
                description="Automated ranking process ahead of launch in a new market."
              />

              <PageContent>
                <PageSection>Oh that one is my favorite!</PageSection>

                <PageSection>
                  Picture this: the company is launching in a new country. Exciting times, right?
                  There's just one tiny problem - a critical geospatial ranking service that needs
                  to be updated for the launch.
                </PageSection>

                <PageSection>And, of course, it's abandoned. Nobody really owns it.</PageSection>

                <PageSection>
                  So here I am, the newbie, being assigned to temporarily take ownership of this
                  orphaned service right before launch. But hey, my take on an abandoned system is
                  just as good as anyone else's, right? At least I have the advantage of low
                  expectations.
                </PageSection>

                <PageSection>
                  The service was supposed to rank parcel lockers by proximity to customers. Sounds
                  simple enough. Except a lot of the work was done <i>manually</i>, and the results
                  weren't too accurate or consistent.
                </PageSection>

                <PageSection>
                  Manual work for data preparation? That just doesn't feel right.
                </PageSection>

                <PageSection>
                  Plus, manual work means we have a good chance of missing deadlines. And missing
                  deadlines during a country launch is... well, let's just say it's not ideal for
                  anyone's career prospects.
                </PageSection>

                <PageSection>
                  So I took the initiative to use routing data from OpenStreetMap and automate the
                  whole thing. A few failed attempts, a few cups of coffee, an hour or two just
                  staring at the wall, and boom! I managed to make computers do computer's work.
                  Mind&#8209;blowing!
                </PageSection>

                <PageSection>
                  The best thing is that the changes were deliberately non-intrusive - fully
                  backward-compatible, no backend modifications required, and no extra risks
                  introduced during a critical launch window. Because the last thing you want during
                  a launch is to be the person who broke everything.
                </PageSection>

                <PageSection>
                  This work unblocked the development, saved the team a lot of time, and gave
                  stakeholders confidence that the launch could move forward. It also set the
                  foundation for future improvements without creating technical debt. Win-win-win!
                </PageSection>

                <PageSection>
                  I also built a simple visualization UI to see the results in action. Turns out,
                  this was essential during the validation phase. And I must say I <i>love</i>{" "}
                  making tools!
                </PageSection>

                <PageSection>
                  Because one just never underestimates the power of a good visualization tool. It
                  can do wonders.
                </PageSection>

                <PageSection>
                  Later, once things calmed down, another team took over ownership. They were happy
                  to inherit a service that was stable, useful, and already making progress.
                </PageSection>

                <PageSection>
                  And I was happy to flex my problem-solving muscle once again.
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
