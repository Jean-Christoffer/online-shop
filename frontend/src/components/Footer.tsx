import Image from "next/image";

export default function Footer(){
    return(
        <>
            <footer className="mt-auto w-full flex justify-center align-center gap-2  items-center p-3">
                <div>
                    <Image width={100} height={100} src={"./next.svg"} alt="logo"/>
                </div>
                <div>
                        
                </div>
            </footer>   
        </>
    )
}