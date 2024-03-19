import { useCallback } from "react";
import { ProductData } from "@/src/lib/interface";

import ProductDetails from "@/src/components/uiComponents/ProductDetails";
import "./styles.css";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const getData = useCallback(async () => {
    const baseUrl = `${process.env.VERCEL_URL}`;
    try {
      const response = await fetch(
        `${baseUrl}/api/product/${params.id}`
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
      <section className="text-gray-700 body-font overflow-hidden text-white">
        <ProductDetails data={data} />
      </section>
    </>
  );
}
