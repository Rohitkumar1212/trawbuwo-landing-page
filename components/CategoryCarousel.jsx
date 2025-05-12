'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const categories = [
  { id: 1, name: 'Electronics', image: '/images/electronics.jpg' },
  { id: 2, name: 'Fashion', image: '/images/fashion.jpg' },
  { id: 3, name: 'Home Appliances', image: '/images/home-appliances.jpg' },
  { id: 4, name: 'Beauty', image: '/images/beauty.jpg' },
  // Add more categories as needed
];

const CategoryCarousel = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Shop by Category</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-cover"
                />
                <p className="text-center font-medium mt-2">{cat.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
