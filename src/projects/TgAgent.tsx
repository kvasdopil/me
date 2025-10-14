import BackButton from "../components/BackButton";
import {
  PageHeader,
  PageContent,
  PageSection,
  PageContainer,
  Tag,
} from "../components/PageComponents";

export default function TgAgent() {
  return (
    <div>
      <BackButton />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-12">
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <PageContainer>
              <PageHeader
                title="Virtual Employee Bot"
                company="Personal Project"
                year="2025"
                description="A Telegram bot that behaves like a virtual team member in group chats, powered by AI."
              />

              <PageContent>
                <PageSection>
                  These days I go to a lot of job interviews. On one of them we ended up talking about
                  the concept of<strong> digital employees </strong>- and how that might change the way we interact
                  with software or solve everyday problems.
                </PageSection>

                <PageSection>
                  So - next-day shower thought - I started wondering: what would it take to have a
                  <em>"virtual employee" inside a regular group chat</em>? Not a fancy dashboard or app, but
                  a bot that acts almost like a real team member. You can tag it, ask it to do
                  something, maybe even brainstorm ideas with it - together with other humans in the
                  chat. Ideally, it shouldn't need to be explicitly mentioned every time, and could
                  <strong> figure out when it's appropriate to respond</strong>.
                </PageSection>

                <PageSection>
                  The goal was to make a simple setup that allows a Telegram bot to behave like a
                  participant in a group conversation - something between a colleague and an
                  assistant.
                </PageSection>

                <PageSection>
                  <strong>Core building blocks:</strong>
                  <ul className="mt-4 space-y-2 ml-6">
                    <li>
                      <Tag>Telegram Bot API</Tag> - the "face" of the virtual employee, a regular chat participant
                    </li>
                    <li>
                      <Tag>Gemini 2.5 Flash</Tag> - the brain of the operation, fast and affordable AI
                    </li>
                    <li>
                      <Tag>Tooling Backend</Tag> - external "skills" the bot can call, currently connected to image generation
                    </li>
                    <li>
                      <Tag>Agent Framework</Tag> - future system for hosting multiple "personalities" or delegating tasks
                    </li>
                  </ul>
                </PageSection>

                <PageSection>
                  The whole thing is still experimental, but it already behaves quite naturally in chat.
                </PageSection>

                <PageSection>
                  <strong>Implementation Approaches:</strong>
                </PageSection>

                <PageSection>
                  <em>"Fully Agentic" Mode:</em> All messages from the chat are sent to the model,
                  allowing the agent to decide when to act without being explicitly mentioned. It works
                  with the right prompt tuning, but it's expensive and can get noisy. I want to revisit
                  this with a local model like Llama 4 to see if it can handle this mode efficiently
                  without external costs.
                </PageSection>

                <PageSection>
                  <em>Mention/Reply Trigger Mode:</em> The bot only reacts when mentioned (@bot do this)
                  or when someone replies to its message. It's simple, cheap, and predictable. The only
                  drawback is that users must remember to reply instead of just writing follow-ups.
                </PageSection>

                <PageSection>
                  <em>Hybrid Mode (Future):</em> The most balanced approach - react when mentioned but
                  include summarized context of recent messages, with automatic follow-ups during
                  "activity windows." The challenge will be making it feel natural - not too silent,
                  not too chatty.
                </PageSection>

                <PageSection>
                  <strong>Message Structuring:</strong> Just passing plain text messages isn't enough.
                  The model needs structure to understand who's speaking, what replies to what, and
                  what media is attached.
                </PageSection>

                <PageSection>
                  I ended up using a simple XML-like markup for messages:
                </PageSection>

                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm mb-4">
                  {
                    `<msg from="user" id="123" responseTo="120">
  Here's an idea for an image.
  <image url="foo.bar" />
</msg>`
                  }
                </div>

                <PageSection>
                  The LLM responds with the same markup and can emit &lt;no-action /&gt; when it decides
                  not to respond, or error="something" when something fails. So far, it's been very
                  consistent with this format.
                </PageSection>

                <PageSection>
                  For context management, I keep it simple: on each call, I take the latest 20 messages
                  involving the bot. That's usually enough to maintain coherence without ballooning
                  token usage. In the future, I might switch to chunked cleanup or caching.
                </PageSection>

                <PageSection>
                  <strong>Prompt Enrichment:</strong> Another interesting aspect is making the LLM's
                  tool calls more creative by improving prompts before sending them to tools like
                  image generators.
                </PageSection>

                <PageSection>
                  <em>Three approaches:</em>
                  <ul className="mt-4 space-y-2 ml-6">
                    <li>• Inside the tool call itself - the LLM enriches prompts before passing to APIs</li>
                    <li>• Implicit enrichment - add instructions in system prompt with examples</li>
                    <li>• Two-step enrichment - use a more capable model to rewrite requests first</li>
                  </ul>
                </PageSection>

                <PageSection>
                  <strong>Results:</strong> In the end, I built a Telegram bot that generates and refines
                  images via Gemini 2.5 Flash Image, understands free-form prompts, works seamlessly in
                  group chats, and behaves predictably like a "mini teammate."
                </PageSection>

                <PageSection>
                  It's not a fully virtual employee yet - but it's a good step toward that.
                </PageSection>

                <PageSection>
                  <strong>Future Directions:</strong>
                  <ul className="mt-4 space-y-2 ml-6">
                    <li>Slack integration and thread handling</li>
                    <li>Persistent memory beyond message context</li>
                    <li>More tools like video generation (Sora)</li>
                    <li>Local LLM experiments for offline "fully agentic" mode</li>
                    <li>Exploring state-of-the-art agentic frameworks</li>
                  </ul>
                </PageSection>

                <PageSection>
                  The project is built with <Tag>Node.js</Tag>, <Tag>Telegram Bot API</Tag>, and{" "}
                  <Tag>Google Gemini AI</Tag>. Message structuring uses custom <Tag>XML markup</Tag>{" "}
                  for reliable parsing.
                </PageSection>

                <PageSection>
                  The idea of blending a virtual teammate naturally into human chat feels like a big
                  step toward how we might actually work with AI day-to-day. Next step: making it feel
                  less like a bot - and more like someone you could actually collaborate with.
                </PageSection>
              </PageContent>
            </PageContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
