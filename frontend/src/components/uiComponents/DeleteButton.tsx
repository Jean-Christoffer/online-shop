"use client"
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore,CartStore } from "@/src/store/cart";
import useStore from "../../store/useStore";
type Props = { idProduct: number };

export default function DeleteButton({ idProduct }: Props) {
  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );
  if (!cartStore) return <div></div>;
  const { remove } = cartStore;
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="p-2">
        <button
          type="button"
          className="font-semibold text-black-500 bg-black px-4 text-sm py-2 rounded-md"
          onClick={() => {
            remove(idProduct);
            close();
          }}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
