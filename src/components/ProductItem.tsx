"use client";

import Image from "next/image";
import { ProductData } from "@/src/lib/interface";
import Link from "next/link";
type ProductCartProps = {
  data: ProductData;
};

export default function ProductItem({ data }: ProductCartProps) {
  return (
    <Link key={data.id} href={`/store/${data.id}`}>
      <div className="group relative custom-hover rounded">
        <div className="box-shadow aspect-square w-full overflow-hidden rounded-md relative lg:h-80">
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt="teaserImage"
              className="w-full h-full object-cover object-center lg:h-full lg:w-full"
              width={300}
              height={300}
            />
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-200">{data.name}</h3>
            <p className="mt-1 text-sm text-gray-400">
              {data.product_tags[0].tags.name}
            </p>
          </div>
          <div>
            <p
              className={`text-sm ${
                data.discountedPrice < data.price && "line-through"
              }`}
            >
              ${data.price}
            </p>
            {data.discountedPrice < data.price && (
              <p className="text-sm">${data.discountedPrice}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
