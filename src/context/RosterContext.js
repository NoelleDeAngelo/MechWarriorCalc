"use client"

import { createContext, useContext, useEffect, useState } from "react";

const RosterContext = createContext();

export function RosterProvider({ children }) {
  const [roster, setRoster] = useState([]);

  // Load roster from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("roster");
    if (saved) setRoster(JSON.parse(saved));
  }, []);

  // Save roster to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("roster", JSON.stringify(roster));
  }, [roster]);

  return (
    <RosterContext.Provider value={{ roster, setRoster }}>
      {children}
    </RosterContext.Provider>
  );
}

export function useRoster() {
  return useContext(RosterContext);
}
