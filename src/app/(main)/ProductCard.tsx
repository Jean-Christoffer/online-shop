import type { ProductData } from "@/src/lib/interface";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProductCarDProps {
  data: ProductData;
}

export default function ProductCard({ data }: ProductCarDProps) {
  return (
    <Card className="w-full max-w-xs rounded-xl border width">
      <Link key={data.id} href={`/store/${data.id}`}>
        <div className="grid gap-4 p-4">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
            <Image
              src={data.imageUrl}
              alt="teaserImage"
              width={500}
              height={500}
              className="aspect-[4/5] object-cover border w-full"
            />
          </div>
          <div className="grid gap-1.5">
            <h3 className="font-semibold text-sm md:text-base">{data.name}</h3>
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
            <p className="text-sm md:text-base text-gray-400">
              {data.product_tags[0].tags.name}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
