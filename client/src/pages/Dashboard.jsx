import { useAudience } from "../context/AudienceContext";
import DailyLoadChart from "../components/DailyLoadChart";
// later you’ll add more:
// import ApplianceContributionChart from "../components/ApplianceContributionChart";
// import BeforeAfterPeakChart from "../components/BeforeAfterPeakChart";
// import PeakIndicator from "../components/PeakIndicator";

export default function Dashboards() {
  const { audience } = useAudience();

  return (
    <main className="p-6 space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-[#1D252C]">Dashboards</h1>
        <p className="mt-2 text-[#1D252C]">
          Understanding grid congestion · Audience: {audience || "unknown"}
        </p>
        <p className="mt-1 text-sm text-[#384450] max-w-2xl">
          These static examples show how a typical neighbourhood grid behaves:
          when the peak happens and how shifting usage can reduce congestion.
        </p>
      </header>

      <DailyLoadChart />

      {/* Later you just stack the others here:
      <PeakIndicator />
      <ApplianceContributionChart />
      <BeforeAfterPeakChart />
      */}
    </main>
  );
}
