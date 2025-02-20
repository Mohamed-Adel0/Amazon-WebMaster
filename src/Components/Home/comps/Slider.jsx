import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function Slider() {
  const swiperProps = {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    grabCursor: false,
    allowTouchMove: true,
    modules: [Navigation],
    navigation: { nextEl: "#next-slide", prevEl: "#prev-slide" },
  };

  return (
    <Swiper {...swiperProps} className="bg-green-400 relative">
      {Array.from({ length: 4 }).map((_, i) => (
        <SwiperSlide key={i}>
          <img
            src="slider-placeholder.png"
            className="w-full bg-center object-cover"
            alt=""
          />
        </SwiperSlide>
      ))}
      {/* navigation controls btns */}
      <div className="w-full px-20 flex z-50 top-1/2 -translate-y-1/2 justify-between absolute">
        <button id="prev-slide"><img src="left-arrow.svg" alt="" /></button>
        <button id="next-slide"><img src="right-arrow.svg" alt="" /></button>
      </div>
    </Swiper>
  );
}
