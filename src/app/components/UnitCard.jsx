"use client";
import { useRoster } from "@/context/RosterContext";



export default function UnitCard({ unit }) {
  const { roster, setRoster } = useRoster();


  return (
    <div>
      <h2>{unit.name}</h2>
      <a  target="blank" href= {`https://www.warrenborn.com/Unit.php?ID=${unit.wId}`}>See on Warrenborn</a>
      <section>
        { unit.primary && <p>Primary: {unit.primary[0]} @ {unit.primary[1]}</p> }
        { unit.secondary && <p>Secondary: {unit.secondary[0]} @ {unit.secondary[1]}</p> }
        { unit.capacity && <p>Capacity: {unit.capacity}</p>}
        {/* { unit.artillery && <p>Artillery: {unit.artillery}</p> } */}
        { unit.artilleryRange && <p>Artillery Range: {unit.artilleryRange}</p> }
      </section>
    </div>
  );
}