"use client"
import Link from "next/link"
import Image from "next/image"
import { ProducData } from "@/src/lib/interface"
import {useState,useEffect} from "react"
interface carouselProps{
    data:ProducData[]
}


const Carousel: React.FC<carouselProps> = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ascending, setAscending] = useState(false);
    const [filteredData, setFilteredData] = useState([...data]);
    
    useEffect(() => {
        console.log("Filtering");
        const filtered = data.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            product.tags[0].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm, data]); 
    
    useEffect(() => {
        console.log("Sorting");
  
        const sorted = [...(searchTerm ? filteredData : data)].sort((a, b) => 
            ascending ? a.price - b.price : b.price - a.price
        );
        setFilteredData(sorted);
    }, [ascending]); 
    
    function handleSort(){
        setAscending(!ascending);
    }
    return( 
        <>
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-wrap items-center">
                        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                    <div className="ml-auto flex items-center gap-2 ">
                        <button onClick={handleSort}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
    
                        </button>

                        <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search" 
                        className="text-black flex items-center gap-x-1 rounded outline-none px-1 py-1 pl-2" />
                       
                    </div>

                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 min-h-screen">

                        {filteredData.map(teaser => {
                            return (
                                <Link key={teaser.id}  href={`/store/${teaser.id}`}>
                                <div className="group relative custom-hover rounded">
                                    <div className="box-shadow aspect-square w-full overflow-hidden rounded-md relative lg:h-80">
                                        
                                        <Image
                                         src={teaser.imageUrl} 
                                         alt="teaserImage" 
                                         className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                                         width={300}
                                         height={300}
                                         />

                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-200">
                                                
                                                    {teaser.title}
                                              
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-400">
                                                {teaser.tags[0]}
                                            </p>
                                        </div>
                                        <div>
                                         <p className={`text-sm ${teaser.discountedPrice < teaser.price && "line-through"}`}>${teaser.price}</p>
                                         {teaser.discountedPrice < teaser.price && <p className="text-sm">${teaser.discountedPrice}</p>}
                                        </div>
                                        
                                    </div>
                                </div>
                                </Link>
                            )
                        })}
                        {filteredData.length === 0 &&
                        <div className="group relative">
                            <h1 className="text-2xl">No results found</h1>
                        </div>
                        
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
