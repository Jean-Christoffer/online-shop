import Hero from "../components/Hero";
import { ProductData } from "@/src/lib/interface";
import { useCallback } from "react";

export default async function Home() {
  const getData = useCallback(async () => {
    const baseUrl = typeof window !== 'undefined' ? '' : 'http://localhost:3000';
    try {
      const response = await fetch(`${baseUrl}/api/products`);
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
