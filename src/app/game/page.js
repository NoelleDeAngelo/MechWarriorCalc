"use client";

import styles from "./game.module.css";

import { useRoster } from "@/context/RosterContext";
import { useState } from "react";
import Link from "next/link";
import UnitCard from "@/app/components/UnitCard";

export default function Game() {
  const { roster, setRoster } = useRoster();

  const expandUnit = (index) => () => {
    var unit = roster[index];
    if (unit.expanded) {
      unit.expanded = false;
    } else {
      unit.expanded = true;
    }
    setRoster([...roster]); // Trigger a re-render by updating the roster state

  };


  return (
    <div>
      <h1>GAME</h1>
      <section id={styles.unitsSection}>
        {roster.map((unit, index) => (
          <div onClick={expandUnit(index)} className={styles.card} key={unit.id + index}>
            {unit.expanded ? (<UnitCard unit={unit } />) :(<h2 >{unit.name}</h2>)}

          </div>
        ))}
      </section>

      <button id={styles.adjustButton} className={styles.button}>
        <Link href={"/roster"}>Adjust Roster</Link>
      </button>
    </div>
  );
}
