"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import imgs from "./Text";
export default function Header() {
  return (
    <header className="mt-4">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt="imgs" />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
