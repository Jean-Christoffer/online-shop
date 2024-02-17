import { ProducData } from "@/src/lib/interface"
import dynamic from 'next/dynamic'
import Scene from "./Scene"
import Scene2 from "./Scene2"
import "./custom.css"
const Carousel = dynamic(() =>
  import('./Products')
)
async function getData(){   
    try{
        const response = await fetch("http://localhost:3100/api/products")
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }

    
}

export default async function Hero(){
   
const data:ProducData[] = await getData()

    return(
        <>
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 mt-8 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap  justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl textShadow">
                        PopNet Boutique
                    </h1>
                    <p className="max-w-md leading-relaxed  text-gray-400 xl:text:lg">
                        Experience Top-Quality Products - Your Satisfaction Guaranteed or Your Money Back.. Maybe ;)
                    </p>
                </div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                   <div   className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0 ">
                    
                        <Scene />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <Scene2 />
                    </div>
        
                </div>
            </div>
 
            <Carousel data={data} />
    
        </section>

           </>
    )
}