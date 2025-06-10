'use client'

import styles from "./roster.module.css";
import units from "../../data/units";
import { useRoster } from "@/context/RosterContext"
import { useState} from "react";
import Link from "next/link";



export default function Roster() {

  const { roster, setRoster } = useRoster();
  const [rosterPoints, setRosterPoints] = useState(0);
  const [gamePoints, setGamePoints] = useState(0);

  const addUnit = (unitCode, type) => {
    var addedUnit = {...units[type][unitCode]};
    addedUnit.id = Date.now();
    setRoster([...roster, addedUnit]);
    setRosterPoints(prev=>prev+addedUnit.points);
  };


  const removeUnit = (uid) => {
    const newRoster = [...roster];
    for (var i = 0; i < newRoster.length; i++){
      if (newRoster[i].id === uid) {
        let points = newRoster[i].points;
        setRosterPoints((prev) => prev - points >0 ? prev - points :0);
        newRoster.splice(i, 1);
        break;
      }
    }
    setRoster(newRoster);
  };

  const updateGamePoints= (points)=>{
    setGamePoints(points)
  }

  return (
    <div>
      <h1>Pick your points</h1>
      <input
        onChange={(e) => updateGamePoints(e.target.value)}
        type="number"
      ></input>
      <h1>Pick your units</h1>
      <ul>
        {Object.keys(units.mechs).map((unitCode) => (
          <li key={unitCode}>
            {units.mechs[unitCode].name + " (" + units.mechs[unitCode].points + ")"}
            <button onClick={() => addUnit(unitCode, "mechs")} className={styles.button}>
              +
            </button>
          </li>
        ))}
        {Object.keys(units.vehicles).map((unitCode) => (
          <li key={unitCode}>
            {units.vehicles[unitCode].name + " (" + units.vehicles[unitCode].points + ")"}
            <button onClick={() => addUnit(unitCode, "vehicles")} className={styles.button}>
              +
            </button>
          </li>
        ))}
      </ul>
      <h2>You picked:</h2>
      <p>
        {rosterPoints} of {gamePoints}
      </p>
      <ul>
        {roster.map((unit, index) => (
          <li key={unit.id}>
            {unit.name}
            <button
              onClick={() => removeUnit(unit.id)}
              className={styles.button}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button id= {styles.playButton} className={styles.button}>
        <Link href={"/game"}>Play</Link>
      </button>
    </div>
  );
}
