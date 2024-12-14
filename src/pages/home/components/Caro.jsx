import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NavLink } from "react-router-dom";
const HeroSection = () => {
  const swiperRef = useRef(null);


  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heading: 'Welcome to Our Platform',
      subtext: 'Your journey starts here!',
    },
    {
      image: 'https://img.freepik.com/free-photo/panoramic-photo-automobile-production-line-welding-car-body-modern-car-assembly-plant_645730-6.jpg?t=st=1733210295~exp=1733213895~hmac=99e4251dbb27116186b0353df43e410a94cc206f07bd46a9d43d66a9eb7589b8&w=1380',
      heading: 'Industrial Machinery',
      subtext: 'Empowering industries with state-of-the-art machinery solutions.',
    },
    {
      image: '/agricultural.jpg',
      heading: 'Agricultural Products',
      subtext: 'From farms to markets, delivering quality and freshness worldwide.',
    },
    {
      image: 'https://img.freepik.com/free-photo/textiles-sale_1398-3775.jpg?t=st=1733211022~exp=1733214622~hmac=ab31bd66837b20f9dd74272c800e0543c7b4e9fb3d8835eb1e78a4ed556343b0&w=826',
      heading: 'Textiles & Apparel',
      subtext: 'Weaving trends and tradition for the global market.',
    },
    {
      image: '/chemical.jpg',
      heading: 'Chemicals & Raw Materials',
      subtext: 'Essential resources, fueling global progress.',
    },
  ];

  return (
    <section className="relative w-full lg:h-screen h-[60vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance to ref
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
                <h1 className="text-4xl font-bold mb-2">{slide.heading}</h1>
                <p className="text-lg">{slide.subtext}</p>
                <NavLink
              to="/products"
              className="border-2 border-white text-white font-bold py-2 my-4 px-4 rounded"
            >
              View More
            </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </section>
  );
};

export default HeroSection;
