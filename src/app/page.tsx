import Hero from "../components/Hero";
import { ProductData } from "@/src/lib/interface";
import { useCallback } from "react";

export default async function Home() {
  const getData = useCallback(async () => {

   
    try {
      const response = await fetch(`${process.env.API_URL}/api/products`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const data: ProductData[] = await getData();
  if(!data) return <div></div>
  return (
    <main>
      <Hero data={data} />
    </main>
  );
}
