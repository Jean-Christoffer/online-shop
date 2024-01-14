
import { ProducData } from "@/src/lib/interface"
import Image from "next/image"
import GetRatings from "../../../components/uiComponents/GetRatings"
import AddToCart from "@/src/components/AddToCart"
import "./custom.css"


async function getData(params:string){
    const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${params}`)
    const data = await response.json()
    return data
}
export default async function ProductDetails({params}:{params:{id:string}}){
    const data:ProducData = await getData(params.id)
    let ratingArray = new Array(5).fill(0);
    

    return(
        <>
        <figure className="customGrid container mx-auto gap-2 h-screen">
            <div  className="aspect-square w-full overflow-hidden rounded-md relative">
                <Image src={data.imageUrl} alt="productImage" width={500} height={500} className="object-cover object-center w-full h-full" />
            </div>
            <article className="container self-center">
                <h1 className=" text-3xl custom-color">{data.title}</h1>
                
                <div className="flex items-center">
                    {ratingArray.map((_, idx) => {
                   
                        return (
                            <GetRatings key={idx} index={idx} number={data.rating} />
                        );
                    })}
                </div>
                <p>{data.price}</p>
                <p>{data.description}</p>
                {data.reviews.length > 0 && data.reviews.map(e => <p key={e.id}>{e.description}</p>)}
                <div className="flex justify-center py-2">
                <AddToCart 
                currency="USD" 
                description={data.description} 
                image={data.imageUrl} 
                name={data.title}
                price={data.price} 
                id={params.id}/>
                </div>
            </article>

  
        </figure>
        
        </>
    )
}