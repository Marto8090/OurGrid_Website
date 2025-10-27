import { useAudience } from "../context/AudienceContext";
export default function Dashboards() {
  const { audience } = useAudience();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dashboards</h1>
      <p className="mt-2 text-gray-700">Placeholder (Recharts later) · Audience: {audience || "unknown"}</p>
    </main>
  );
}
