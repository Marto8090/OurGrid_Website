import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

const CITIES = [
  "Eindhoven",
  "Amsterdam",
  "Rotterdam",
  "Utrecht",
  "Den Haag",
  "Groningen",
  "Tilburg",
  "Breda",
  "Nijmegen",
  "Arnhem",
];

// Dummy map of where OurGrid is “active” for now.
// Tweak as needed once you have real info.
const HAS_OURGRID = new Set(["Eindhoven", "Arnhem"]);

export default function CityChoice() {
  const { audience } = useAudience();
  const nav = useNavigate();
  const [city, setCity] = useState("Eindhoven");

  // If audience is not set, force user back to start.
  useEffect(() => {
    if (!audience) {
      nav("/");
    }
  }, [audience, nav]);

  if (!audience) return null; // avoid flicker during redirect

  const base = audience === "municipality" ? "/m" : "/u";
  const hasProject = HAS_OURGRID.has(city);

  const handleContinue = () => {
    localStorage.setItem("ourgrid_city", city);
    nav(base);
  };

  return (
    // Kill the padding from Layout's <main> so we can own the full width band
    <div
      className="
        -m-4
        bg-[#4F2E39]
        flex justify-center
        py-12
        md:py-16
      "
    >
      <style>{`
        @keyframes cityEnter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-city-enter {
          animation: cityEnter 0.3s ease-out forwards;
        }
      `}</style>

      <div className="animate-city-enter w-full max-w-3xl text-[#F9F5F2] px-4 text-left md:text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Select your city
        </h2>

        {/* Dropdown */}
        <div className="mb-10 flex justify-start md:justify-center">
          <div className="relative w-full max-w-md">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="
                w-full appearance-none
                bg-[#F9F5F2] text-[#4F2E39]
                text-lg font-medium
                px-4 py-3 pr-10
                rounded-2xl
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-[#01AC51]
                cursor-pointer
              "
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <span
              className="
                pointer-events-none
                absolute inset-y-0 right-4
                flex items-center
                text-[#4F2E39]
                text-2xl
              "
            >
              ▾
            </span>
          </div>
        </div>

        {/* Status + copy */}
        <div className="max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            {hasProject ? "OurGrid is active here." : "Your city not listed?"}
          </h3>

          <p className="mb-4 text-[#F9F5F2]/90">
            Even if your city isn’t part of an OurGrid project yet, you can
            still explore this website to learn what grid congestion means and
            how small changes in energy use can make a difference.
          </p>

          <p className="mb-8 text-[#F9F5F2]/90">
            If you’d like to see the OurGrid app in your area, contact your
            municipality or local energy co-operative and let them know you’re
            interested. Each new city that joins helps build a stronger, smarter
            energy network.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-start md:justify-center">
          <button
            onClick={handleContinue}
            className="
              w-full md:w-auto
              px-10 py-3
              bg-[#01AC51]
              text-white
              text-lg font-semibold
              rounded-full
              shadow-lg
              hover:bg-[#019245]
              transition-all
            "
          >
            To OurGrid Website →
          </button>
        </div>
      </div>
    </div>
  );
}
