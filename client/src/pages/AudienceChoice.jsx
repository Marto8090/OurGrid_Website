import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import { User, Building2 } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function AudienceChoice() {
  const { setAudience } = useAudience();
  const nav = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const handleSelect = (targetAudience, path) => {
    setAudience(targetAudience);
    setLeaving(true);
    // Short delay so the exit animation is visible before route change
    setTimeout(() => {
      nav(path);
    }, 260);
  };

  return (
    <main
      className={`
        min-h-screen bg-[#4a2431] flex flex-col font-sans
        transition-transform transition-opacity
        ${leaving ? "animate-page-exit" : "animate-page-enter"}
      `}
    >
      <style>{`
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pageExit {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-page-enter {
          animation: pageEnter 0.25s ease-out forwards;
        }

        .animate-page-exit {
          animation: pageExit 0.25s ease-in forwards;
        }
      `}</style>

      {/* Top bar */}
      <header className="bg-[#F4B14A] py-4 px-4 md:py-6 md:px-8 shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="OurGrid logo"
            className="h-9 w-9 lg:h-12 lg:w-12 object-contain rounded-xl"
          />
          <h1 className="font-extrabold text-[#F9F5F2] text-[22px] lg:text-[24px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            OurGrid
          </h1>
        </div>
      </header>

      {/* Choice cards */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 space-y-8 md:space-y-12">
        <h2 className="text-white text-lg md:text-3xl font-semibold text-center max-w-md md:max-w-2xl">
          Are you a resident or a member of the municipality?
        </h2>

        <div className="w-full max-w-sm md:max-w-3xl flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-8">
          {/* Resident */}
          <button
            onClick={() => handleSelect("user", "/u")}
            className="order-1 group w-full md:flex-1 bg-[#f9a825] hover:bg-[#fcd34d] text-[#4a2431]
                       rounded-2xl p-5 md:p-10 flex flex-col items-center justify-center shadow-lg
                       transition-all"
          >
            <span className="text-sm md:text-base">I am a</span>
            <span className="text-2xl md:text-4xl font-bold">Resident</span>
            <User
              className="w-9 h-9 md:w-16 md:h-16 mt-3 text-[#4a2431] transition-transform duration-500
                         group-hover:scale-110 group-hover:rotate-3"
              strokeWidth={2}
            />
          </button>

          {/* OR */}
          <div className="order-2 flex items-center justify-center">
            <span className="inline-flex items-center justify-center rounded-full border border-white/40
                             text-white/90 text-sm md:text-base h-8 w-8 md:h-9 md:w-9">
              OR
            </span>
          </div>

          {/* Municipality */}
          <button
            onClick={() => handleSelect("municipality", "/m")}
            className="order-3 group w-full md:flex-1 bg-[#39b54a] hover:bg-[#51c261] text-[#4a2431]
                       rounded-2xl p-5 md:p-10 flex flex-col items-center justify-center shadow-lg
                       transition-all"
          >
            <span className="text-sm md:text-base">I am a member of a</span>
            <span className="text-2xl md:text-4xl font-bold">Municipality</span>
            <Building2
              className="w-9 h-9 md:w-16 md:h-16 mt-3 text-[#4a2431] transition-transform duration-500
                         group-hover:scale-110 group-hover:-rotate-3"
              strokeWidth={2}
            />
          </button>
        </div>
      </section>
    </main>
  );
}
