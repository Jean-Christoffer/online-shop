"use client"
import Link from "next/link"
import Cart from "./Cart"
import { useState } from "react"
export default function Nav(){
const [isActive, setIsActive] = useState(false)
const handleActive = () => {
    setIsActive(!isActive)
}
    return(
        <>
        <header className="w-full  bg-black sticky top-0 z-20 custom-border">
            <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 lg:max-w-7xl lg:px-8">
                <nav className="flex justify-end ">
                    <ul className="flex gap-8  px-4 py-3 sm:px-6 items-center">
                        <li><Link href="/contact">Contact</Link></li>

                        <button onClick={handleActive}>
                         Cart
                        </button>
                        
                    </ul>
                </nav>

            </div>
            <Cart isOpen={isActive}/>
        </header>
        </>
    )
}