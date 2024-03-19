import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductData } from "../lib/interface";

export interface CartItem extends ProductData {
  count: number;
}

export type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: ProductData) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        return cart.length
          ? cart.map((item) => item.count).reduce((prev, curr) => prev + curr)
          : 0;
      },
      add: (product: ProductData) => {
        const { cart } = get();
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      remove: (idProduct: number) => {
        const { cart } = get();
        const updatedCart = removeCart(idProduct, cart);
        set({ cart: updatedCart });
      },
      removeAll: () => set({ cart: [] }),
      totalPrice: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.count, 0);
      },
    }),
    {
      name: "cart",
    }
  )
);

function updateCart(product: ProductData, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
