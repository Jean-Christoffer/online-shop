'use client';

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCartStore,CartStore } from "@/src/store/cart";
import useStore from "../../store/useStore";
interface CartButtonProps {
    handleIsActive: () => void; 
  }
  export default function CartButton({ handleIsActive }: CartButtonProps) {
    const cartStore = useStore<CartStore, CartStore>(
      useCartStore,
      (state: any) => state
    );
    if (!cartStore) return <div></div>;
    const { count } = cartStore;
  
    return (
      <button onClick={handleIsActive} className="relative"> 
        <ShoppingCartIcon className="w-6 h-6" strokeWidth={2} />
        <Label item={count()} />
      </button>
    );
  }

const Label: React.FC<{ item: number }> = ({ item }) => {
  if (item === 0) return <></>

  return (
    <span className="absolute top-0 left-4 w-4 h-4 bg-red-400 text-black font-semibold text-xs rounded-full grid place-content-center">
      {item}
    </span>
  )
}