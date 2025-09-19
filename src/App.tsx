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

  return (
    <Container>
      <Header
        name="Alexey Guskov 🦸‍♂️"
        roles={["Full Stack", "Mobile", "IoT", "Embedded Linux Developer", "AI fanboy", "🤖🛰️📱💻"]}
        location="Stockholm, Sweden"
        email="kvasdopil@gmail.com"
        phone="+46722241995"
        githubUrl="https://github.com/kvasdopil"
        cvUrl="cv-guskov-2025.pdf"
        photoUrl="photo.jpeg"
        base={base}
      >
        <p>Hi there, I'm Alex!</p>
        <p>
          For the last 20 years, my main drive has been
          <strong className="font-semibold"> creative problem-solving</strong>. I love connecting
          the dots between different worlds like IoT, mobile, and AI, and turning a cool "what if"
          <strong className="font-semibold"> idea into a real-world product</strong>.
        </p>
        <p>
          I'm at my best when tackling a tough challenge, whether that means architecting a new
          system from the ground up or{" "}
          <strong className="font-semibold"> mentoring teammates </strong>
          on new tools that make everyone's workflow a little smoother.
        </p>
        <p>
          It all comes down to moving<strong className="font-semibold"> fast</strong>, building
          <strong className="font-semibold"> smart</strong>, and fostering a great environment where
          the<strong className="font-semibold"> whole team </strong>can succeed.
        </p>
      </Header>

      <Skills>
        <Skill label="🎨 Frontend & Mobile:">
          Typescript, React, React Native, Expo, Next.js, Vite, Redux, React Query, React
          Navigation, Jest, Playwright, Storybook, Yjs CRDT, Tailwind, styled components, Websockets
        </Skill>
        <Skill label="🧰 Backend:">
          Node.js, Python, FastAPI, Go, Express.js, MongoDB, Redis, MySQL, PostgreSQL, OAuth, gRPC,
          Protobuf, Websockets, RabbitMQ, JWT
        </Skill>
        <Skill label="🔌 IoT & Embedded:">
          Embedded Linux, Yocto, Azure IoT Edge, Ubuntu Core, ARM, RPI, Rockchip, NXP, U-boot, OTA,
          Chromium, Electron, Linux kernel, MDNS, UART, GPIO, SPI, MQTT, NPU, Bluetooth, CAN,
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

      <Timeline base={base}>
        <TimelineItem
          side="left"
          colorClass="bg-emerald-500"
          period="2025 – current"
          title="Instabee — Full Stack Developer 📦🐝"
          description="Parcel delivery to lockers. Best and biggest in Nordics."
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
          title="NextML — Full Stack Developer 🧠📈"
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
          title="Ombori Apps — Head of R&D 🧪🔬"
          description="Interactive digital solutions for retail."
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
          colorClass="bg-sky-500"
          period="2018 – 2020"
          title="Nordnet — Mobile & Web Developer 📱🕸️"
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
          title="Areal — Head of Software Development 🧭"
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
          <TimelineBullet>Internet access gateway solutions for the ex‑USSR market.</TimelineBullet>
          <TimelineBullet>
            Led the project from a prototype to mature product with large customer base.
          </TimelineBullet>
          <TimelineBullet>Full‑stack development, project leadership, and PM.</TimelineBullet>
        </TimelineItem>
      </Timeline>

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        <Education
          period="2003 - 2008"
          institution="Yaroslavl State University — Master of Computer Science"
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

      <Footer name="Alexey Guskov" />
    </Container>
  );
}

export default App;
