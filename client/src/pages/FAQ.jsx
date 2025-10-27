import { useAudience } from "../context/AudienceContext.jsx";
export default function FAQ() {
  const { audience } = useAudience();
  return <h1 style={{ padding: 24 }}>FAQ · audience: {audience || "unknown"}</h1>;
}
