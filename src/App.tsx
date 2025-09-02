import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function App() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto max-w-3xl p-6">
        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={base + "photo.jpeg"}
              alt="Alexey Guskov"
              className="h-28 w-28 rounded-full object-cover ring-2 ring-gray-200"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-semibold">Alexey Guskov 🚀</h1>
              <p className="mt-1 text-gray-700">
                IoT / Embedded Linux / Mobile / Full Stack Developer 🤖🛰️📱💻
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                <span className="inline-flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-500" /> Stockholm, Sweden 🇸🇪
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
                  <FaPhone className="text-gray-500" /> (+46) 7-2224-1995 📞
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/kvasdopil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
                >
                  <FaGithub /> GitHub 🐙
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
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold">🛠️ Skills</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <span className="font-medium">🎨 Frontend & Mobile:</span> React, React Native, Expo,
              Next.js, Redux, Jest, Storybook, Websockets
            </div>
            <div>
              <span className="font-medium">🧰 Backend:</span> Node.js, Go, Express.js, MongoDB,
              Redis, MySQL, PostgreSQL, OAuth
            </div>
            <div>
              <span className="font-medium">🔌 IoT & Embedded:</span> Embedded Linux, Yocto, Azure
              IoT Edge, ARM, RPI, U-boot, Chromium, Electron, GPIO, MQTT, Bluetooth
            </div>
            <div>
              <span className="font-medium">🧪 AI & Data:</span> Python, OpenCV, Numpy, Tensorflow,
              Jupyter
            </div>
            <div>
              <span className="font-medium">☁️ DevOps & Cloud:</span> Docker, Kubernetes, Terraform,
              Azure, AWS, GCP, GitHub Actions
            </div>
          </div>
        </section>

        {/* Employment history with all entries */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold">💼 Employment History</h2>
          <div className="mt-4 space-y-6 text-sm leading-6">
            <div>
              <div className="font-medium">Instabee — Full Stack Developer 📦🐝</div>
              <div className="text-gray-600">2025 – current, Stockholm</div>
              <ul className="mt-2 list-inside list-disc text-gray-700">
                <li>🛠️ Internal tools for device fleet monitoring and management.</li>
                <li>🧱 Backend APIs supporting core business services.</li>
                <li>🗺️ Geospatial services ahead of new market launch.</li>
                <li>🔒 Prototyped next‑gen parcel locker hardware & software.</li>
                <li>🧠 R&D on AI-powered analytics and AI-assisted dev practices.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">NextML — Full Stack Developer 🧠📈</div>
              <div className="text-gray-600">2023 – 2025, Stockholm</div>
              <ul className="mt-2 list-inside list-disc text-gray-700">
                <li>🧠 UI for AI-based track damage detection product.</li>
                <li>⚡ Web maps (Leaflet/Mapbox), WebGL, and performance work.</li>
                <li>🧪 Extensive refactoring and rapid prototyping.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Ombori Apps — Head of R&D 🧪🔬</div>
              <div className="text-gray-600">2017 – 2023, Stockholm</div>
              <ul className="mt-2 list-inside list-disc text-gray-700">
                <li>🔌 Edge IoT platform and custom Linux-based OS.</li>
                <li>🧩 Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO).</li>
                <li>🧠 Computer vision solutions (face detection/recognition).</li>
                <li>🎛️ Interactive apps with 3D/graphics, TTS, speech & image recognition.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Nordnet — Mobile & Web Developer 📱🕸️</div>
              <div className="text-gray-600">2018 – 2020, Stockholm</div>
              <ul className="mt-2 list-inside list-disc text-gray-700">
                <li>📱 Contributed to stock trading & savings mobile app.</li>
                <li>🧱 Built a new web UI component library and key portal sections.</li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Areal — Head of Software Development 🧭</div>
              <div className="text-gray-600">2005 – 2017, Yaroslavl</div>
              <ul className="mt-2 list-inside list-disc text-gray-700">
                <li>🛰️ Internet access gateway solutions for the ex‑USSR market.</li>
                <li>🧭 Full‑stack development, project leadership, and PM.</li>
                <li>🌐 Networking tech, FreeBSD, Node.js, JavaScript, IP telephony.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-lg font-semibold">🎓 Education</h2>
            <p className="mt-3 text-sm text-gray-700">
              Yaroslavl State University — Master of Computer Science (2003–2008)
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-lg font-semibold">🗣️ Languages & 🎯 Hobbies</h2>
            <p className="mt-3 text-sm text-gray-700">
              English — fluent 🇬🇧; Swedish — basic 🇸🇪. Hobbies: DIY 🛠️, 3D Printing 🧱, XR 🥽,
              robotics 🤖, gamedev 🎮, music 🎵.
            </p>
          </div>
        </section>

        <footer className="mt-8 pb-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Alexey Guskov ✨
        </footer>
      </main>
    </div>
  );
}

export default App;
