import Hero from "./Hero";
import { getProducts } from "../server/querys";
export default async function Home() {
  const { data, error } = await getProducts();

  if (error) return <div>{error.message}</div>;
  return <main>{data && <Hero data={data} />}</main>;
}
