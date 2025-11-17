import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

// LIST OF AVAILABLE CITIES IN DROPDOWN
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

// CITIES THAT CURRENTLY HAVE ACTIVE OURGRID PROJECTS
const HAS_OURGRID = new Set(["Eindhoven", "Arnhem"]);

export default function CityChoice() {
  // CURRENT AUDIENCE (USER OR MUNICIPALITY)
  const { audience } = useAudience();

  // NAVIGATION HOOK
  const nav = useNavigate();

  // CURRENTLY SELECTED CITY
  const [city, setCity] = useState("Eindhoven");

  // DROPDOWN OPEN/CLOSE STATE
  const [isOpen, setIsOpen] = useState(false);

  // IF USER HAS NO AUDIENCE SELECTED, REDIRECT THEM BACK TO HOME
  useEffect(() => {
    if (!audience) nav("/");
  }, [audience, nav]);

  // PREVENT RENDERING IF USER SOMEHOW HAS NO AUDIENCE SET
  if (!audience) return null;

  // DETERMINE BASE ROUTE BASED ON AUDIENCE
  const base = audience === "municipality" ? "/m" : "/u";

  // CHECK IF SELECTED CITY HAS AN ACTIVE OURGRID PROJECT
  const hasProject = HAS_OURGRID.has(city);

  // SAVE CITY TO LOCALSTORAGE AND NAVIGATE TO AUDIENCE LANDING PAGE
  const handleContinue = () => {
    localStorage.setItem("ourgrid_city", city);
    nav(base);
  };

  return (
    <div className="-m-4 bg-[#4F2E39] flex justify-center py-12 md:py-16">

      {/* INLINE CSS: FLOAT-IN ANIMATION + CUSTOM SCROLLBAR */}
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-in {
          animation: floatIn .35s ease-out forwards;
        }

        /* CUSTOM SCROLLBAR FOR DROPDOWN LIST */
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

      {/* MAIN CONTAINER */}
      <div className="animate-float-in w-full max-w-3xl text-[#F9F5F2] px-4 text-left md:text-center">
        
        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Select your city
        </h2>

        {/* CITY DROPDOWN */}
        <div className="mb-10 flex justify-start md:justify-center">
          <div className="relative w-full max-w-md">

            {/* DROPDOWN BUTTON */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="
                w-full bg-[#F9F5F2] text-[#4F2E39]
                text-lg font-bold
                px-5 py-4
                rounded-2xl
                shadow-lg
                flex items-center justify-between
                transition-all
                hover:shadow-xl
                hover:bg-[#FFF7C2]
              "
            >
              {city}

              {/* ARROW ICON ROTATION */}
              <span
                className={`
                  text-2xl transition-transform
                  ${isOpen ? "rotate-180" : "rotate-0"}
                `}
              >
                ▼
              </span>
            </button>

            {/* DROPDOWN LIST */}
            {isOpen && (
              <div
                className="
                  absolute z-20 w-full mt-2
                  bg-[#F9F5F2]
                  rounded-2xl shadow-xl
                  border border-[#4F2E39]/15
                  max-h-60 overflow-y-auto
                  p-3 
                  grid gap-3
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
                        text-sm md:text-base
                        font-medium
                        rounded-xl
                        transition-all
                        ${
                          selected
                            ? "bg-[#01AC51] text-white shadow-md"
                            : "bg-white text-[#4F2E39]"
                        }
                        hover:bg-[#FFEA00] hover:text-[#4F2E39] hover:shadow-md
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

        {/* CITY STATUS MESSAGE */}
        <div className="max-w-xl mx-auto text-sm md:text-base leading-relaxed">

          {/* DYNAMIC TITLE: SHOWS WHETHER THE CITY HAS OURGRID */}
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            {hasProject ? "OurGrid is active here." : "Your city not listed?"}
          </h3>

          {/* INFO PARAGRAPHS */}
          <p className="mb-4 text-[#F9F5F2]/90">
            Even if your city isn’t part of an OurGrid project yet, you can
            still explore this website to learn what grid congestion means and
            how small changes in energy use can make a difference.
          </p>

          <p className="mb-8 text-[#F9F5F2]/90">
            If you’d like to see the OurGrid app in your area, contact your
            municipality or local energy co-operative and let them know you’re
            interested.
          </p>
        </div>

        {/* CONTINUE BUTTON */}
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
