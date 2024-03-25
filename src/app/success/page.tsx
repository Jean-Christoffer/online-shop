import Link from "next/link";

export default function Success() {
  return (
    <>
    <section className="container flex justify-center align-center m-auto flex-col align-center items-center">
        <h1 className="text-2xl">Payment Successfull! thanks!</h1>
        <Link href="/" className="text-2xl mt-2 custom-color">Back to store</Link>
    </section>
      
    </>
  );
}
