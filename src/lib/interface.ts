export interface ProducData {
    id:string;
    title:string;
    description:string;
    price:number;
    discountedPrice:number;
    imageUrl:string;
    rating:number;
    tags:string[];
    reviews:Reviews[];
}
interface Reviews{
    id:string;
    userName:string;
    rating:number;
    description:string;
}

