import BackButton from "../components/BackButton";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";

export default function UiGen() {
  return (
    <div>
      <BackButton />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-12">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <PageContainer>
              <PageHeader
                title="UI Generator"
                company="Personal Project"
                year="2025"
                description="Creates UI mockups and project spec from text prompts"
              />

              <PageContent>
                <PageSection>
                  One thing that's been bothering me with vibe-coding tools is that you don't really
                  see what your app will look like until you've already implemented half of it. Every
                  prompt turns into a full build step, and suddenly you're three iterations deep
                  wondering how you accidentally created a completely different product. (Ask me how I
                  know.)
                </PageSection>

                <PageSection>
                  I'm also a big believer in <strong>spec-based development</strong> (and IMO all
                  vibe-coding tools will end up implementing it in some form) - but writing frontend
                  specs is… hard. Some things just don't fit neatly into words. And some of us
                  (myself included) understand UI much better when we can see them instead of trying
                  to decode a paragraph that says "left sidebar but not too left."
                </PageSection>

                <PageSection>
                  There are already tools tackling parts of this - <Tag>Figma Make</Tag>, for
                  example. But I wanted something that focuses specifically on turning quick screens
                  into a clearer project spec, so the AI can worry about visuals and structure
                  instead of getting dragged into backend logic it absolutely wasn't ready for.
                </PageSection>

                <PageSection>So I built a small tool.</PageSection>

                <PageSection>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/Uj_OHDD1RWg"
                      title="UI Generator Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </PageSection>

                <PageSection>
                  You can generate a basic UI mockup from a text prompt, tweak it visually, and
                  instantly see the clickable areas. It can auto-generate connected screens so you can
                  explore flows without committing to any real implementation. Basically, it's a way
                  to <strong>"spec by seeing"</strong> instead of <strong>"spec by hoping the text makes sense."</strong>
                </PageSection>

                <PageSection>
                  When you're done, you can export the whole workspace as a ZIP of simple HTML files
                  - a clean visual reference for whatever AI tool you use next, so it has a much
                  better chance of building a UI that actually matches what you had in mind, not what
                  it thought you meant.
                </PageSection>

                <PageSection>
                  There's still a long list of things I want to add - generating screens from images,
                  ensuring UI consistency across screens, all the usual "version 2" ambitions - but
                  even now it helps validate ideas, refine requirements, and catch edge cases while
                  they're still friendly and inexpensive.
                </PageSection>

                <PageSection>
                  It's open source. You can try it here:{" "}
                  <a
                    className="text-blue-500 decoration-underline"
                    href="https://ui.guskov.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ui.guskov.dev
                  </a>
                </PageSection>

                <PageSection>
                  If you do, I'd love to hear what works, what doesn't, and what made you say "why
                  is this even here?"
                </PageSection>

                <PageSection>
                  The project was made in <Tag>Cursor</Tag>, using <Tag>Gemini AI</Tag> under the hood,
                  implemented with <Tag>Next.js</Tag>, hosted on <Tag>Vercel</Tag>, using <Tag>Neon DB</Tag>{" "}
                  and <Tag>Prisma</Tag> for ORM and migrations.
                </PageSection>
              </PageContent>
            </PageContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

