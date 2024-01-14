"use client";
import Image from "next/image";
import {useState} from "react";
import "./custom.css";
interface CartProps {
  isOpen: boolean;
}
import { useShoppingCart } from "use-shopping-cart";
const Cart: React.FC<CartProps> = ({ isOpen }) => {
  const {
    cartCount,
    cartDetails,
    removeItem,
    totalPrice,
    decrementItem,
    redirectToCheckout,
  } = useShoppingCart();
  const [status, setStatus] = useState('idle')

  async function handleClick(event) {
    event.preventDefault()

    if (cartCount > 0) {
      setStatus('idle')
      try {
        const result = await redirectToCheckout()
        if (result?.error) {
          console.error(result)
          setStatus('redirect-error')
        }
      } catch (error) {
        console.error(error)
        setStatus('redirect-error')
      }
    } else {
      setStatus('missing-items')
    }
  }
  
  return (
    <>
      <div
        className={`flex flex-col overflow-y-auto fixed top-0 right-0 w-96 h-full custom-bg-color p-4 transform ease-in-out duration-500 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <h2 className="text-lg font-bold text-black">Sidebar Content</h2>
        {cartCount === 0 ? (
          <p className="text-black">Cart is empty</p>
        ) : (
          <>
            {Object.values(cartDetails ?? {}).map((entry) => {
              return (
                <li key={entry.id} className="flex py-7">
                  <div className="h-23 w-23 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={entry.image as string}
                      alt="Product iamge"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{entry.name}</h3>
                        <p>
                          $
                          {entry.quantity > 1
                            ? (entry.price * entry.quantity).toFixed(2)
                            : entry.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-black">QTY.{entry.quantity}</p>
                      {entry.quantity > 1 ? (
                        <div className="flex">
                          <button
                            onClick={() => decrementItem(entry.id)}
                            type="button"
                            className="font-medium text-black"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="flex">
                          <button
                            onClick={() => removeItem(entry.id)}
                            type="button"
                            className="font-medium text-black"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        )}
        <div className="mt-auto flex justify-between items-center">
          <p className="text-black text-2xl">Total ${totalPrice?.toFixed(2)}</p>
          {cartCount !== 0 && (
            <button onClick={handleClick} className="p-2 bg-black rounded">Checkout</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
