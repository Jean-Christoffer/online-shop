import { ProductData } from "../lib/interface";

import Products from "./Products";
import Scene from "./Scene";
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
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl textShadow">
              PopNet Boutique
            </h1>
            <p className="max-w-md leading-relaxed  text-gray-400 xl:text:lg">
              Experience Top-Quality Products - Your Satisfaction Guaranteed or
              Your Money Back..
            </p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0 ">
              <Scene
                direction="+"
                modelPath="/dogecoin.fbx"
                texturePaths={{
                  map: "/300coin.png",
                  heightMap: "/DisplacementMap.png",
                  normalMap: "/NormalMap.png",
                  aoMap: "/AmbientOcclusionMap.png",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Scene
                direction="-"
                modelPath="/BTC_model.fbx"
                texturePaths={{
                  map: "/BTC_Albedo.png",
                  heightMap: "/BTC_Height.png",
                  normalMap: "/BTC_Normal.png",
                  aoMap: "/BTC_AO.png",
                  roughnessMap: "/BTC_Roughness.png",
                }}
              />
            </div>
          </div>
        </div>

        <Products data={data} />
      </section>
    </>
  );
}
