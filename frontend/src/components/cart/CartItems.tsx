"use client";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

import { CartItem } from "@/src/store/cart";
interface CartItemsProps {
  cart: CartItem[];
  remove: (param: number) => void;
}
const CartItems: React.FC<CartItemsProps> = ({ cart, remove }) => {
  return (
    <figure className="flex flex-col gap-2 mt-4">
      {!cart.length ? (
        <p className="text-black">Cart is empty</p>
      ) : (
        <>
          {cart.map((entry) => {
            return (
              <li key={entry.id} className="flex py-7">
                <div className="h-23 w-23 flex-shrink-0 overflow-hidden rounded-md ">
                  <Image
                    src={entry.imageUrl}
                    alt="Product iamge"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex flex-col text-base font-medium text-gray-900">
                      <h3>{entry.name}</h3>
                      <p>
                        $
                        {entry.count > 1
                          ? (entry.price * entry.count).toFixed(2)
                          : entry.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-black">QTY.{entry.count}</p>
                    <DeleteButton productId={entry.id} remove={remove} />
                  </div>
                </div>
              </li>
            );
          })}
        </>
      )}
    </figure>
  );
};
export default CartItems;
