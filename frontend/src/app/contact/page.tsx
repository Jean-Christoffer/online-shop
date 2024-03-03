import "./custom.css";

export default function Contact(){
    return(
        <>
        <section className="flex flex-col align-center items-center justify-center h-[50vh]">
            <h1 className="text-4xl">Message us!</h1>
        
            <form className="w-full max-w-xs boxShadow">
                <fieldset className="rounded px-8 pt-6 pb-8 mb-4 ">
                    <legend><h2 className="text-2xl">Fill out this form</h2></legend>
                    <p>
                    <input type="radio" name="size" id="size_1" value="small" />
                    <label htmlFor="size_1">Small</label>
                    </p>
                    <p>
                    <input type="radio" name="size" id="size_2" value="medium" />
                    <label htmlFor="size_2">Medium</label>
                    </p>
                    <p>
                    <input type="radio" name="size" id="size_3" value="large" />
                    <label htmlFor="size_3">Large</label>
                    </p>
                </fieldset>
                <div className="flex justify-center w-full">
                 <button className="text-black  font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline bg">SEND IT</button>
                </div>
               
                <p className="text-center text-gray-500 text-xs mt-2 mb-2">
                &copy;2024 PopNet. All rights reserved.
            </p>
            </form>
            </section>
        </>
    )
}