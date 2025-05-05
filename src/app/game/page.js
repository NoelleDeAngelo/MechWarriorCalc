"use client";

import styles from "./game.module.css";

import { useRoster } from "@/context/RosterContext";
import { useState } from "react";
import Link from "next/link";

export default function Game() {
  const { roster, setRoster } = useRoster();


  return (
    <div>
      <h1>GAME</h1>
      <section id={styles.unitsSection}>
        {roster.map((unit, index) => (
          <div className={styles.card} key={unit.id}>
            <h2>{unit.name}</h2>
          </div>
        ))}
      </section>

      <button id={styles.adjustButton} className={styles.button}>
        <Link href={"/roster"}>Adjust Roster</Link>
      </button>
    </div>
  );
}
