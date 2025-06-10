"use client";
import { useState } from "react";
import Link from "next/link";

export default function Unit() {

  return (
    <div>
      <h1>Unit</h1>
      <Link href={"/game"}>Back</Link>
    </div>
  );
}
