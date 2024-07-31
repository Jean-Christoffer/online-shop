"use client";

import { ProductData } from "@/src/lib/interface";
import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

interface CarouselProps {
  data: ProductData[];
}
const Products: React.FC<CarouselProps> = ({ data }: CarouselProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ascending, setAscending] = useState(false);
  const [filteredData, setFilteredData] = useState([...data]);

  useEffect(() => {
    const filtered = data.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_tags[0].tags.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  useEffect(() => {
    if (ascending) {
      const sorted = filteredData.sort(
        (a, b) => b.discountedPrice - a.discountedPrice
      );
      setFilteredData(sorted);
    }
    if (!ascending) {
      const descending = filteredData.sort(
        (a, b) => a.discountedPrice - b.discountedPrice
      );
      setFilteredData(descending);
    }
    return setFilteredData(filteredData);
  }, [ascending, filteredData]);

  function handleSort() {
    setAscending(!ascending);
  }
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-wrap items-center">
            <h2 className="text-2xl font-bold tracking-tight">Products</h2>
            <div className="mt-2 md:mt-0 md:mr-0 mr-auto md:ml-auto flex items-center gap-2 ">
              <button onClick={handleSort}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button>

              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search"
                className="text-black flex items-center gap-x-1 rounded outline-none px-1 py-1 pl-2"
              />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 min-h-screen">
            {filteredData.map((teaser) => (
              <ProductCard data={teaser} key={teaser.id} />
            ))}
            {filteredData.length === 0 && (
              <div className="group relative">
                <h1 className="text-2xl">No results found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
