import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";

export default function InstabeeFleetDashboard() {
  return (
    <PageContainer>
      <PageHeader
        title="Fleet Management Dashboard"
        company="Instabee"
        year="2025"
        description="Internal tools for monitoring and managing a fleet of IoT devices."
      />

      <PageContent>
        <PageSection>
          When I started, just to get a sense of what's going on I've built a small dashboard with
          all the parcel lockers we managed. It showed them on a map, had some filters, search,
          historical values and basic reports. Nothing fancy - just a quick experiment so I could
          get a grip on things and understand how APIs are wired together.
        </PageSection>

        <PageSection>
          Turns out, the team really liked it. They had been discussing a similar idea for years but
          couldn't get it moving past the meetings. My little prototype unblocked the project, and
          together we started shaping it into a proper fleet management dashboard. It wasn't just
          about the tool - it was about showing how a simple experiment can spark collaboration and
          get everyone moving in the same direction.
        </PageSection>

        <PageSection>
          For me, this project wasn't only about solving a problem, but also about showing the value
          of quick iterations and side projects. I like bringing people along, building momentum,
          and proving that even small ideas can turn into something the whole team is proud of.
        </PageSection>

        <PageSection>
          The project was done in <Tag>TypeScript</Tag> for <Tag>next.js</Tag>, using{" "}
          <Tag>maplibre</Tag> for map rendering. A small <Tag>psql</Tag> database to keep historical
          data. Deployments done with <Tag>gh actions</Tag>, <Tag>helm</Tag> and{" "}
          <Tag>terraform</Tag> to <Tag>k8s</Tag> cluster on <Tag>gcp</Tag>. Most of the development
          was done in <Tag>cursor</Tag>.
        </PageSection>
      </PageContent>
    </PageContainer>
  );
}
