import { createContext, useContext, useEffect, useState } from "react";

// CREATE A CONTEXT TO STORE THE SELECTED AUDIENCE (USER OR MUNICIPALITY)
const AudienceContext = createContext();

export function AudienceProvider({ children }) {
  // STATE THAT HOLDS THE CURRENT AUDIENCE
  // INITIAL VALUE LOADS FROM LOCALSTORAGE SO IT PERSISTS ON REFRESH
  const [audience, setAudience] = useState(
    () => localStorage.getItem("audience") || null // "user" OR "municipALITY"
  );

  // WHENEVER AUDIENCE CHANGES, SAVE IT TO LOCALSTORAGE
  useEffect(() => {
    if (audience) localStorage.setItem("audience", audience);
  }, [audience]);

  return (
    // PROVIDE BOTH THE VALUE AND THE FUNCTION TO UPDATE IT TO ALL CHILD COMPONENTS
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

// CUSTOM HOOK TO ACCESS AUDIENCE CONTEXT ANYWHERE IN THE APP
export function useAudience() {
  return useContext(AudienceContext);
}
