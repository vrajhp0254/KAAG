import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  const swiperRef = useRef(null);


  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heading: 'Welcome to Our Platform',
      subtext: 'Your journey starts here!',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heading: 'Explore Amazing Features',
      subtext: 'Innovative solutions tailored for you.',
    },
    {
      image: 'https://via.placeholder.com/1200x600',
      heading: 'Join Us Today',
      subtext: 'Be part of our growing community.',
    },
  ];

  return (
    <section className="relative w-full h-[600px]">
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
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white text-center p-4">
                <h1 className="text-4xl font-bold mb-2">{slide.heading}</h1>
                <p className="text-lg">{slide.subtext}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </section>
  );
};

export default HeroSection;
