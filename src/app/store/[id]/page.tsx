import { getProduct } from "../../server/querys";
import Product from "./Product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await getProduct(params.id);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Product not found</div>;
  return (
    <>
      <section className="body-font overflow-hidden text-white mt-auto">
        <Product data={data} />
      </section>
    </>
  );
}
