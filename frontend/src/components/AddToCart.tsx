"use client";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import "./custom.css";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  id: string;
  price_id: string;
}

export default function AddToCart({
  name,
  description,
  price,
  currency,
  image,
  id,
  price_id,
}: ProductCart) {
  const { addItem, cartDetails } = useShoppingCart();
  const [buttonState, setButtonState] = useState("default");

  let productQuantity = cartDetails[price_id]?.quantity ?? 0;
  let maxAmountReached = productQuantity >= 4;

  const handleClick = () => {
    if (buttonState === "default") {
      addItem({
        name,
        description,
        price,
        currency,
        image,
        price_id,
      });
      setButtonState("added");
      setTimeout(() => setButtonState("default"), 1000);
    }
  };

  let buttonText = "Add to cart";
  let isDisabled = false;

  if (maxAmountReached) {
    buttonText = "Max amount reached";
    isDisabled = true;
  } else if (buttonState === "added") {
    buttonText = "Added to cart!";
    isDisabled = true;
  }

  return (
    <button
      className={`bg-white p-2 text-black ${
        isDisabled ? "disabled:text-red" : "custom-hover"
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <p>{buttonText}</p>
    </button>
  );
}
