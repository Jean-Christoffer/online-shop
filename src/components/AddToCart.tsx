"use client"
import { useShoppingCart } from "use-shopping-cart"
export interface ProductCart {
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    id:string;
 
}
export default function AddToCart({name,description,price,currency,image,id}:ProductCart){
    const {addItem,cartDetails = {} } = useShoppingCart()
    
    let maxAmount: boolean = cartDetails?.[id]?.quantity > 4;
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:image,
        id:id,
    }

    return(
        <>
        <button className="bg-white p-2 text-black disabled:text-red" 
        onClick={() => addItem(product)}
        disabled={cartDetails[id]?.quantity > 4}>
          {maxAmount ? <p>Max ammount reached</p> : <p>Add to cart</p>}
        </button>
        </>
    )
}