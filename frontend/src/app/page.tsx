import Hero from "../components/Hero";
import { ProductData } from "@/src/lib/interface";
import { useCallback } from "react";

export default async function Home() {
  const getData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const data: ProductData[] = await getData();
  return (
    <main>
      <Hero data={data} />
    </main>
  );
}
