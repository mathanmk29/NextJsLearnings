export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        Documentation Section: {slug[0]}, Page: {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>Documentation Section: {slug[0]}</div>;
  }
  return (
    <div>
      <h1>Docs page</h1>
    </div>
  );
}
