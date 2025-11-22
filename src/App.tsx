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
          name="Alexey Guskov 🦸‍♂️"
          roles={[
            "Full Stack",
            "Mobile",
            "IoT",
            "Embedded Linux Developer",
            "AI fanboy",
            "🤖🛰️📱💻",
          ]}
          location="Stockholm, Sweden"
          email="kvasdopil@gmail.com"
          phone="+46722241995"
          githubUrl="https://github.com/kvasdopil"
          cvUrl="./cv-guskov-2025.pdf"
          photoUrl="photo.jpeg"
          base={base}
        >
          <p>Hey, I’m Alex.</p>
          <p>
            For about two decades now, I’ve been chasing one thing:
            <strong className="font-semibold"> creative problem-solving</strong>. I like taking
            those “what if” shower thoughts - IoT, mobile, AI, you name it - and shaping them into{" "}
            <strong className="font-semibold">actual products</strong> that people can use.
          </p>
          <p>It’s equal parts fun and terrifying, but mostly fun.</p>
          <p>
            Where I really hit my stride is in the middle of a challenge. Sometimes that’s designing
            a system from scratch. Sometimes it’s
            <strong className="font-semibold"> helping teammates </strong>wrangle new tools so
            nobody’s pulling their hair out. Either way, the goal is always the same: make things a
            little easier, a little smarter.
          </p>
          <p>And ideally avoid any “why did we do this to ourselves?” moments.</p>
          <p>
            At the end of the day, it’s about moving <strong className="font-semibold">fast</strong>
            , building <strong className="font-semibold">smart</strong>, and making sure the{" "}
            <strong className="font-semibold">whole team </strong>
            can shine. Because the best wins feel like an Avengers team-up, right?
          </p>
        </Header>
      </div>

      <section id="skills" className="scroll-mt-24">
        <Skills>
          <Skill label="🎨 Frontend & Mobile:">
            Typescript, React, React Native, Expo, Next.js, Vite, Redux, React Query, React
            Navigation, Jest, Playwright, Storybook, Yjs CRDT, Tailwind, styled components,
            Websockets
          </Skill>
          <Skill label="🧰 Backend:">
            Node.js, Python, FastAPI, Go, Express.js, MongoDB, Redis, MySQL, PostgreSQL, OAuth,
            gRPC, Protobuf, Websockets, RabbitMQ, JWT
          </Skill>
          <Skill label="🔌 IoT & Embedded:">
            Embedded Linux, Yocto, Azure IoT Edge, Ubuntu Core, ARM, RPI, Rockchip, NXP, U-boot,
            OTA, Chromium, Electron, Linux kernel, MDNS, UART, GPIO, SPI, MQTT, NPU, Bluetooth, CAN,
            Modbus, ROS2, ESP32, C++, C
          </Skill>
          <Skill label="🧪 AI & Data:">
            Python, OpenCV, Numpy, Pillow, Tensorflow, Jupyter, Pyodide, AI-sdk, Cursor/Claude code,
            MCP development, context engineering, spec-based development, LangChain
          </Skill>
          <Skill label="🗺️ Geospatial:">OSM, MapboxGL, Maplibre, Here</Skill>
          <Skill label="🎮 Graphics & XR:">
            Three.js, Drei, WebGL, GLSL, OpenXR, Oculus SDK, Unity, Blender, AR/VR, C#
          </Skill>
          <Skill label="☁️ DevOps & Cloud:">
            Docker, Terraform, Helm, K8S, Azure, AWS, GCP, Serverless, GitHub Actions, Grafana
          </Skill>
          <Skill label="🌐 Networking:">Linux, FreeBSD, VPN, Ip-telephony, IPv6</Skill>
          <Skill label="🧩 Other:">Design systems, 3D graphics & modeling</Skill>
        </Skills>
      </section>

      <section id="projects" className="scroll-mt-24">
        <Timeline base={base}>
          <TimelineItem
            side="left"
            colorClass="bg-emerald-500"
            period="2025 – current"
            title="Instabee • Full Stack Developer 📦🐝"
            description="Parcel delivery to lockers. Best and biggest in Nordics."
            pairWithNext
            tags={[
              "React",
              "TypeScript",
              "Next.js",
              "Go",
              "K8S",
              "Ai-sdk",
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
              Built and maintained internal tools for monitoring and managing a large device fleet.
            </TimelineBullet>
            <TimelineBullet>
              Developed and optimized backend APIs supporting core business services.
            </TimelineBullet>
            <TimelineBullet
              link="/project/instabee-geospatial-ranking"
              linkText="More..."
              linkIcon={false}
              linkTarget="_self"
            >
              Expanded and optimized geospatial services ahead of launch in a new international
              market.
            </TimelineBullet>
            <TimelineBullet>
              Prototyped hardware and software for the next-generation parcel locker platform.
            </TimelineBullet>
            <TimelineBullet>
              Researched and developed AI-powered analytics tools for operational insights.
            </TimelineBullet>
            <TimelineBullet>
              Advocated for a company-wide adoption of AI-assisted development practices, improving
              developer productivity.
            </TimelineBullet>
            <TimelineBullet>Self-proclaimed AI-ambassador and MVP fanboy.</TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-teal-500"
            period="2025"
            title="UI Generator 🎨"
            link="/project/ui-gen"
            linkText="More..."
            hobby
            description="Creates UI mockups and project spec from text prompts. A tool to 'spec by seeing' instead of 'spec by hoping the text makes sense.'"
            tags={["Next.js", "Gemini AI", "Prisma", "Neon DB", "Vercel", "Cursor"]}
          >
            <a
              className="text-sm text-white border-b-1 hover:text-blue-100"
              href="/project/ui-gen"
            >
              Read more...
            </a>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-blue-500"
            period="2025"
            title="Garbage truck game"
            link="https://garbage.guskov.dev"
            linkText="🚚 Play"
            hobby
            pairWithNext
            description="My son was obsessed with garbage trucks, so when OpenAI released a new multimodal model I took it for a spin to create a little tablet game for him."
            tags={["Three.js", "ImageMagick", "Phaser.js", "GameDev"]}
          ></TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-indigo-500"
            period="2023 – 2025"
            title="NextML • Full Stack Developer 🧠📈"
            description="A solution to automate inspection of railroad track and wire using computer vision and machine-learning."
            startup
            tags={["React", "TypeScript", "Leaflet", "Geospatial", "OpenStreetMap", "WebGL"]}
          >
            <TimelineBullet link="https://lnkd.in/p/dq6yaPTD" linkText="Check it out...">
              UI for AI-based track damage detection product.
            </TimelineBullet>
            <TimelineBullet>Extensive refactoring and rapid prototyping.</TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="left"
            colorClass="bg-amber-500"
            period="2017 – 2023"
            title="Ombori Apps • Head of R&D 🧪🔬"
            description="Interactive digital solutions for retail."
            pairWithNext
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
            <TimelineBullet>Edge IoT platform and custom Linux-based OS.</TimelineBullet>
            <TimelineBullet>
              Suite of tools to manage, support and maintain the fleet of devices.
            </TimelineBullet>
            <TimelineBullet>
              Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO).
            </TimelineBullet>
            <TimelineBullet>Computer vision solutions (face detection/recognition).</TimelineBullet>
            <TimelineBullet>
              Interactive apps with 3D/graphics, TTS, speech & image recognition.
            </TimelineBullet>
          </TimelineItem>
          <TimelineItem
            side="right"
            colorClass="bg-purple-500"
            period="2023 – ongoing"
            title="Robot Arm 🤖"
            link="/project/robot-arm"
            linkText="More..."
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
            colorClass="bg-sky-500"
            period="2018 – 2020"
            title="Nordnet • Mobile & Web Developer 📱🕸️"
            description="Stock trading and savings application for web and mobile."
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
