"use client";
import Link from "next/link";
import Cart from "../components/uiComponents/Cart";
import Image from "next/image";
import CartButton from "../components/uiComponents/CartButton"
import { useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="w-full  bg-black sticky top-0 z-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <nav className="flex justify-between items-center ">
            <Link href="/">
              <Image src="/logo2.png" width={80} height={80} alt="logo" />
            </Link>
            <ul className="flex gap-8  px-4 py-3 sm:px-6 items-center">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
       
                <CartButton handleIsActive= {handleActive} />
              </li>
            </ul>
      
          </nav>
        </div>
        <Cart isOpen={isActive} handleIsActive={handleActive} />
      </header>
    </>
  );
}
