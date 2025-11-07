export default async function SSRPage() {
  const res = await fetch("https://catfact.ninja/fact", { cache: "no-store" });
  const data = await res.json();

  return (
    <main>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>{data.fact}</p>
    </main>
  );
}
