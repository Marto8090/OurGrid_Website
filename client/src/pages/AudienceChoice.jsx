import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

export default function AudienceChoice() {
  const { setAudience } = useAudience();
  const nav = useNavigate();

  const handleResident = () => {
    setAudience("user");
    nav("/u");
  };

  const handleMunicipality = () => {
    setAudience("municipality");
    nav("/m");
  };

  return (
    <main className="min-h-screen bg-[#4a2431] flex flex-col font-sans">
      {/* Top bar */}
      <header className="bg-[#ffea00] py-4 px-4 md:py-6 md:px-8">
        <h1 className="text-xl md:text-3xl font-bold text-[#4a2431]">OurGrid</h1>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 px-4 py-8 space-y-8 md:space-y-12">
        <h2 className="text-white text-lg md:text-3xl font-semibold text-center max-w-md md:max-w-2xl">
          Are you a resident or a member of the municipality?
        </h2>

        <div className="flex flex-col md:flex-row w-full max-w-md md:max-w-3xl gap-4 md:gap-8">
          {/* Resident button */}
          <button
            className="flex-1 bg-[#f9a825] hover:bg-[#fcd34d] text-[#4a2431] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center shadow-lg transition-all md:text-lg"
            onClick={handleResident}
          >
            <span className="text-sm md:text-base">I am a</span>
            <span className="text-2xl md:text-4xl font-bold">Resident</span>
            <span className="text-4xl md:text-6xl mt-2" role="img" aria-label="resident">
              👤
            </span>
          </button>

          {/* Municipality button */}
          <button
            className="flex-1 bg-[#39b54a] hover:bg-[#51c261] text-[#4a2431] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center shadow-lg transition-all md:text-lg"
            onClick={handleMunicipality}
          >
            <span className="text-sm md:text-base">I am a member of a</span>
            <span className="text-2xl md:text-4xl font-bold">Municipality</span>
            <span className="text-4xl md:text-6xl mt-2" role="img" aria-label="municipality">
              🏛️
            </span>
          </button>
        </div>

        <div className="text-white font-bold md:hidden">OR</div>
      </section>
    </main>
  );
}
