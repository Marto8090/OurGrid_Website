import { useAudience } from "../context/AudienceContext.jsx";
export default function WhatIsCongestion() {
  const { audience } = useAudience();
  return <h1 style={{ padding: 24 }}>What is grid congestion · {audience || "unknown"}</h1>;
}
