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

  const slider_imgs = [
    "home/slider/slider.png",
    "home/slider/slider-1.png",
    "home/slider/slider-2.png",
  ];

  return (
    <Swiper {...swiperProps} className="h-[60vh] relative">
      {slider_imgs.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            className="w-full h-full bg-center object-cover"
            alt={"slider" + i}
          />
        </SwiperSlide>
      ))}
      {/* navigation controls btns */}
      <div className="sm:flex hidden w-full px-20 z-50 top-1/2 -translate-y-1/2 justify-between absolute">
        <button id="prev-slide">
          <img src="left-arrow.svg" alt="" />
        </button>
        <button id="next-slide">
          <img src="right-arrow.svg" alt="" />
        </button>
      </div>
    </Swiper>
  );
}
