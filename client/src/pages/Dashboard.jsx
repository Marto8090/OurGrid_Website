//Resident components
import { useAudience } from "../context/AudienceContext";
import DailyLoadChart from "../components/DailyLoadChart";
import PeakIndicator from "../components/PeakIndicator";
import ApplianceContributionChart from "../components/ApplianceContributionChart";
import BeforeAfterPeakChart from "../components/BeforeAfterPeakChart";

//Municipality components
import MunicipalityLoadOverview from "../components/MunicipalityLoadOverview";
import ParticipationTrend from "../components/ParticipationTrend";
import EnergyShiftSummary from "../components/EnergyShiftSummary";
import MunicipalityMap from "../components/MunicipalityMap";

export default function Dashboards() {
  const { audience } = useAudience();

  // Config for the badge styles
  const chipConfig =
    audience === "municipality"
      ? {
          label: "Municipal insights",
          bg: "#E6F0FA",
          border: "#2C6EA4",
          text: "#1e4b70",
        }
      : audience === "user"
      ? {
          label: "Residents view",
          bg: "#FDF7EF",
          border: "#4F2E39",
          text: "#4F2E39",
        }
      : {
          label: "Residents & municipal view",
          bg: "#ffffff",
          border: "#94a3b8",
          text: "#1D252C",
        };

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at top left, #FFF3D9 0, #F9F5F2 40%, #E6F0FA 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">
        
        {/* HERO / HEADER */}
        <header className="space-y-4">
          
          {/* FLEX CONTAINER: Column on mobile, Row on Desktop */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            
            {/* LEFT SIDE: Title & Description */}
            <div className="space-y-3 md:max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D252C] leading-tight">
                See how a neighbourhood grid behaves
              </h1>
              <p className="text-sm sm:text-base text-[#384450] leading-relaxed">
                These dashboards use example data to explain{" "}
                <span className="font-semibold">when</span> congestion happens,
                <span className="font-semibold"> what drives it</span>, and{" "}
                <span className="font-semibold">how shifting usage helps</span>.
                In a real project, this is where live data from OurGrid would
                appear.
              </p>
            </div>

            {/* RIGHT SIDE: Audience Indicator (Responsive) */}
            <div className="flex-shrink-0">
              <span
                className="
                  inline-flex items-center gap-3 
                  px-5 py-3 
                  rounded-xl 
                  text-sm font-bold tracking-wide 
                  cursor-default select-none 
                  border-2 shadow-md 
                  transition-transform hover:scale-[1.02]
                "
                style={{
                  backgroundColor: chipConfig.bg,
                  borderColor: chipConfig.border,
                  color: chipConfig.text,
                }}
              >
                {/* PULSING GREEN DOT */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#01AC51] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#01AC51]"></span>
                </span>
                
                {chipConfig.label}
              </span>
            </div>

          </div>
        </header>

        {/* GRID OF DASHBOARDS */}
        <section className="space-y-6 sm:space-y-8">
          {audience === "municipality" ? (
            <>
              <MunicipalityLoadOverview />
              <ParticipationTrend />
              <EnergyShiftSummary />
              <MunicipalityMap />
            </>
          ) : (
            <>
              <DailyLoadChart />
              <PeakIndicator />
              <ApplianceContributionChart />
              <BeforeAfterPeakChart />
            </>
          )}
        </section>

        {/* FOOTER NOTE */}
        <footer className="pt-6 border-t border-white/60 text-[11px] sm:text-xs text-[#384450]">
          <p>
            All charts on this page use static, illustrative data. In a live
            deployment, these visuals can be powered by real measurements from
            neighbourhood transformers and household devices via the OurGrid
            platform.
          </p>
        </footer>
      </div>
    </main>
  );
}