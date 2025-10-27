import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext.jsx";

export default function AudienceChoice() {
  const { setAudience } = useAudience();
  const nav = useNavigate();

  return (
    <main style={{ padding: 24 }}>
      <h1>Who are you?</h1>
      <button onClick={() => { setAudience("user"); nav("/u"); }}>Resident</button>
      <button onClick={() => { setAudience("municipality"); nav("/m"); }} style={{ marginLeft: 8 }}>
        Municipality
      </button>
    </main>
  );
}
