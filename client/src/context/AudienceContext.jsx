import { createContext, useContext, useEffect, useState } from "react";

const AudienceContext = createContext();

export function AudienceProvider({ children }) {
  const [audience, setAudience] = useState(
    () => localStorage.getItem("audience") || null
  );
  useEffect(() => { if (audience) localStorage.setItem("audience", audience); }, [audience]);
  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() { return useContext(AudienceContext); }
