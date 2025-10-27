import { useAudience } from "../context/AudienceContext";
export default function HowItWorks() {
  const { audience } = useAudience();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">How OurGrid works</h1>
      <p className="mt-2 text-gray-700">Placeholder · Audience: {audience || "unknown"}</p>
    </main>
  );
}
