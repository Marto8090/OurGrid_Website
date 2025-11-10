import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";
import { User, Building2 } from "lucide-react";

export default function AudienceChoice() {
  const { setAudience } = useAudience();
  const nav = useNavigate();

  return (
    <main className="min-h-screen bg-[#4a2431] flex flex-col font-sans">
      {/* Top bar */}
      <header className="bg-[#ffea00] py-4 px-4 md:py-6 md:px-8">
        <h1 className="text-xl md:text-3xl font-bold text-[#4a2431]">
          OurGrid
        </h1>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 space-y-8 md:space-y-12">
        <h2 className="text-white text-lg md:text-3xl font-semibold text-center max-w-md md:max-w-2xl">
          Are you a resident or a member of the municipality?
        </h2>

        <div className="w-full max-w-sm md:max-w-3xl flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-8">
          {/* Resident */}
          <button
            onClick={() => {
              setAudience("user");
              nav("/u");
            }}
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
            onClick={() => {
              setAudience("municipality");
              nav("/m");
            }}
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
