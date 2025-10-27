import { useNavigate } from "react-router-dom";
import { useAudience } from "../context/AudienceContext";

export default function AudienceChoice() {
  const { setAudience } = useAudience();
  const nav = useNavigate();

  const pick = (role) => {
    setAudience(role);               // "user" or "municipality"
    nav(role === "municipality" ? "/m" : "/u");
  };

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-bold">Who are you?</h1>
        <p className="text-gray-600">Pick a view. You can switch anytime.</p>
        <div className="grid gap-3">
          <button onClick={() => pick("user")} className="py-3 rounded-xl bg-black text-white">I’m a resident</button>
          <button onClick={() => pick("municipality")} className="py-3 rounded-xl bg-black text-white">I’m a municipality</button>
        </div>
      </div>
    </main>
  );
}
