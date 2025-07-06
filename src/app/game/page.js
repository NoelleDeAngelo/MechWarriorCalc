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
      <button className={`${styles.button} ${styles.adjustButton}`}>
        <Link href={"/roster"}>Adjust Roster</Link>
      </button>
      <section className={styles.unitsSection}>
        {roster.map((unit, index) => (
          <div
            className={styles.card}
            key={unit.id + index}
            onClick={!unit.expanded ? expandUnit(index) : null}
          >
            {unit.expanded ? (
              <UnitCard unit={unit} expandUnit={expandUnit} index={index} />
            ) : (
              <h2>{unit.name}</h2>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
