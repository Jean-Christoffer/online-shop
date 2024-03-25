"use client";
import CartItems from "./CartItems";
import { useCartStore, CartStore } from "@/src/store/cart";
import { useRouter } from "next/navigation";
import useStore from "../../store/useStore";

interface CartProps {
  isOpen: boolean;
  handleIsActive: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, handleIsActive }) => {
  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );
  const router = useRouter();
  if (!cartStore) return <div></div>;
  const { count, removeAll, totalPrice, cart, remove } = cartStore;

  function handleNavigation() {
    router.push("/success");
    removeAll();
    handleIsActive();
  }
  return (
    <>
    {isOpen && <div className="bg-black fixed inset-0 w-screen h-screen bg-opacity-75 overflow-hidden" onClick={handleIsActive}></div>}
      <div
        className={`flex flex-col overflow-y-auto fixed top-0 right-0 w-full md:w-96 h-full custom-bg-color p-4 transform ease-in-out duration-500 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <div className="flex items-center justify-between w-full">
          <h2 className="text-lg font-bold text-black">Your cart</h2>
          <button className="text-black w-5" onClick={handleIsActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>
        </div>
        <CartItems cart={cart} remove={remove} />
        <div className="mt-auto flex justify-between items-center">
          <p className="text-black text-2xl">Total ${totalPrice()}</p>
          {count() !== 0 && (
            <button
              type="button"
              onClick={handleNavigation}
              className="p-2 bg-black rounded"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
