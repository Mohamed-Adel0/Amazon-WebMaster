import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay ,Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductsCarousel({title , link}) {
    const products = [
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/I/81SkKZjDDyL._AC_UL480_FMwebp_QL65_.jpg',
            title: 'Cocktail',
            description: 'Tropical mix of flavors, perfect for parties.',
            price: 8.99,
            link: '#'
          },
          {
            id: 2,
            image: 'https://m.media-amazon.com/images/I/81TY1oOC8CL._AC_UL480_FMwebp_QL65_.jpg',
            title: 'Smoothie',
            description: 'Refreshing blend of fruits and yogurt.',
            price: 5.49,
            link: '#'
          },
        {
          id: 3,
          image: 'https://m.media-amazon.com/images/I/71TrNZRQbdL._AC_UL480_FMwebp_QL65_.jpg',
          title: 'Balaclava Ski Mask',
          description: 'Winter face mask for men and women, ideal for skiing, snowboarding, and motorcycle riding.',
          price: 21.95,
          link: 'https://www.amazon.com/dp/B07H2V8Z1R'
        },
        {
          id: 4,
          image: 'https://m.media-amazon.com/images/I/818yQPVVF6L._AC_UL480_FMwebp_QL65_.jpg',
          title: 'FURTALK Winter Scarf',
          description: 'Pashmina shawl wraps with cashmere feel, warm and fashionable blanket scarves.',
          price: 14.59,
          link: 'https://www.amazon.com/dp/B07H2V8Z1R'
        },
        {
          id: 5,
          image: 'https://m.media-amazon.com/images/I/71pQKQK8LfL._AC_UX679_.jpg',
          title: 'LUOLIIL VOE Neck Gaiter',
          description: '2-pack winter neck warmer for men and women, windproof face cover fleece mask for cold weather sports.',
          price: 14.99,
          link: 'https://www.amazon.com/dp/B07H2V8Z1R'
        },
        {
          id: 6,
          image: 'https://m.media-amazon.com/images/I/71ZUWqgq2fL._AC_UX679_.jpg',
          title: 'YANIBEST Satin Bonnet',
          description: 'Double-layer satin bonnet adjustable hair bonnet for sleeping, suitable for curly natural hair.',
          price: 12.99,
          link: 'https://www.amazon.com/dp/B07H2V8Z1R'
        },
        {
          id: 7,
          image: 'https://m.media-amazon.com/images/I/71pQKQK8LfL._AC_UX679_.jpg',
          title: 'Carhartt Women\'s Quilts',
          description: 'Insulated mittens designed for women, providing warmth and comfort in cold weather.',
          price: 27.99,
          link: 'https://www.amazon.com/dp/B07H2V8Z1R'
        }
      ];
      

// Function to get images
  function getImageUrl(fruit) {
    return `https://loremflickr.com/300/200/${encodeURIComponent(fruit)}`;
  }
  

  return (
    <div className="relative w-full bg-white px-4 md:px-8  ">
      <a href={link} className="font-bold text-[18px] sm:text-[22px] py-4 text-center sm:text-left">
        {title}
      </a>
  
      <Swiper
        modules={[Navigation, Autoplay,Scrollbar]}
        spaceBetween={40} 
        slidesPerView={1} 
        navigation={true} 
        scrollbar={{ hide: false }}
        loop={true} 
        breakpoints={{
          480: { slidesPerView: 1 }, 
          640: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
          1280: { slidesPerView: 4 } 
        }}
        className="swiper-container"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="swiper-slide ">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg ">
              <img src={product.image} alt={product.title} className="w-full h-72 sm:h-60 object-contain " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  
}

