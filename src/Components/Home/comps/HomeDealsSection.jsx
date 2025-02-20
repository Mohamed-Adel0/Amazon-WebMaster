import React from "react";
import ProductDealsCard from "./ProductDealsCard";
import ProductsCarousel from "./ProductsCarousel";

export default function HomeDealsSection() {
  return (
    <div className="bg-Gray px-5">
      <div className="home-deals-container grid grid-cols-4 gap-[33px] z-50 relative -translate-y-[20%]">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductDealsCard key={i} />
        ))}
      </div>
      <ProductsCarousel title={"Best Sellers in Clothing & Accessories"}/>

      <div className="home-deals-container grid grid-cols-4 gap-[33px] z-50 relative my-20">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductDealsCard key={i} />
        ))}
      </div>
      <ProductsCarousel title={"Min. 50% off | Unique kitchen finds | Amazon Brands & more"}/>

    </div>
  );
}
