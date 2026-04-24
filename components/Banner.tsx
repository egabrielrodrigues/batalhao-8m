"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


export default function Banner() {
  return (
    <div className="w-full h-[250px] md:h-[300px] lg:h-[400px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/banner1.png" className="w-full h-full h-[250px] md:h-[300px] lg:h-[400px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner2.png" className="w-full h-full h-[250px] md:h-[300px] lg:h-[400px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}