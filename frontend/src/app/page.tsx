import Hero from "../components/Hero"
import { ProducData } from "@/src/lib/interface"

async function getData(){   
  try{
      const response = await fetch("http://localhost:3000/api/products")
      const data = await response.json()
      return data.data
  }catch(error){
      console.log(error)
  }

  
}
export default async function Home() {
  const data:ProducData[] = await getData()
  return (
    <main>
      <Hero data={data} />
    </main>
  )
}
