export const revalidate = false;

export default async function CatPage() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();

  return (
    <main>
      <h1> Static Site Generation</h1>
      <p>{data.fact}</p>
      
    </main>
  );
}
