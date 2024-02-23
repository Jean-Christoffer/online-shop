import { ProducData } from "@/src/lib/interface";
import Image from "next/image";
import GetRatings from "../../../components/uiComponents/GetRatings";
import AddToCart from "@/src/components/AddToCart";
import "./custom.css";

async function getData(params: string) {
  const response = await fetch(`http://localhost:3000/api/product/${params}`);
  const data = await response.json();
  console.log(data)
  return data.data[0];
}
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const data: ProducData = await getData(params.id);
  let ratingArray = new Array(5).fill(0);

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden text-white">
        <div className="container px-5 py-4 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={data.imageUrl}
              alt="productImage"
              width={500}
              height={500}
              className=" aspect-square w-full h-full lg:w-1/2 w-full object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {data.discountedPrice < data.price && (
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  SALE
                </h2>
              )}

              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {data.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {ratingArray.map((_, idx) => {
                    return (
                      <GetRatings key={idx} index={idx} number={data.rating} />
                    );
                  })}
                  {data.reviews.length > 0 && (
                    <span className="text-gray-500 ml-3">
                      {data.reviews.length > 1
                        ? data.reviews.length + " reviews"
                        : data.reviews.length + " review"}
                    </span>
                  )}
                </span>
              </div>
              <h2 className="text-1xl title-font text-gray-500 tracking-widest">
                Product description
              </h2>
              <p className="leading-relaxed">{data.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex flex-col">
                  {data.reviews.length > 0 && (
                    <h2 className="text-1xl title-font text-gray-500 tracking-widest mb-2">
                      <strong>Reviews</strong>
                    </h2>
                  )}
                  {data.reviews.length > 0 &&
                    data.reviews.map((review, idx) => (
                      <div
                        key={review.id}
                        className="flex flex-col align-start mb-2"
                      >
                        <span className="flex">
                          {ratingArray.map((_, idx) => (
                            <GetRatings
                              key={idx}
                              index={idx}
                              number={review.rating}
                            />
                          ))}
                        </span>
                        <p>
                          <small>By {review.username}</small>
                        </p>
                        <p>{review.description}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  $ {data.discountedPrice}
                </span>
                <div className="flex ml-auto py-2 px-6 focus:outline-none ">
                  <AddToCart
                    currency="USD"
                    description={data.description}
                    image={data.imageUrl}
                    name={data.name}
                    price={data.discountedPrice}
                    id={params.id}
                    price_id={data.price_id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
