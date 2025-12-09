import { useAudience } from "../context/AudienceContext";
import DailyLoadChart from "../components/DailyLoadChart";
import PeakIndicator from "../components/PeakIndicator";
import ApplianceContributionChart from "../components/ApplianceContributionChart";
import BeforeAfterPeakChart from "../components/BeforeAfterPeakChart";

export default function Dashboards() {
  const { audience } = useAudience();

  const chipConfig =
    audience === "municipality"
      ? {
          label: "Municipal insights",
          bg: "rgba(230, 240, 250, 0.9)",
          border: "rgba(44, 110, 164, 0.35)",
          text: "#2C6EA4",
        }
      : audience === "user"
      ? {
          label: "Residents view",
          bg: "rgba(253, 247, 239, 0.9)",
          border: "rgba(79, 46, 57, 0.25)",
          text: "#4F2E39",
        }
      : {
          label: "Residents & municipal view",
          bg: "rgba(255, 255, 255, 0.85)",
          border: "rgba(148, 163, 184, 0.4)",
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
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* HERO / HEADER */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#F4B14A55] backdrop-blur shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#01AC51]" />
            <span className="text-xs font-medium tracking-wide text-[#4F2E39]">
              Static demo dashboards · Audience: {audience || "unknown"}
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1D252C]">
                See how a neighbourhood grid behaves
              </h1>
              <p className="text-sm md:text-base text-[#384450] max-w-2xl">
                These dashboards use example data to explain{" "}
                <span className="font-semibold">when</span> congestion happens,
                <span className="font-semibold"> what drives it</span>, and{" "}
                <span className="font-semibold">how shifting usage helps</span>.
                In a real project, this is where live data from OurGrid would
                appear.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
              <span
                className="px-3 py-1 rounded-full font-medium cursor-default select-none border backdrop-blur"
                style={{
                  backgroundColor: chipConfig.bg,
                  borderColor: chipConfig.border,
                  color: chipConfig.text,
                }}
              >
                {chipConfig.label}
              </span>
            </div>
          </div>
        </header>

        {/* GRID OF DASHBOARDS */}
        <section className="space-y-8">
          <DailyLoadChart />
          <PeakIndicator />
          <ApplianceContributionChart />
          <BeforeAfterPeakChart />
        </section>

        {/* FOOTER NOTE */}
        <footer className="pt-4 border-t border-white/60 text-xs text-[#384450]">
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
