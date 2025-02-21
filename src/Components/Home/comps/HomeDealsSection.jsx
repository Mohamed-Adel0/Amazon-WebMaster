import React from "react";
import ProductDealsCard from "./ProductDealsCard";
import ProductsCarousel from "./ProductsCarousel";
import { home_deal, rest_of_the_deals } from "../../API/API";

const special_card_imgs = [
  "home/home cat imgs/special card/img-1.png",
  "home/home cat imgs/special card/img-2.png",
  "home/home cat imgs/special card/img-3.png",
  "home/home cat imgs/special card/img-4.png",
];

export default function HomeDealsSection() {
  return (
    <div className="bg-Gray">
      <div className="xl:-translate-y-[200px] z-50 relative space-y-12 home-deals-container">
        <div className="grid-four">
          {home_deal.map((card, i) => (
            <ProductDealsCard card={card} key={i} />
          ))}
        </div>
        <ProductsCarousel title={"Best Sellers in Clothing & Accessories"} />
        <div className="grid-four">
          {/* special card */}
          <div className="product-deal-card">
            <div>
              <h1 className="text-[22px] font-bold">
                Best Sellers in Toys & Games
              </h1>
              <div className="space-y-8">
                <img
                  src="home/home cat imgs/special card/body-card-img.png"
                  className="w-full"
                  alt="toy"
                />
                <h6 className="text-[12px]">
                  Storio Rechargeable Toys Talking Cactus Baby Toys for Kids
                  Dancing Cactus Toys
                </h6>
                <h2 className="text-[20px]">319$</h2>
                <div className="special-card">
                  {special_card_imgs.map((img, i) => (
                    <div key={i}>
                      <img
                        alt={img}
                        src={img}
                        className="w-full"
                        width={135}
                        height={116}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {rest_of_the_deals.map((card, i) => (
            <ProductDealsCard card={card} key={i} />
          ))}
        </div>
        <ProductsCarousel
          title={"Min. 50% off | Unique kitchen finds | Amazon Brands & more"}
        />
      </div>
    </div>
  );
}
