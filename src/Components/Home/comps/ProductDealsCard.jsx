import React from "react";

export default function ProductDealsCard() {
  return (
    <div className="product-deal-card">
      <div>
        <h1 className="text-[22px] font-bold">Revamp your home in style</h1>
        <div className="cat-four-imgs">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <img
                alt=""
                src="card-img.png"
                className="w-full"
                width={135}
                height={116}
              />
              <h6 className="text-[12px]">Cushion covers, bedsheets & more</h6>
            </div>
          ))}
        </div>
      </div>
      <a href="">See more</a>
    </div>
  );
}
