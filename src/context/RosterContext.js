"use client"

import { createContext, useContext, useState } from "react";

const RosterContext = createContext();

export function RosterProvider({ children }) {
  const [roster, setRoster] = useState([]);

  return (
    <RosterContext.Provider value={{ roster, setRoster }}>
      {children}
    </RosterContext.Provider>
  );
}

export function useRoster() {
  return useContext(RosterContext);
}
