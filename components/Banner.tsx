"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


export default function Banner() {
  return (
    <div className="w-full h-[300px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/banner1.png" className="w-full h-[300px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner2.png" className="w-full h-[300px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}