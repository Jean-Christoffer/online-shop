"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../../../store/cart";
import type { ProductData } from "@/src/lib/interface";

interface AddToCartButtonProps {
  data: ProductData;
}
export default function AddToCartButton({ data }: AddToCartButtonProps) {
  const { add: handleAddToCart } = useCartStore();
  const [buttonText, setButtonText] = useState<string>("Add to cart");
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      disabled={disabled}
      onClick={() => {
        handleAddToCart(data);
        setButtonText("Added to cart!");
        setDisabled(true);
        setTimeout(() => {
          setButtonText("Add to cart");
          setDisabled(false);
        }, 1000);
      }}
      className="w-60"
    >
      {buttonText}
    </Button>
  );
}
