import { useCallback } from "react";
import { ProductData } from "@/src/lib/interface";

import Product from "./Product";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.API_URL}/api/product/${params.id}`
      );
      const data = await response.json();

      return data.data[0];
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  const data: ProductData = await getData();
  return (
    <>
      <section className="body-font overflow-hidden text-white mt-auto">
        <Product data={data} />
      </section>
    </>
  );
}
