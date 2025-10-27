import { useAudience } from "../context/AudienceContext";
export default function Privacy() {
  const { audience } = useAudience();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Privacy policy</h1>
      <p className="mt-2 text-gray-700">Placeholder · Audience: {audience || "unknown"}</p>
    </main>
  );
}
