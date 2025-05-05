
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1><Link href={'/roster'}>Make a Roster</Link></h1>
    </div>
  );
}
