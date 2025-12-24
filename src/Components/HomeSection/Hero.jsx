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
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
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
            className="h-96 lg:h-[90vh] w-full object-cover"
            alt="hero image 1 "
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390311/2151231527_cepuae.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="h-96 lg:h-[90vh] w-full object-cover object-top"
            alt="hero image 2 "
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390579/115_bpjfyj.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="h-96 lg:h-[90vh] w-full object-cover"
            alt="hero image 3"
            src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766390668/63753_am0hw3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1800}
            height={1000}
            className="h-96 lg:h-[90vh] w-full object-cover object-top"
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

            <a
              href="#services"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ChevronRight className="w-5 h-5 " />
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <ChevronRight className="w-5 h-5 " />
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Book Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
