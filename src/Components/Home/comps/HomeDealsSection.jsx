import React from "react";
import ProductDealsCard from "./ProductDealsCard";

export default function HomeDealsSection() {
  return (
    <div className="bg-Gray">
      <div className="home-deals-container grid grid-cols-4 gap-[33px] z-50 relative -translate-y-[20%]">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductDealsCard key={i} />
        ))}
      </div>
    </div>
  );
}
