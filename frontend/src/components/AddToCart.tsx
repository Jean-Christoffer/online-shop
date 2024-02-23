"use client"
import { useShoppingCart } from "use-shopping-cart"
export interface ProductCart {
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    id:string;
    price_id:string;
 
}
export default function AddToCart({name,description,price,currency,image,id, price_id}:ProductCart){
    const {addItem,cartDetails = {} } = useShoppingCart()
    
    let maxAmount: boolean = cartDetails?.[price_id]?.quantity > 4;
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:image,
     
        price_id:price_id,
    }

    return(
        <>
        <button className="bg-white p-2 text-black disabled:text-red" 
        onClick={() => addItem(product)}
        disabled={cartDetails[price_id]?.quantity > 4}>
          {maxAmount ? <p>Max ammount reached</p> : <p>Add to cart</p>}
        </button>
        </>
    )
}