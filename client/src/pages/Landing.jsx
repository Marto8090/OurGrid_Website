import { Link } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

export default function Landing() {
  const { audience } = useAudience();

  const base = audience === "municipality" ? "/m" : "/u";
  const isMunicipality = audience === "municipality";
  const isUser = audience === "user";

  const title = isMunicipality
    ? "OurGrid for Municipalities"
    : "OurGrid for Residents";

  const subtitle = isMunicipality
    ? "See how OurGrid helps your city reduce grid stress, support energy co-ops, and communicate clearly with residents."
    : "See how OurGrid helps you and your neighbours avoid overloads, save money, and support a stronger local grid.";

  const leftCtaLabel = isMunicipality
    ? "Understand grid congestion in your city"
    : "Understand grid congestion at home";

  const rightCtaLabel = isMunicipality
    ? "How OurGrid supports municipalities"
    : "How OurGrid helps your home";

  const infoText = isMunicipality
    ? "Placeholder: later this can highlight cooperation with co-ops, using insights to avoid grid upgrades, and transparency towards citizens."
    : "Placeholder: later this can tell the story of peak hours, local transformers, challenges, rewards, and why small behaviour shifts matter.";

  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-[#F9F5F2] text-[#4F2E39] px-6 text-center
        animate-landing-enter
      "
    >
      <style>{`
        @keyframes landingEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-landing-enter {
          animation: landingEnter 0.35s ease-out forwards;
        }
      `}</style>

      <h1 className="text-4xl sm:text-6xl font-bold mb-4">{title}</h1>

      <p className="max-w-2xl text-lg mb-8">
        {subtitle}
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        <Link
          to={`${base}/what-is-grid-congestion`}
          className="bg-[#4F2E39] text-[#F4B14A] px-5 py-3 rounded-xl hover:bg-[#3c242e] transition-all"
        >
          {leftCtaLabel}
        </Link>

        <Link
          to={`${base}/how-ourgrid-works`}
          className="bg-[#01AC51] text-white px-5 py-3 rounded-xl hover:bg-[#019245] transition-all"
        >
          {rightCtaLabel}
        </Link>
      </div>

      <div className="max-w-2xl text-sm text-[#4F2E39]/80">
        {infoText}
      </div>
    </div>
  );
}
