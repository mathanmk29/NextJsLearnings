"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFact() {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
      setLoading(false);
    }

    getFact();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>{fact}</p>
    </main>
  );
}
