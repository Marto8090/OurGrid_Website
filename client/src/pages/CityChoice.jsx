import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import { Zap } from "lucide-react";

// LIST OF AVAILABLE CITIES
const CITIES = [
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven",
  "Groningen", "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn",
  "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Haarlemmermeer",
  "Enschede", "Zoetermeer", "Zwolle", "Maastricht", "Leiden",
  "Dordrecht", "Ede", "Emmen", "Westland", "Venlo", "Deventer",
  "Sittard-Geleen", "Helmond", "Oss", "Amstelveen", "Alkmaar",
  "Hilversum", "Lelystad", "Purmerend", "Schiedam", "Spijkenisse",
  "Vlaardingen", "Gouda", "Hoorn",
];

// ACTIVE OURGRID PROJECTS
const HAS_OURGRID = new Set([
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven",
  "Groningen", "Tilburg", "Arnhem", "Zwolle", "Maastricht",
]);

export default function CityChoice() {
  const { audience } = useAudience();
  const nav = useNavigate();

  const [city, setCity] = useState("");          // start with no city selected
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!audience) nav("/");
  }, [audience, nav]);

  if (!audience) return null;

  const base = audience === "municipality" ? "/m" : "/u";

  const hasCity = city.trim().length > 0;
  const hasProject = hasCity && HAS_OURGRID.has(city);
  const canContinue = hasCity;

  const filteredCities = CITIES.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  const handleContinue = () => {
    if (!canContinue) return;
    localStorage.setItem("ourgrid_city", city);
    nav(base);
  };

  return (
    <div className="w-full min-h- bg-[#4F2E39] text-[#F9F5F2] flex py-10 md:py-10">
      <style>{`
        footer { display: none !important; }

        /* Hide header links + audience switcher on this page only */
        header .lg\\:flex.items-center.gap-8 { display: none !important; }
        header button[aria-label*="navigation menu"] { display: none !important; }

        /* Disable clicking the logo on this page only */
        header a:first-of-type { pointer-events: none !important; cursor: default !important; }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-in { animation: floatIn .35s ease-out forwards; }

        .city-scroll { scrollbar-width: thin; scrollbar-color: #F9F5F2 #4F2E39; }
        .city-scroll::-webkit-scrollbar { width: 8px; }
        .city-scroll::-webkit-scrollbar-track { background: #4F2E39; border-radius: 999px; }
        .city-scroll::-webkit-scrollbar-thumb {
          background: #F9F5F2; border-radius: 999px; border: 2px solid #4F2E39;
        }
        .city-scroll::-webkit-scrollbar-thumb:hover { background: #FFEA00; }
      `}</style>

      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch">
        {/* LEFT ICON */}
        <div className="hidden lg:flex justify-center items-start pt-20 opacity-20">
          <Zap className="w-40 h-40 text-[#F9F5F2]" />
        </div>

        {/* MAIN CONTENT */}
        <div className="animate-float-in w-full max-w-2xl mx-auto px-4 text-center flex flex-col flex-1 min-h-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8">
            Select your city
          </h2>

          {/* SEARCH INPUT */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                  setCity(""); // typing deselects previous city
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Search for your city"
                className="
                  w-full bg-[#F9F5F2] text-[#4F2E39]
                  text-base md:text-lg lg:text-2xl font-semibold
                  px-6 pr-14 py-3.5 md:py-4 lg:py-5
                  rounded-full shadow-lg outline-none
                  focus:ring-4 focus:ring-[#01AC51]/40
                "
              />
              {/* CLEAR (X) BUTTON */}
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setCity("");
                    setQuery("");
                    setShowResults(false);
                  }}
                  className="
                    absolute right-8 top-8.5 -translate-y-1/2
                    text-[#4F2E39]/50 hover:text-red-500
                    text-2xl font-bold transition-colors
                  "
                  aria-label="Clear city selection"
                >
                  x
                </button>
              )}

              {/* RESULTS OVERLAY */}
              {showResults && query && (
                <div
                  className="
                    absolute left-0 right-0 top-full mt-3 z-20
                    bg-[#F9F5F2] rounded-2xl shadow-xl
                    border border-[#4F2E39]/20
                    max-h-60 overflow-y-auto
                    p-3 grid gap-3 city-scroll
                  "
                >
                  {filteredCities.length > 0 ? (
                    filteredCities.map((c) => {
                      const selected = c === city;
                      return (
                        <button
                          key={c}
                          onClick={() => {
                            setCity(c);
                            setQuery(c);
                            setShowResults(false);
                          }}
                          className={`
                            w-full text-left px-4 py-3
                            text-sm md:text-base lg:text-lg
                            font-medium rounded-xl transition-all
                            ${selected ? "bg-[#01AC51] text-white shadow-md" : "bg-white text-[#4F2E39]"}
                            hover:bg-[#FFEA00] hover:text-[#4F2E39]
                          `}
                        >
                          {c}
                          {HAS_OURGRID.has(c) && (
                            <span className="ml-2 text-xs text-[#01AC51] font-bold">
                              Active
                            </span>
                          )}
                        </button>
                      );
                    })
                  ) : (
                    <p className="text-[#4F2E39]/70 text-sm md:text-base px-4 py-3">
                      No cities found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

            {/* STATUS TEXT */}
          <div className="max-w-xl mx-auto leading-relaxed">
            <h3 className="text-2xl md:text-2xl md:pb-4 lg:text-3xl xl:text-4xl font-bold mb-6">
              {!hasCity ? (
              <span className="font-extrabold"> City is not selected. </span>
              ) : (
                <>
                  OurGrid is{" "}
                  {!hasProject && (
                    <span className="text-red-500 font-extrabold">not </span>
                  )}
                  <span className={ hasProject ? "text-[#01AC51] font-extrabold" : "" }>
                    active
                  </span>{" "}
                  here.
                </>
              )}
            </h3>

            <p className="mb-6 text-md md:text-base lg:text-lg xl:text-xl text-[#F9F5F2]/90">
              Even if your city isn't part of an
              <span className="text-[#01AC51] font-semibold"> OurGrid </span>
              project yet, you can still
              <span className="text-[#01AC51] font-semibold"> explore </span>
              this website to learn what
              <span className="text-[#01AC51] font-semibold"> grid congestion </span>
              means and how small changes in energy use can make a
              <span className="text-[#01AC51] font-semibold"> big difference</span>.
            </p>

            <p className="mb-6 text-md md:text-base lg:text-lg xl:text-xl text-[#F9F5F2]/90">
              If you'd like to see the
              <span className="text-[#01AC51] font-semibold"> OurGrid app </span>
              <span className="text-[#01AC51] font-semibold"> available </span>
              where you live,
              <span className="text-[#01AC51] font-semibold"> contact </span>
              your municipality and let them know you're interested.
            </p>
          </div>


          {/* CTA pinned low */}
          <div className="flex justify-center mt-auto pt-6">
            <button
              type="button"
              onClick={canContinue ? handleContinue : undefined}
              disabled={!canContinue}
              className={`
                w-full md:w-auto
                px-10 md:px-12 lg:px-14
                py-3.5 md:py-4 lg:py-5
                text-lg md:text-xl lg:text-2xl font-semibold
                rounded-full shadow-lg transition-all
                flex items-center justify-center gap-2
                ${canContinue
                  ? "bg-[#01AC51] text-white hover:bg-[#019245] cursor-pointer"
                  : "bg-[#01AC51]/50 text-white/80 cursor-not-allowed opacity-70"}
              `}
            >
              <span>To</span>
              <span className="text-[#F4B14A] font-extrabold">OurGrid</span>
              <span>Website</span>
              <span className="text-2xl md:text-3xl lg:text-4xl leading-none">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT ICON */}
        <div className="hidden lg:flex justify-center items-start pt-20 opacity-20">
          <Zap className="w-40 h-40 text-[#F9F5F2] transform -scale-x-100" />
        </div>
      </div>
    </div>
  );
}
