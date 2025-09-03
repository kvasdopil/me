import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

type TimelineSide = "left" | "right";

type TimelineItemData = {
  side: TimelineSide;
  colorClass: string; // Tailwind color class like "bg-emerald-500"
  period: string;
  title: string;
  description?: string;
  startup?: boolean;
  bullets: string[];
  isLast?: boolean;
  badgeAboveDot?: string;
};

function StartupBadge() {
  return (
    <span className="mr-2 rounded-full px-2 bg-red-100 py-0.5 text-xs font-medium text-red-500 align-middle">
      🚀&nbsp;startup
    </span>
  );
}

function TimelineItem({ item, addTopMargin }: { item: TimelineItemData; addTopMargin?: boolean }) {
  const containerBase = "relative md:grid md:grid-cols-2 md:gap-10";
  const containerClass = addTopMargin ? `${containerBase} mt-12` : containerBase;
  const lineBottomClass = item.isLast ? "-bottom-0" : "-bottom-18";
  const dotClass = item.colorClass;
  const lineClass = item.colorClass;

  const contentLeft = (
    <div className="md:col-span-1 md:pr-12 text-right">
      <div className="text-xs font-semibold text-gray-400">{item.period}</div>
      <div className="font-medium">{item.title}</div>
      {item.description ? (
        <div className="mt-1 text-sm text-gray-600">
          {item.startup ? <StartupBadge /> : null}
          {item.description}
        </div>
      ) : null}
      <ul className="mt-3 inline-block text-left list-inside list-disc text-gray-700">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );

  const contentRight = (
    <div className="md:col-start-2 md:pl-12">
      <div className="text-xs font-semibold text-gray-400">{item.period}</div>
      <div className="font-medium">{item.title}</div>
      {item.description ? (
        <div className="mt-1 text-sm text-gray-600">
          {item.startup ? <StartupBadge /> : null}
          {item.description}
        </div>
      ) : null}
      <ul className="mt-3 list-inside list-disc text-gray-700">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={containerClass}>
      <span
        className={`absolute left-1/2 -translate-x-1/2 top-7 ${lineBottomClass} w-2 md:w-3 rounded-full ${lineClass} z-10`}
      />
      {item.side === "left" ? contentLeft : contentRight}
      {item.badgeAboveDot ? (
        <span className="absolute left-1/2 -translate-x-1/2 top-2 -translate-y-8 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 z-30 shadow-sm">
          {item.badgeAboveDot}
        </span>
      ) : null}
      <span
        className={`absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full ${dotClass} ring-4 ring-white z-20`}
      />
    </div>
  );
}

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
      bullets: [
        "Built and maintained internal tools for device fleet monitoring and management.",
        "Developed and optimized backend APIs supporting core business services.",
        "Expanded and optimized geospatial services ahead of launch in a new market.",
        "Prototyped hardware and software for next‑gen parcel locker platform.",
        "Researched and developed AI-powered analytics tools for operational insights.",
        "Advocated AI-assisted development practices company-wide.",
        "Self‑proclaimed AI‑ambassador and MVP fanboy.",
      ],
    },
    {
      side: "right",
      colorClass: "bg-indigo-500",
      period: "2023 – 2025",
      title: "NextML — Full Stack Developer 🧠📈",
      description:
        "A solution to automate inspection of railroad track and wire using computer vision and machine-learning.",
      startup: true,
      bullets: [
        "UI for AI-based track damage detection product.",
        "Web maps (Leaflet/Mapbox), WebGL, performance optimizations.",
        "Extensive refactoring and rapid prototyping.",
      ],
    },
    {
      side: "left",
      colorClass: "bg-amber-500",
      period: "2017 – 2023",
      title: "Ombori Apps — Head of R&D 🧪🔬",
      description: "Interactive digital solutions for retail.",
      startup: true,
      bullets: [
        "Edge IoT platform and custom Linux-based OS.",
        "Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO).",
        "Computer vision solutions (face detection/recognition).",
        "Interactive apps with 3D/graphics, TTS, speech & image recognition.",
      ],
    },
    {
      side: "right",
      colorClass: "bg-sky-500",
      period: "2018 – 2020",
      title: "Nordnet — Mobile & Web Developer 📱🕸️",
      description: "Stock trading and savings application for web and mobile.",
      bullets: [
        "Contributed to stock trading & savings mobile app ahead of launch.",
        "Built a new web UI component library and key portal sections.",
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
      bullets: [
        "Internet access gateway solutions for the ex‑USSR market.",
        "Full‑stack development, project leadership, and PM.",
        "Networking tech, FreeBSD, Node.js, JavaScript, IP telephony.",
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
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto max-w-4xl px-6 py-10 md:py-12">
        <section>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
            <img
              src={base + "photo.jpeg"}
              alt="Alexey Guskov"
              className="h-48 w-48 rounded-full object-cover shadow-md"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-semibold tracking-tight">Alexey Guskov 🦸‍♂️</h1>
              <div className="mt-2 text-base text-gray-700">
                <ul className="flex flex-wrap gap-3 text-sm">
                  {roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 text-base text-gray-700">
                Hi there, I'm Alex! For me, building software for the last 20 years has been about
                one thing: creative problem-solving. I connect the dots between IoT, mobile, AI, and
                backend to turn "what if" ideas into real-world products, working efficiently
                through the unknowns.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-700">
                <span className="inline-flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-500" /> Stockholm, Sweden
                </span>
                <a
                  href="mailto:kvasdopil@gmail.com"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <FaEnvelope className="text-gray-500" /> kvasdopil@gmail.com
                </a>
                <a
                  href="tel:+46722241995"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  <FaPhone className="text-gray-500" /> (+46) 7-2224-1995
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/kvasdopil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={base + "cv-guskov-2025.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50"
                >
                  📄 Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills after bio */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight">🛠️ Skills</h2>
          <div className="mt-5 space-y-3.5 text-[15px] text-gray-700">
            {skills.map((s) => (
              <div key={s.label}>
                <span className="font-medium">{s.label}</span> {s.value}
              </div>
            ))}
          </div>
        </section>

        {/* Employment history as vertical timeline */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight">🖖 My journey</h2>
          <div className="relative mt-7">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 md:w-3 z-0" />
            {timeline.map((t, idx) => (
              <TimelineItem key={t.title} item={t} addTopMargin={idx !== 0} />
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-7 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">🎓 Education</h2>
            <p className="mt-3 text-base text-gray-700">
              Yaroslavl State University — Master of Computer Science (2003–2008)
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">🗣️ Languages</h2>
            <ul className="mt-3 text-base text-gray-700 list-none">
              {languages.map((lng) => (
                <li key={lng.label}>
                  <span role="img" aria-label={`${lng.label} flag`} className="inline-block mr-1">
                    {lng.emoji}
                  </span>
                  {lng.label} — {lng.level}
                </li>
              ))}
            </ul>
            <h2 className="mt-7 text-xl font-semibold tracking-tight">🎯 Hobbies</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-base text-gray-700">
              {hobbies.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm"
                >
                  {h.label}{" "}
                  <span role="img" aria-label={h.label} className="ml-1">
                    {h.emoji}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-10 pb-10 text-center text-[11px] text-gray-500">
          © {new Date().getFullYear()} Alexey Guskov ✨
        </footer>
      </main>
    </div>
  );
}

export default App;
