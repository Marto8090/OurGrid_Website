import { createContext, useContext, useEffect, useState } from "react";

// CREATE THE CONTEXT
const AudienceContext = createContext();

export function AudienceProvider({ children }) {
  // STATE THAT HOLDS THE CURRENT AUDIENCE
  // INITIAL VALUE LOADS FROM LOCALSTORAGE SO IT PERSISTS ON REFRESH
  const [audience, setAudience] = useState(() => {
    // Check if a value exists in storage
    const stored = localStorage.getItem("audience");
    return stored ? stored : null;
  });

  // WHENEVER AUDIENCE CHANGES, SYNC IT WITH LOCALSTORAGE
  useEffect(() => {
    if (audience) {
      localStorage.setItem("audience", audience);
    } else {
      // If audience is null (reset), remove it from storage
      localStorage.removeItem("audience");
    }
  }, [audience]);

  return (
    // PROVIDE BOTH THE VALUE AND THE SETTER FUNCTION
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

// CUSTOM HOOK TO ACCESS CONTEXT
export function useAudience() {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
}