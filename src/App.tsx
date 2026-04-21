import {
  Container,
  Header,
  Skills,
  Skill,
  Timeline,
  TimelineItem,
  TimelineBullet,
  Education,
  Languages,
  Language,
  Hobbies,
  Hobby,
  Footer,
} from "./components/MainPage";

// Types moved to component props; entries defined inline via <TimelineItem />

function App() {
  const base = import.meta.env.BASE_URL;

  const onTocClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const targetElement = event.target as Element;
    const link = targetElement.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!link) return;
    event.preventDefault();
    const hash = link.getAttribute("href") || "";
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container>
      <nav className="hidden lg:block fixed top-8 left-8 z-50">
        <ul onClick={onTocClick} className="space-y-2 text-base">
          <li>
            <a href="#about" className="hover:border-b-1 border-black">
              About me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:border-b-1 border-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:border-b-1 border-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#hobbies" className="hover:border-b-1 border-black">
              Hobbies
            </a>
          </li>
        </ul>
      </nav>
      <div id="about" className="scroll-mt-24">
        <Header
          name="Alexey Guskov"
          roles={["Founding Engineer", "Tech Lead", "Prototype-Driven", "AI-First"]}
          location="Stockholm, Sweden"
          email="lexa@guskov.dev"
          phone="+46722241995"
          githubUrl="https://github.com/kvasdopil"
          cvUrl="./cv-guskov-2026.pdf"
          photoUrl="photo.jpeg"
          base={base}
        >
          <p>Hey, I’m Alex.</p>
          <p>
            For 20 years I’ve been chasing one thing:
            <strong className="font-semibold"> creative problem-solving</strong>. I take those “what
            if” shower thoughts (IoT, mobile, AI) and turn them into{" "}
            <strong className="font-semibold">actual products people use</strong>.
          </p>
          <p>
            I hit my stride in the middle of a challenge. Sometimes that’s designing a system from
            scratch; sometimes it’s walking into a{" "}
            <strong className="font-semibold">stalled project</strong> and shipping the prototype
            that unsticks the team. Either way, the goal is the same: turn vague problems into
            something concrete, fast.
          </p>
          <p>
            These days, <strong className="font-semibold">AI-first workflows</strong> let me explore
            five ideas in the time it used to take to write the spec for one. I’m betting heavily on
            that shift, both in how I work and in{" "}
            <strong className="font-semibold">helping teammates</strong> do the same.
          </p>
        </Header>
      </div>

      <section id="skills" className="scroll-mt-24">
        <Skills>
          <Skill label="🧪 AI & Dev Tooling:">
            AI agent development, LLM integration, prompt engineering, AI SDK, LangChain, RAG,
            AI-augmented workflows, spec-driven development
          </Skill>
          <Skill label="🎨 Frontend:">
            TypeScript, React, React Native, Next.js, Vite, Tailwind, WebGL, Three.js, MapLibre,
            Mapbox
          </Skill>
          <Skill label="🧰 Backend:">
            Node.js, Kotlin, Go, Python, PostgreSQL, MongoDB, Redis, gRPC, FastAPI
          </Skill>
          <Skill label="🔌 IoT & Embedded:">
            Ubuntu Core, Yocto, Azure IoT Edge, ARM, Linux kernel, MQTT, ROS2, C/C++
          </Skill>
          <Skill label="☁️ Infrastructure:">
            Docker, Kubernetes, Terraform, Helm, AWS, Azure, GCP, GitHub Actions, Grafana
          </Skill>
          <Skill label="🧩 Also:">
            OpenCV, FreeBSD, networking, IP telephony, 3D graphics & modeling, XR
          </Skill>
        </Skills>
      </section>

      <section id="projects" className="scroll-mt-24">
        <Timeline base={base}>
          <TimelineItem
            side="left"
            colorClass="bg-pink-500"
            period="Feb 2026 – current"
            title="Stravito • Senior Full Stack Engineer 🔍"
            description="B2B SaaS research management platform used by major international FMCG companies."
            consultant
            tags={["React", "Kotlin", "TypeScript", "AI-first workflows", "Spec-driven"]}
          >
            <TimelineBullet>
              Delivered a full SaaS project on deadline with a 3-developer team, after introducing
              AI-assisted workflows (Claude Code, Codex) that the team credited as the difference
              between shipping and missing the date.
            </TimelineBullet>
            <TimelineBullet>
              Had zero Kotlin experience on day one, used AI-assisted development to get productive
              in a React + Kotlin codebase fast enough to ship production features from week one.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-emerald-500"
            period="Mar – Sep 2025"
            title="Instabee • Senior Full Stack Engineer 📦🐝"
            description="Parcel delivery to lockers. Biggest locker network in the Nordics."
            pairWithNext
            tags={[
              "React",
              "TypeScript",
              "Next.js",
              "Go",
              "K8S",
              "AI SDK",
              "Geospatial",
              "IoT",
              "Ubuntu Core",
            ]}
          >
            <TimelineBullet
              link="/project/instabee-fleet-dashboard"
              linkText="More..."
              linkIcon={false}
              linkTarget="_self"
            >
              Team had debated a fleet management dashboard for years; shipped a working prototype
              in ~2 weeks that unblocked the project and evolved into the production tool.
            </TimelineBullet>
            <TimelineBullet
              link="/project/instabee-geospatial-ranking"
              linkText="More..."
              linkIcon={false}
              linkTarget="_self"
            >
              Took ownership of an abandoned geospatial ranking service weeks before a new-country
              launch. Automated the manual ops process using OSM/OSRM routing and shipped a
              visualization UI. Unblocked the launch.
            </TimelineBullet>
            <TimelineBullet>
              Worked on the next-gen parcel locker platform (Ubuntu Core OS, custom packages, ARM
              devices) across a 6,000+ locker fleet in 7 markets.
            </TimelineBullet>
            <TimelineBullet>
              Drove AI-first dev practices (internal agents, AI-assisted workflows) and organized
              tech meetups and knowledge-sharing sessions across engineering.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-teal-500"
            period="2025"
            title="UI Generator 🎨"
            hobby
            description="Creates UI mockups and project spec from text prompts. A tool to 'spec by seeing' instead of 'spec by hoping the text makes sense.'"
            tags={["Next.js", "Gemini AI", "Prisma", "Neon DB", "Vercel", "Cursor"]}
          >
            <a className="text-sm text-white border-b-1 hover:text-blue-100" href="/project/ui-gen">
              Read more...
            </a>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-indigo-500"
            period="2023 – Feb 2025"
            title="NextML • Senior Full Stack Engineer 🧠📈"
            description="ML-based inspection of railroad track and overhead wire. Deployed at Trafikverket and Bane NOR."
            startup
            pairWithNext
            tags={["React", "TypeScript", "Leaflet", "Geospatial", "OpenStreetMap", "WebGL"]}
          >
            <TimelineBullet link="https://lnkd.in/p/dq6yaPTD" linkText="Check it out...">
              Brought in as the frontend and greenfield-product partner for a backend-heavy team;
              took DeepInspection from rough prototype to a sellable product.
            </TimelineBullet>
            <TimelineBullet>
              Owned the frontend end-to-end: web maps, WebGL visualization, low-level rendering
              performance for massive geospatial datasets.
            </TimelineBullet>
            <TimelineBullet>
              Engagement ended when the end customer’s funding was cut. The product itself was
              complete and demo-ready.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-blue-500"
            period="2025"
            title="Garbage truck game"
            link="https://garbage.guskov.dev"
            linkText="🚚 Play"
            hobby
            description="My son was obsessed with garbage trucks, so when OpenAI released a new multimodal model I took it for a spin to create a little tablet game for him."
            tags={["Three.js", "ImageMagick", "Phaser.js", "GameDev"]}
          ></TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-amber-500"
            period="2020 – 2023"
            title="Ombori Apps (now Phygrid) • Head of R&D 🧪🔬"
            description="Interactive digital solutions and IoT for retail. Shipped at H&M NYC flagship, IKEA Middle East, and Clas Ohlson."
            startup
            tags={[
              "React",
              "Node.js",
              "Azure",
              "Azure IoT",
              "Docker",
              "MQTT",
              "Linux",
              "WebGL",
              "Chromium development",
              "Video codecs",
            ]}
          >
            <TimelineBullet>
              Architected an IoT edge platform from scratch (custom Linux OS, device management,
              CI/CD, monitoring). Deployed at H&M NYC flagship and IKEA Middle East (6 stores in 2.5
              months) and Clas Ohlson.
            </TimelineBullet>
            <TimelineBullet>
              Suite of tools to manage, support and maintain the device fleet in production.
            </TimelineBullet>
            <TimelineBullet>
              Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO) and computer
              vision (face detection/recognition).
            </TimelineBullet>
            <TimelineBullet>
              Interactive apps with 3D/graphics, TTS, speech & image recognition.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-sky-500"
            period="2018 – 2020"
            title="Nordnet • Mobile & Web Developer 📱🕸️"
            description="Stock trading and savings application for web and mobile."
            pairWithNext
            tags={[
              "React Native",
              "React",
              "React Navigation",
              "Testing",
              "Performance Optimization",
              "CI/CD",
              "Design Systems",
              "Storybook",
            ]}
          >
            <TimelineBullet
              link="https://www.nordnet.se/se/tjanster/handelsapplikationer/nordnet-app"
              linkText="Here it is..."
            >
              Joined the team to help launch the new mobile app, used over a million of users now.
            </TimelineBullet>
            <TimelineBullet>
              Built a new web UI component library and key portal sections.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-purple-500"
            period="2023 – ongoing"
            title="Robot Arm 🤖"
            hobby
            description="Because who wouldn't want to build one? A 3D-printed robot arm with custom servos, ROS2 integration, and a web UI for control."
            tags={["Python", "ROS2", "Fusion 360", "Three.js", "Next.js"]}
          >
            <a
              className="text-sm text-white border-b-1 hover:text-blue-100"
              href="/project/robot-arm"
            >
              Read more...
            </a>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-amber-500"
            period="2017 – 2020"
            title="Ombori Apps • Mobile Developer 📱"
            description="React Native apps for retail clients. Promoted to Head of R&D in 2020 to lead the IoT platform effort."
            startup
            tags={["React Native", "React", "Node.js", "Azure"]}
          >
            <TimelineBullet>
              Shipped React Native mobile apps for retail deployments across multiple brands.
            </TimelineBullet>
            <TimelineBullet>
              Promoted to Head of R&D in 2020 to take over the IoT platform and device fleet.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-rose-500"
            period="2005 – 2017"
            title="Areal • Head of Software Development 🧭"
            description="Multi-purpose solution to automate system administrators' work. A firewall, proxy, ACL, mail server, telephony, VPN, in a nice all-in-one package with a simple UI."
            startup
            badgeAboveDot="Moved to 🇸🇪 Sweden"
            tags={[
              "Project Management",
              "Node.js",
              "JavaScript",
              "React",
              "PHP",
              "FreeBSD",
              "Networks",
            ]}
            isLast
          >
            <TimelineBullet>
              Internet access gateway solutions for the ex‑USSR market.
            </TimelineBullet>
            <TimelineBullet>
              Led the project from a prototype to mature product with large customer base.
            </TimelineBullet>
            <TimelineBullet>Full‑stack development, project leadership, and PM.</TimelineBullet>
          </TimelineItem>
        </Timeline>
      </section>

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        <Education
          period="2003 - 2008"
          institution="Yaroslavl State University • Master of Computer Science"
        />
        <div>
          <Languages>
            <Language emoji="🇬🇧" level="fluent">
              English
            </Language>
            <Language emoji="🇸🇪" level="basic">
              Swedish
            </Language>
          </Languages>
          <div id="hobbies" className="scroll-mt-24">
            <Hobbies>
              <Hobby>DIY 🛠️</Hobby>
              <Hobby>3D Printing 🧱</Hobby>
              <Hobby>XR 🥽</Hobby>
              <Hobby>Robotics 🤖</Hobby>
              <Hobby>Gamedev 🎮</Hobby>
              <Hobby>Music 🎵</Hobby>
            </Hobbies>
          </div>
        </div>
      </div>

      <Footer name="Alexey Guskov" />
    </Container>
  );
}

export default App;
