"use client";
import "./papular.css";
import Papularitem2 from "../papularitem2/Papularitem2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { banners, product, sliderText } from "./Text";
export default function Papular() {
  return (
    <>
      <p className="text-center my-5 fs-3">
        دسته‌بندی‌های پرطرفدار داروخانه آنلاین
      </p>
      <div className="mb-5">
        <Swiper
          slidesPerView={6}
          spaceBetween={100}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper img-papular"
        >
          {sliderText.map((item, index) => (
            <SwiperSlide key={index} className="papular-slider">
              <img src={item.src} alt="imgs" />
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-2">
        <div className="p-4 p-div-grid">
          <img src="/images/discount.png" alt="imgs" />
          <img src="/images/clock.png" alt="imgs" />
        </div>
        <div className="overflow-auto">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {product.map((item, index) => (
              <SwiperSlide key={index}>
                <Papularitem2 {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="banners">
        {banners.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="imgs" />
          </div>
        ))}
      </div>
    </>
  );
}
