'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { id: 1, name: 'Electronics', image: '/images/electronic.jpg' },
  { id: 2, name: 'Fashion', image: '/images/fashion.jpg' },
  { id: 3, name: 'Home Appliances', image: '/images/electronic.jpg' },
  { id: 4, name: 'Beauty', image: '/images/fashion.jpg' },
  { id: 5, name: 'Books', image: '/images/orange.png' },
  { id: 6, name: 'Toys', image: '/images/electronic.jpg' },
  { id: 7, name: 'Fitness', image: '/images/fashion.jpg' },
  { id: 8, name: 'Groceries', image: '/images/orange.png' },
  { id: 9, name: 'Automotive', image: '/images/electronic.jpg' },
  { id: 10, name: 'Garden', image: '/images/orange.png' },
];

const CategoryCarousel = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Shop by Category</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true} // ✅ Enables Swiper's default nav arrows
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide 
          key={cat.id}>
            <div className="p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-fill"
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
