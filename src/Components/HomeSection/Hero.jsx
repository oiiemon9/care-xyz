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
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
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
      <div className=" absolute top-0 z-10 flex items-center h-full w-full ">
        <div className="container mx-auto px-4 flex items-center">
          <div className="max-w-2xl bg-neutral/50  border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 text-base-200">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  leading-tight mb-6">
              Trusted Care for Your Loved Ones, Anytime
            </h1>
            <p className="text-md md:text-xl mb-8 max-w-xl leading-relaxed">
              Professional, reliable, and compassionate caregiving services for
              children, elderly, and those in need. Safe, easy, and always
              accessible.
            </p>
            <button className="group inline-flex items-center gap-2 bg-primary  px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
