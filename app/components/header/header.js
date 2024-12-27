"use client";
import "./header.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function header() {
  return (
    <div>
      <div className="mt-4">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide><img src="/images/slide1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide6.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide7.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/images/slide8.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
