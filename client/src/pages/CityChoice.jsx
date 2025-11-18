import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import { Zap } from "lucide-react";

// LIST OF AVAILABLE CITIES
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

// ACTIVE OURGRID PROJECTS
const HAS_OURGRID = new Set(["Eindhoven", "Arnhem"]);

export default function CityChoice() {
  const { audience } = useAudience();
  const nav = useNavigate();

  const [city, setCity] = useState("Eindhoven");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!audience) nav("/");
  }, [audience, nav]);

  if (!audience) return null;

  const base = audience === "municipality" ? "/m" : "/u";
  const hasProject = HAS_OURGRID.has(city);

  const handleContinue = () => {
    localStorage.setItem("ourgrid_city", city);
    nav(base);
  };

  return (
    <div className="w-full bg-[#4F2E39] py-12 md:py-16 text-[#F9F5F2]">

      {/* INLINE CSS: ANIMATION + CUSTOM SCROLLBAR */}
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-in {
          animation: floatIn .35s ease-out forwards;
        }

        .city-scroll {
          scrollbar-width: thin;
          scrollbar-color: #F9F5F2 #4F2E39;
        }
        .city-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .city-scroll::-webkit-scrollbar-track {
          background: #4F2E39;
          border-radius: 999px;
        }
        .city-scroll::-webkit-scrollbar-thumb {
          background: #F9F5F2;
          border-radius: 999px;
          border: 2px solid #4F2E39;
        }
        .city-scroll::-webkit-scrollbar-thumb:hover {
          background: #FFEA00;
        }
      `}</style>

      {/* GRID FOR LEFT ICON – MAIN CONTENT – RIGHT ICON */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start">

        {/* LEFT DECORATIVE ICON — DESKTOP ONLY */}
        <div className="hidden lg:flex justify-center items-start pt-20 opacity-20">
          <Zap className="w-40 h-40 text-[#F9F5F2]" />
        </div>

        {/* MAIN CONTENT */}
        <div className="animate-float-in w-full max-w-2xl mx-auto px-4 text-left lg:text-center">


          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8">
            Select your city
          </h2>

          {/* DROPDOWN */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full">
              <button
  onClick={() => setIsOpen((p) => !p)}
  className="
    w-full bg-[#F9F5F2] text-[#4F2E39]
    text-base md:text-lg lg:text-2xl font-semibold
    px-4 md:px-5
    py-2.5 md:py-3.5 lg:py-5
    rounded-full shadow-lg
    flex items-center justify-between
    transition-all
    hover:shadow-xl
    hover:bg-[#FFF7C2]
  "
>

                <span className="truncate text-left">{city}</span>

                {/* ARROW ROTATION */}
                <span
                  className={`
                    text-2xl md:text-3xl
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : "rotate-0"}
                  `}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div
                  className="
                    absolute z-20 w-full mt-2
                    bg-[#F9F5F2]
                    rounded-2xl shadow-xl
                    border border-[#4F2E39]/20
                    max-h-60 overflow-y-auto
                    p-3 grid gap-3
                    city-scroll
                  "
                >
                  {CITIES.map((c) => {
                    const selected = c === city;
                    return (
                      <button
                        key={c}
                        onClick={() => {
                          setCity(c);
                          setIsOpen(false);
                        }}
                        className={`
                          w-full text-left px-4 py-3
                          text-sm md:text-base lg:text-lg
                          font-medium rounded-xl transition-all
                          ${
                            selected
                              ? "bg-[#01AC51] text-white shadow-md"
                              : "bg-white text-[#4F2E39]"
                          }
                          hover:bg-[#FFEA00] hover:text-[#4F2E39]
                        `}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* STATUS + TEXT */}
          <div className="max-w-xl mx-auto leading-relaxed">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
              {hasProject ? "OurGrid is active here." : "Your city not listed?"}
            </h3>

            <p className="mb-6 text-sm md:text-base lg:text-lg xl:text-xl text-[#F9F5F2]/90">
              Even if your city isn’t part of an
              <span className="text-[#01AC51] font-semibold"> OurGrid </span>
              project yet, you can still
              <span className="text-[#01AC51] font-semibold"> explore </span>
              this website to learn what
              <span className="text-[#01AC51] font-semibold"> grid congestion </span>
              means and how small changes in energy use can make a
              <span className="text-[#01AC51] font-semibold"> big difference</span>.
            </p>

            <p className="mb-10 text-sm md:text-base lg:text-lg xl:text-xl text-[#F9F5F2]/90">
              If you’d like to see the
              <span className="text-[#01AC51] font-semibold"> OurGrid app </span>
              <span className="text-[#01AC51] font-semibold"> available </span>
              where you live,
              <span className="text-[#01AC51] font-semibold"> contact </span>
              your municipality and let them know you’re interested.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={handleContinue}
              className="
                w-full md:w-auto
                px-10 md:px-12 lg:px-14
                py-3.5 md:py-4 lg:py-5
                bg-[#01AC51] text-white
                text-lg md:text-xl lg:text-2xl font-semibold
                rounded-full shadow-lg hover:bg-[#019245]
                transition-all flex items-center justify-center gap-2
              "
            >
              <span>To</span>
              <span className="text-[#F4B14A] font-extrabold">OurGrid</span>
              <span>Website</span>
              <span className="text-2xl md:text-3xl lg:text-4xl leading-none">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT DECORATIVE ICON — DESKTOP ONLY */}
        <div className="hidden lg:flex justify-center items-start pt-20 opacity-20">
          <Zap className="w-40 h-40 text-[#F9F5F2] transform -scale-x-100" />
        </div>
      </div>
    </div>
  );
}
