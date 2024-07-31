import type { ProductData } from "@/src/lib/interface";

import ProductList from "./ProductList";
import Scene from "./Scene";
import Heading from "./Heading";

interface HeroData {
  data: ProductData[];
}

export default function Hero(props: HeroData) {
  const { data } = props;

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 mt-8 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap  justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 select-none">
            <Heading />
            <p className="max-w-md leading-relaxed  text-gray-400 xl:text:lg">
              Experience Top-Quality Products - Your Satisfaction Guaranteed or
              Your Money Back..
            </p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0 ">
              <Scene
                direction="+"
                modelPath="./static/images/dogecoin.FBX"
                texturePaths={{
                  map: "./static/images/300coin.png",
                  heightMap: "./static/images/DisplacementMap.png",
                  normalMap: "./static/images/NormalMap.png",
                  aoMap: "./static/images/AmbientOcclusionMap.png",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Scene
                direction="-"
                modelPath="./static/images/BTC_model.FBX"
                texturePaths={{
                  map: "./static/images/BTC_Albedo.png",
                  heightMap: "./static/images/BTC_Height.png",
                  normalMap: "./static/images/BTC_Normal.png",
                  aoMap: "./static/images/BTC_AO.png",
                  roughnessMap: "./static/images/BTC_Roughness.png",
                }}
              />
            </div>
          </div>
        </div>

        <ProductList data={data} />
      </section>
    </>
  );
}
