"use client";
import { useRoster } from "@/context/RosterContext";
import { useState } from "react";
import styles from "./unitCard.module.css";



export default function UnitCard({ unit, expandUnit, index }) {
  const { roster, setRoster } = useRoster();
  const [damage, setDamage] = useState(unit.damage || 0);
  const [alive, setAlive] = useState(unit.alive);


  const takeDamage = () => {
    if (damage < unit.table1.attack.length-1) {
      setDamage((prev) => prev + 1);
      roster[index].damage = damage+1;
    } else {
      setAlive(false);
      roster[index].alive = false;
    }
  }

  const checkBackground = (bgCode) => {
    if (!bgCode) return;
    let style = ""
    if (bgCode[bgCode.length-1] === "C") {
      style += styles.circle;
    }
    bgCode = bgCode.slice(0, -1); // Remove the last character (C or S)
    if (bgCode === "green") {
      style += ` ${styles.green}`;
    } else if (bgCode === "yellow") {
      style += ` ${styles.yellow}`;
    } else if (bgCode === "red") {
      style += ` ${styles.red}`;
    } else if (bgCode === "blue") {
      style += ` ${styles.blue}`;
    } else if (bgCode === "grey") {
      style += ` ${styles.grey}`;
    } else if (bgCode === "black") {
      style += ` ${styles.black}`;
    }
    return style;
  }


  return (
    <div>
      <h2>{unit.name}</h2>
      <span className={styles.close} onClick={expandUnit(index)} >X</span>
      <a
        target="blank"
        href={`https://www.warrenborn.com/Unit.php?ID=${unit.wId}`}
      >
        See on Warrenborn
      </a>
      <section>
        {unit.primary && (
          <p>
            Primary: {unit.primary[0]} @ {unit.primary[1]}
          </p>
        )}
        {unit.secondary && (
          <p>
            Secondary: {unit.secondary[0]} @ {unit.secondary[1]}
          </p>
        )}
        {unit.capacity && <p>Capacity: {unit.capacity}</p>}
        {/* { unit.artillery && <p>Artillery: {unit.artillery}</p> } */}
        {unit.artilleryRange && <p>Artillery Range: {unit.artilleryRange}</p>}
      </section>
      <section>
        <button
          onClick={() => {takeDamage()}}> take damage</button>
        {Object.entries(unit.table1).map(([type, value]) => {
          if (type === "repair") return null; // Skip repair
          return (
            <div className={styles.statsContainer} key={type}>
              <img src={`/assets/icons/${type}.jpg`}></img>
              {alive ? (
                <span className={`${styles.tableStat} ${checkBackground(value[damage][1])}`}>{value[damage][0]}</span>
              ) : (
                <span className={styles.dead}>
                  <img src={`/assets/icons/bullets.jpg`}></img>
                </span>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}