import React from "react";

export default function ProductDealsCard({ card }) {
  const { title, card_body, link } = card;

  return (
    <div className="product-deal-card">
      <div>
        <h1 className="text-[22px] font-bold">{title}</h1>
        <div className="cat-four-imgs">
          {card_body.map(({ text, img }, i) => (
            <div key={i}>
              <img
                alt={img}
                src={img}
                className="w-full"
                width={135}
                height={116}
              />
              {text && <h6 className="text-[12px]">{text}</h6>}
            </div>
          ))}
        </div>
      </div>
      {link && <a href="">{link}</a>}
    </div>
  );
}
