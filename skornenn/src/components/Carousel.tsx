import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Frame1 from '../assets/frame1.png';
import Frame2 from '../assets/frame2.png';
import Frame3 from '../assets/frame3.png';
import Frame4 from '../assets/frame4.png';
import Frame5 from '../assets/frame5.png';

const CarouselAuto: React.FC = () => {
  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide><img src={Frame1} className="w-full h-full object-cover" alt="Frame 1" /></SwiperSlide>
        <SwiperSlide><img src={Frame2} className="w-full h-full object-cover" alt="Frame 2" /></SwiperSlide>
        <SwiperSlide><img src={Frame3} className="w-full h-full object-cover" alt="Frame 3" /></SwiperSlide>
        <SwiperSlide><img src={Frame4} className="w-full h-full object-cover" alt="Frame 4" /></SwiperSlide>
        <SwiperSlide><img src={Frame5} className="w-full h-full object-cover" alt="Frame 5" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default CarouselAuto;