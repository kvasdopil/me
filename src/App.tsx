import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function App() {
  const base = import.meta.env.BASE_URL;
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
              <h1 className="text-3xl font-semibold tracking-tight">Alexey Guskov 🚀</h1>
              <p className="mt-2 text-base text-gray-700">
                <ul className="flex flex-wrap gap-3 text-sm">
                  <li>Full Stack</li>
                  <li>Mobile</li>
                  <li>IoT</li>
                  <li>Embedded Linux Developer</li>
                  <li>AI fanboy</li>
                  <li>🤖🛰️📱💻</li>
                </ul>
              </p>
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
            <div>
              <span className="font-medium">🎨 Frontend & Mobile:</span> Typescript, React, React
              Native, Expo, Next.js, Vite, Redux, React Query, React Navigation, Jest, Playwright,
              Storybook, Yjs CRDT, Tailwind, styled components, Websockets
            </div>
            <div>
              <span className="font-medium">🧰 Backend:</span> Node.js, Python, FastAPI, Go,
              Express.js, MongoDB, Redis, MySQL, PostgreSQL, OAuth, gRPC, Protobuf, Websockets,
              RabbitMQ, JWT
            </div>
            <div>
              <span className="font-medium">🔌 IoT & Embedded:</span> Embedded Linux, Yocto, Azure
              IoT Edge, Ubuntu Core, ARM, RPI, Rockchip, NXP, U-boot, OTA, Chromium, Electron, Linux
              kernel, MDNS, UART, GPIO, SPI, MQTT, NPU, Bluetooth, CAN, Modbus, ROS2, ESP32, C++, C
            </div>
            <div>
              <span className="font-medium">🧪 AI & Data:</span> Python, OpenCV, Numpy, Pillow,
              Tensorflow, Jupyter, Pyodide, AI-sdk, Cursor/Claude code, MCP development, context
              engineering, spec-based development, LangChain
            </div>
            <div>
              <span className="font-medium">🗺️ Geospatial:</span> OSM, MapboxGL, Maplibre, Here
            </div>
            <div>
              <span className="font-medium">🎮 Graphics & XR:</span> Three.js, Drei, WebGL, GLSL,
              OpenXR, Oculus SDK, Unity, Blender, AR/VR, C#
            </div>
            <div>
              <span className="font-medium">☁️ DevOps & Cloud:</span> Docker, Terraform, Helm, K8S,
              Azure, AWS, GCP, Serverless, GitHub Actions, Grafana
            </div>
            <div>
              <span className="font-medium">🌐 Networking:</span> Linux, FreeBSD, VPN, Ip-telephony,
              IPv6
            </div>
            <div>
              <span className="font-medium">🧩 Other:</span> Design systems, 3D graphics & modeling
            </div>
          </div>
        </section>

        {/* Employment history as vertical timeline */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight">🖖 My journey</h2>
          <div className="relative mt-7">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 md:w-3 z-0" />

            {/* Instabee (Left) */}
            <div className="relative md:grid md:grid-cols-2 md:gap-10">
              <span className="absolute left-1/2 -translate-x-1/2 top-7 -bottom-18 w-2 md:w-3 rounded-full bg-emerald-500 z-10" />
              <div className="md:col-span-1 md:pr-12 text-right">
                <div className="text-xs font-semibold text-gray-400">2025 – current</div>
                <div className="font-medium">Instabee — Full Stack Developer 📦🐝</div>
                <ul className="mt-3 inline-block text-left list-inside list-disc text-gray-700">
                  <li>
                    Built and maintained internal tools for device fleet monitoring and management.
                  </li>
                  <li>Developed and optimized backend APIs supporting core business services.</li>
                  <li>
                    Expanded and optimized geospatial services ahead of launch in a new market.
                  </li>
                  <li>Prototyped hardware and software for next‑gen parcel locker platform.</li>
                  <li>
                    Researched and developed AI-powered analytics tools for operational insights.
                  </li>
                  <li>Advocated AI-assisted development practices company-wide.</li>
                  <li>Self‑proclaimed AI‑ambassador and MVP fanboy.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white z-20" />
            </div>

            {/* NextML (Right) */}
            <div className="relative mt-12 md:grid md:grid-cols-2 md:gap-10">
              <span className="absolute left-1/2 -translate-x-1/2 top-7 -bottom-18 w-2 md:w-3 rounded-full bg-indigo-500 z-10" />
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-white z-20" />
              <div className="md:col-start-2 md:pl-12">
                <div className="text-xs font-semibold text-gray-400">2023 – 2025</div>
                <div className="font-medium">NextML — Full Stack Developer 🧠📈</div>
                <ul className="mt-3 list-inside list-disc text-gray-700">
                  <li>UI for AI-based track damage detection product.</li>
                  <li>Web maps (Leaflet/Mapbox), WebGL, performance optimizations.</li>
                  <li>Extensive refactoring and rapid prototyping.</li>
                </ul>
              </div>
            </div>

            {/* Ombori (Left) */}
            <div className="relative mt-12 md:grid md:grid-cols-2 md:gap-10">
              <span className="absolute left-1/2 -translate-x-1/2 top-7 -bottom-18 w-2 md:w-3 rounded-full bg-amber-500 z-10" />
              <div className="md:col-span-1 md:pr-12 text-right">
                <div className="text-xs font-semibold text-gray-400">2017 – 2023</div>
                <div className="font-medium">Ombori Apps — Head of R&D 🧪🔬</div>
                <ul className="mt-3 inline-block text-left list-inside list-disc text-gray-700">
                  <li>Edge IoT platform and custom Linux-based OS.</li>
                  <li>Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO).</li>
                  <li>Computer vision solutions (face detection/recognition).</li>
                  <li>Interactive apps with 3D/graphics, TTS, speech & image recognition.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-white z-20" />
            </div>

            {/* Nordnet (Right) */}
            <div className="relative mt-12 md:grid md:grid-cols-2 md:gap-10">
              <span className="absolute left-1/2 -translate-x-1/2 top-7 -bottom-18 w-2 md:w-3 rounded-full bg-sky-500 z-10" />
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-sky-500 ring-4 ring-white z-20" />
              <div className="md:col-start-2 md:pl-12">
                <div className="text-xs font-semibold text-gray-400">2018 – 2020</div>
                <div className="font-medium">Nordnet — Mobile & Web Developer 📱🕸️</div>
                <ul className="mt-3 list-inside list-disc text-gray-700">
                  <li>Contributed to stock trading & savings mobile app.</li>
                  <li>Built a new web UI component library and key portal sections.</li>
                </ul>
              </div>
            </div>

            {/* Areal (Left) */}
            <div className="relative mt-12 md:grid md:grid-cols-2 md:gap-10">
              <span className="absolute left-1/2 -translate-x-1/2 top-7 -bottom-0 w-2 md:w-3 rounded-full bg-rose-500 z-10" />
              <div className="md:col-span-1 md:pr-12 text-right">
                <div className="text-xs font-semibold text-gray-400">2005 – 2017</div>
                <div className="font-medium">Areal — Head of Software Development 🧭</div>
                <ul className="mt-3 inline-block text-left list-inside list-disc text-gray-700">
                  <li>Internet access gateway solutions for the ex‑USSR market.</li>
                  <li>Full‑stack development, project leadership, and PM.</li>
                  <li>Networking tech, FreeBSD, Node.js, JavaScript, IP telephony.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-rose-500 ring-4 ring-white z-20" />
            </div>
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
              <li>
                <span role="img" aria-label="UK flag" className="inline-block mr-1">
                  🇬🇧
                </span>
                English — fluent
              </li>
              <li>
                <span role="img" aria-label="Sweden flag" className="inline-block mr-1">
                  🇸🇪
                </span>
                Swedish — basic
              </li>
            </ul>
            <h2 className="mt-7 text-xl font-semibold tracking-tight">🎯 Hobbies</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-base text-gray-700">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                DIY{" "}
                <span role="img" aria-label="tools" className="ml-1">
                  🛠️
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                3D Printing{" "}
                <span role="img" aria-label="bricks" className="ml-1">
                  🧱
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                XR{" "}
                <span role="img" aria-label="VR goggles" className="ml-1">
                  🥽
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                Robotics{" "}
                <span role="img" aria-label="robot" className="ml-1">
                  🤖
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                Gamedev{" "}
                <span role="img" aria-label="game controller" className="ml-1">
                  🎮
                </span>
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-medium shadow-sm">
                Music{" "}
                <span role="img" aria-label="musical note" className="ml-1">
                  🎵
                </span>
              </span>
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
