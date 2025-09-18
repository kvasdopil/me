import {
  Container,
  Header,
  Skills,
  Timeline,
  Education,
  Languages,
  Hobbies,
  Footer,
} from "./components/MainPage";

// Types
type TimelineSide = "left" | "right";

type BulletItem = {
  text: string;
  id?: string; // unique id if details present
  details?: string[]; // paragraphs
  detailsTitle?: string;
};

type TimelineItemData = {
  side: TimelineSide;
  colorClass: string; // Tailwind color class like "bg-emerald-500"
  period: string;
  title: string;
  description?: string;
  startup?: boolean;
  hobby?: boolean;
  pairWithNext?: boolean;
  bullets: BulletItem[];
  isLast?: boolean;
  badgeAboveDot?: string;
  tags?: string[];
  link?: string;
  linkText?: string;
};

function App() {
  const base = import.meta.env.BASE_URL;

  const roles: string[] = [
    "Full Stack",
    "Mobile",
    "IoT",
    "Embedded Linux Developer",
    "AI fanboy",
    "🤖🛰️📱💻",
  ];

  const skills: { label: string; value: string }[] = [
    {
      label: "🎨 Frontend & Mobile:",
      value:
        "Typescript, React, React Native, Expo, Next.js, Vite, Redux, React Query, React Navigation, Jest, Playwright, Storybook, Yjs CRDT, Tailwind, styled components, Websockets",
    },
    {
      label: "🧰 Backend:",
      value:
        "Node.js, Python, FastAPI, Go, Express.js, MongoDB, Redis, MySQL, PostgreSQL, OAuth, gRPC, Protobuf, Websockets, RabbitMQ, JWT",
    },
    {
      label: "🔌 IoT & Embedded:",
      value:
        "Embedded Linux, Yocto, Azure IoT Edge, Ubuntu Core, ARM, RPI, Rockchip, NXP, U-boot, OTA, Chromium, Electron, Linux kernel, MDNS, UART, GPIO, SPI, MQTT, NPU, Bluetooth, CAN, Modbus, ROS2, ESP32, C++, C",
    },
    {
      label: "🧪 AI & Data:",
      value:
        "Python, OpenCV, Numpy, Pillow, Tensorflow, Jupyter, Pyodide, AI-sdk, Cursor/Claude code, MCP development, context engineering, spec-based development, LangChain",
    },
    { label: "🗺️ Geospatial:", value: "OSM, MapboxGL, Maplibre, Here" },
    {
      label: "🎮 Graphics & XR:",
      value: "Three.js, Drei, WebGL, GLSL, OpenXR, Oculus SDK, Unity, Blender, AR/VR, C#",
    },
    {
      label: "☁️ DevOps & Cloud:",
      value: "Docker, Terraform, Helm, K8S, Azure, AWS, GCP, Serverless, GitHub Actions, Grafana",
    },
    { label: "🌐 Networking:", value: "Linux, FreeBSD, VPN, Ip-telephony, IPv6" },
    { label: "🧩 Other:", value: "Design systems, 3D graphics & modeling" },
  ];

  const timeline: TimelineItemData[] = [
    {
      side: "left",
      colorClass: "bg-emerald-500",
      period: "2025 – current",
      title: "Instabee — Full Stack Developer 📦🐝",
      description: "Parcel delivery to lockers. Best and biggest in Nordics.",
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Go",
        "K8S",
        "Ai-sdk",
        "Geospatial",
        "IoT",
        "Ubuntu Core",
      ],
      bullets: [
        {
          text: "Built and maintained internal tools for monitoring and managing a large device fleet.",
          id: "instabee-fleet-dashboard",
        },
        { text: "Developed and optimized backend APIs supporting core business services." },
        {
          text: "Expanded and optimized geospatial services ahead of launch in a new international market.",
          id: "instabee-geospatial-ranking",
        },
        {
          text: "Prototyped hardware and software for the next-generation parcel locker platform.",
        },
        { text: "Researched and developed AI-powered analytics tools for operational insights." },
        {
          text: "Advocated for a company-wide adoption of AI-assisted development practices, improving developer productivity.",
        },
        { text: "Self-proclaimed AI-ambassador and MVP fanboy." },
      ],
    },
    {
      side: "left",
      colorClass: "bg-blue-500",
      period: "2025",
      title: "Garbage truck game",
      link: "https://garbage.guskov.dev",
      linkText: "Play",
      hobby: true,
      pairWithNext: true,
      description:
        "My son was obsessed with garbage trucks, so when OpenAI released a new multimodal model I took it for a spin to create a little tablet game for him.",
      tags: ["Three.js", "ImageMagick", "Phaser.js", "GameDev"],
      bullets: [],
    },
    {
      side: "right",
      colorClass: "bg-indigo-500",
      period: "2023 – 2025",
      title: "NextML — Full Stack Developer 🧠📈",
      description:
        "A solution to automate inspection of railroad track and wire using computer vision and machine-learning.",
      startup: true,
      tags: ["React", "TypeScript", "Leaflet", "Geospatial", "OpenStreetMap", "WebGL"],
      bullets: [
        { text: "UI for AI-based track damage detection product." },
        { text: "Web maps (Leaflet/Mapbox), WebGL, performance optimizations." },
        { text: "Extensive refactoring and rapid prototyping." },
      ],
    },
    {
      side: "left",
      colorClass: "bg-amber-500",
      period: "2017 – 2023",
      title: "Ombori Apps — Head of R&D 🧪🔬",
      description: "Interactive digital solutions for retail.",
      startup: true,
      tags: [
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
      ],
      bullets: [
        { text: "Edge IoT platform and custom Linux-based OS." },
        { text: "Suite of tools to manage, support and maintain the fleet of devices." },
        { text: "Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO)." },
        { text: "Computer vision solutions (face detection/recognition)." },
        { text: "Interactive apps with 3D/graphics, TTS, speech & image recognition." },
      ],
    },
    {
      side: "right",
      colorClass: "bg-sky-500",
      period: "2018 – 2020",
      title: "Nordnet — Mobile & Web Developer 📱🕸️",
      description: "Stock trading and savings application for web and mobile.",
      tags: [
        "React Native",
        "React",
        "React Navigation",
        "Testing",
        "Performance Optimization",
        "CI/CD",
        "Design Systems",
        "Storybook",
      ],
      bullets: [
        { text: "Joined the team to help launch the new mobile app." },
        { text: "Built a new web UI component library and key portal sections." },
      ],
    },
    {
      side: "left",
      colorClass: "bg-rose-500",
      period: "2005 – 2017",
      title: "Areal — Head of Software Development 🧭",
      description:
        "Multi-purpose solution to automate system administrators' work. A firewall, proxy, ACL, mail server, telephony, VPN, in a nice all-in-one package with a simple UI.",
      startup: true,
      badgeAboveDot: "Moved to 🇸🇪 Sweden",
      tags: ["Project Management", "Node.js", "JavaScript", "React", "PHP", "FreeBSD", "Networks"],
      bullets: [
        { text: "Internet access gateway solutions for the ex‑USSR market." },
        { text: "Led the project from a prototype to mature product with large customer base." },
        { text: "Full‑stack development, project leadership, and PM." },
      ],
      isLast: true,
    },
  ];

  const languages: { emoji: string; label: string; level: string }[] = [
    { emoji: "🇬🇧", label: "English", level: "fluent" },
    { emoji: "🇸🇪", label: "Swedish", level: "basic" },
  ];

  const hobbies: { label: string; emoji: string }[] = [
    { label: "DIY", emoji: "🛠️" },
    { label: "3D Printing", emoji: "🧱" },
    { label: "XR", emoji: "🥽" },
    { label: "Robotics", emoji: "🤖" },
    { label: "Gamedev", emoji: "🎮" },
    { label: "Music", emoji: "🎵" },
  ];

  const bioParagraphs = [
    "Hi there, I'm Alex!",
    'For the last 20 years, my main drive has been&nbsp;<strong class="font-semibold">creative problem-solving</strong>. I love connecting the dots between different worlds like IoT, mobile, and AI, and turning a cool "what if"&nbsp;<strong class="font-semibold">idea into a real-world product</strong>.',
    "I'm at my best when tackling a tough challenge, whether that means architecting a new system from the ground up or&nbsp;<strong class=\"font-semibold\">mentoring teammates</strong> on new tools that make everyone's workflow a little smoother.",
    'It all comes down to moving <strong class="font-semibold">fast</strong>, building&nbsp;<strong class="font-semibold">smart</strong>, and fostering a great environment where the&nbsp;<strong class="font-semibold">whole team</strong> can succeed.',
  ];

  return (
    <Container>
      <Header
        name="Alexey Guskov 🦸‍♂️"
        roles={roles}
        bio={bioParagraphs}
        location="Stockholm, Sweden"
        email="kvasdopil@gmail.com"
        phone="+46722241995"
        githubUrl="https://github.com/kvasdopil"
        cvUrl="cv-guskov-2025.pdf"
        photoUrl="photo.jpeg"
        base={base}
      />

      <Skills skills={skills} />

      <Timeline items={timeline} base={base} />

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        <Education
          period="2003 - 2008"
          institution="Yaroslavl State University — Master of Computer Science"
        />
        <div>
          <Languages languages={languages} />
          <Hobbies hobbies={hobbies} />
        </div>
      </div>

      <Footer name="Alexey Guskov" />
    </Container>
  );
}

export default App;
