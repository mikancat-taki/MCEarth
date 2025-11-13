import React, { useState } from "react";
import Map2D from "./components/Map2D";
import Map3D from "./components/Map3D";
import EarthMode from "./components/EarthMode";
import CountryPanel from "./components/CountryPanel";

export default function App() {
  const [mode, setMode] = useState("2D");

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="flex justify-between items-center p-3 bg-white shadow">
        <h1 className="text-lg font-semibold text-gray-800">🌍 MCEarth</h1>
        <div className="flex gap-2">
          {["2D", "3D", "Earth"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 rounded ${
                mode === m ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 relative">
        {mode === "2D" && <Map2D />}
        {mode === "3D" && <Map3D />}
        {mode === "Earth" && <EarthMode />}
        <CountryPanel />
      </main>
    </div>
  );
}

export default function App() {
  return <h1>Hello MCEarth</h1>;
}
