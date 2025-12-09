import { useAudience } from "../context/AudienceContext";
import DailyLoadChart from "../components/DailyLoadChart";
import PeakIndicator from "../components/PeakIndicator";
import ApplianceContributionChart from "../components/ApplianceContributionChart";
import BeforeAfterPeakChart from "../components/BeforeAfterPeakChart";

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
          when the peak happens, what drives it, and what changes when people
          start shifting their usage.
        </p>
      </header>

      <DailyLoadChart />
      <PeakIndicator />
      <ApplianceContributionChart />
      <BeforeAfterPeakChart />
    </main>
  );
}
