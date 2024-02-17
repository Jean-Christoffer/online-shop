export interface ProducData {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: Tag[];
  reviews: Reviews[];
}
interface Reviews {
  id: number;
  rating: number;
  username: string;
  created_at: string;
  product_id: string;
  description: string;
}

interface Tag {
  id: number;
  tags: Tags;
  tag_id: number;
  product_id: number;
}

interface Tags {
  id: number;
  name: string;
}
