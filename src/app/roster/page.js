'use client'

import styles from "./roster.module.css";
import unitList from "../../unitList";
import { useRoster } from "@/context/RosterContext"



export default function Roster() {

  const { roster, setRoster } = useRoster();

  const addUnit = (unitCode) => {
    var addedUnit = {...unitList[unitCode]};
    addedUnit.id = Date.now();
    setRoster([...roster, addedUnit]);
  };


  const removeUnit = (uid) => {
    const newRoster = [...roster];
    for (var i = 0; i < newRoster.length; i++){
      if (newRoster[i].id === uid) {
        newRoster.splice(i, 1);
        break;
      }
    }
    setRoster(newRoster);
  };



  return (
    <div>
      <h1>Pick your units</h1>
      <ul>
        {Object.keys(unitList).map((unitCode) => (
          <li key={unitCode}>
            {unitList[unitCode].name}
            <button onClick={() => addUnit(unitCode)} className={styles.button}>
              +
            </button>
          </li>
        ))}
      </ul>

      <h2>You picked:</h2>
      <ul>
        {roster.map((unit, index) => (
          <li key={unit.id}>
            {unit.name}
            <button onClick={() => removeUnit(unit.id)} className={styles.button}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
