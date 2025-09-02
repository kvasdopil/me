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

        {/* Employment history as vertical timeline */}
        <section className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-semibold">🖖 My journey</h2>
          <div className="relative mt-6">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-2 rounded-full bg-gray-200 md:w-3" />

            {/* Instabee (Left) */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="md:col-span-1 md:pr-10 text-right">
                <div className="text-xs font-semibold text-gray-400">2025 – current</div>
                <div className="font-medium">Instabee — Full Stack Developer 📦🐝</div>
                <ul className="mt-2 inline-block text-left list-inside list-disc text-gray-700">
                  <li>Internal tools for device fleet monitoring and management.</li>
                  <li>Backend APIs supporting core business services.</li>
                  <li>Geospatial services ahead of new market launch.</li>
                  <li>Prototyped next‑gen parcel locker hardware & software.</li>
                  <li>R&D on AI analytics and AI-assisted dev practices.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white shadow" />
            </div>

            {/* NextML (Right) */}
            <div className="relative mt-10 md:grid md:grid-cols-2 md:gap-8">
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-white shadow" />
              <div className="md:col-start-2 md:pl-10">
                <div className="text-xs font-semibold text-gray-400">2023 – 2025</div>
                <div className="font-medium">NextML — Full Stack Developer 🧠📈</div>
                <ul className="mt-2 list-inside list-disc text-gray-700">
                  <li>UI for AI-based track damage detection product.</li>
                  <li>Web maps (Leaflet/Mapbox), WebGL, performance optimizations.</li>
                  <li>Extensive refactoring and rapid prototyping.</li>
                </ul>
              </div>
            </div>

            {/* Ombori (Left) */}
            <div className="relative mt-10 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:col-span-1 md:pr-10 text-right">
                <div className="text-xs font-semibold text-gray-400">2017 – 2023</div>
                <div className="font-medium">Ombori Apps — Head of R&D 🧪🔬</div>
                <ul className="mt-2 inline-block text-left list-inside list-disc text-gray-700">
                  <li>Edge IoT platform and custom Linux-based OS.</li>
                  <li>Hardware integrations (3D cameras, printers, RFID/NFC, Bluetooth, GPIO).</li>
                  <li>Computer vision solutions (face detection/recognition).</li>
                  <li>Interactive apps with 3D/graphics, TTS, speech & image recognition.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-white shadow" />
            </div>

            {/* Nordnet (Right) */}
            <div className="relative mt-10 md:grid md:grid-cols-2 md:gap-8">
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-sky-500 ring-4 ring-white shadow" />
              <div className="md:col-start-2 md:pl-10">
                <div className="text-xs font-semibold text-gray-400">2018 – 2020</div>
                <div className="font-medium">Nordnet — Mobile & Web Developer 📱🕸️</div>
                <ul className="mt-2 list-inside list-disc text-gray-700">
                  <li>Contributed to stock trading & savings mobile app.</li>
                  <li>Built a new web UI component library and key portal sections.</li>
                </ul>
              </div>
            </div>

            {/* Areal (Left) */}
            <div className="relative mt-10 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:col-span-1 md:pr-10 text-right">
                <div className="text-xs font-semibold text-gray-400">2005 – 2017</div>
                <div className="font-medium">Areal — Head of Software Development 🧭</div>
                <ul className="mt-2 inline-block text-left list-inside list-disc text-gray-700">
                  <li>Internet access gateway solutions for the ex‑USSR market.</li>
                  <li>Full‑stack development, project leadership, and PM.</li>
                  <li>Networking tech, FreeBSD, Node.js, JavaScript, IP telephony.</li>
                </ul>
              </div>
              <span className="absolute left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-rose-500 ring-4 ring-white shadow" />
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
