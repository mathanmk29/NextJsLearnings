export default async function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} of {productId}
    </div>
  );
}
