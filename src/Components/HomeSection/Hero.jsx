'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Swiper
        effect={'fade'}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="lg:h-[90vh] w-full object-cover"
            alt="hero image 1 "
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390311/2151231527_cepuae.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="lg:h-[90vh] w-full object-cover object-top"
            alt="hero image 2 "
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390579/115_bpjfyj.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="lg:h-[90vh] w-full object-cover"
            alt="hero image 3"
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390668/63753_am0hw3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="lg:h-[90vh] w-full object-cover object-top"
            alt="hero image 4"
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390757/2148962352_mwmjdb.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
