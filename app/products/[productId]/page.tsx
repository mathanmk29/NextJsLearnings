export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
