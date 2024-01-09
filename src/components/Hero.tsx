import Image from "next/image"
import { ProducData } from "@/src/lib/interface"
import dynamic from 'next/dynamic'
import "./custom.css"
const Carousel = dynamic(() =>
  import('./Carousel')
)
async function getData(){   
    try{
        const response = await fetch("https://api.noroff.dev/api/v1/online-shop")
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
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap  justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl textShadow">
                        Online pop up store
                    </h1>
                    <p className="max-w-md leading-relaxed  text-gray-400 xl:text:lg">
                        Experience Top-Quality Products - Your Satisfaction Guaranteed or Your Money Back!
                    </p>
                </div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                    <Image
                            src={data[0].imageUrl}
                            alt="amazing"
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                            priority
                         />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                        className="h-full w-full object-cover object-center"
                        alt="amazing" 
                        src={data[1].imageUrl}
                        width={500}
                        height={500}
                        priority
                         />
                    </div>
                </div>
            </div>
 
            <Carousel data={data} />
    
        </section>
        </>
    )
}