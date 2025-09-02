import { useState } from "react";
import { FaReact } from "react-icons/fa";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 text-gray-900">
      <div className="flex items-center gap-3">
        <img src={viteLogo} className="h-10 w-10" alt="Vite logo" />
        <FaReact className="h-10 w-10 text-sky-500" />
      </div>
      <h1 className="text-3xl font-bold">Vite + React + Tailwind</h1>
      <div className="flex flex-col items-center gap-3">
        <button
          className="rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </button>
        <p className="text-sm text-gray-600">
          Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
