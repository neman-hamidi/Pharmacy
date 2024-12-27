"use client";
import "./papular.css";
import Papularitem2 from "../papularitem2/papularitem2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
export default function papular() {
  return (
    <div>
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
          <SwiperSlide className="papular-slider">
            <img src="/images/maskmo.png" alt="" />
            <p>ماسک مو</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/aghayan.png" alt="" />
            <p>مکمل آقایان</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/atr.png" alt="" />
            <p>عطر و ادکلن</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/banovan.png" alt="" />
            <p>بهداشتی بانوان</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/kodakan.png" alt="" />
            <p>کودکان</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/laghari.png" alt="" />
            <p>قرص لاغری</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/mesvak.png" alt="" />
            <p>مسواک و خمیر دندان</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/mokamel.png" alt="" />
            <p>مکمل ورزشی</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/ostokhan.png" alt="" />
            <p>استخوان و مفاصل</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/shampo.png" alt="" />
            <p>شامپو</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/shoyande.png" alt="" />
            <p>شوینده بهداشتی</p>
          </SwiperSlide>
          <SwiperSlide className="papular-slider">
            <img src="/images/zedlak.png" alt="" />
            <p>ضد لک</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider-2">
        <div className="p-4 p-div-grid">
          <img src="/images/discount.png" alt="" />
          <img src="/images/clock.png" alt="" />
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
            <SwiperSlide>
              <Papularitem2
                desc="لوسیون ضد شپش لایس فری سریتا مناسب انواع مو ۵۰ میلی لیتر"
                fakeprice="148,900"
                realprice="105,700"
                discount="29%-"
              >
                <img src="/images/1.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="کپسول بلودپرکسیر ادیب اکسیر ۶۰ عدد"
                fakeprice="95,000"
                realprice="80,750"
                discount="15%-"
              >
                <img src="/images/2.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="قرص رد جینسینگ پاور مولتی ویتامین و مینرال ویتامین لایف ۳۰ عدد"
                fakeprice="207,000"
                realprice="189,000"
                discount="9%-"
              >
                <img src="/images/3.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="شامپو بدن پسوریازیس سریتا ۲۵۰ میلی لیتر"
                fakeprice="345,000"
                realprice="244,950"
                discount="29%-"
              >
                <img src="/images/4.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="شربت امگا ۳ اترنیویت ۱۵۰ میلی لیتر"
                fakeprice="484,000"
                realprice="449,000"
                discount="7%-"
              >
                <img src="/images/5.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="لوسیون ضد شپش لایس فری سریتا مناسب انواع مو ۵۰ میلی لیتر"
                fakeprice="148,900"
                realprice="105,700"
                discount="29%-"
              >
                <img src="/images/1.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="کپسول بلودپرکسیر ادیب اکسیر ۶۰ عدد"
                fakeprice="95,000"
                realprice="80,750"
                discount="15%-"
              >
                <img src="/images/2.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="قرص رد جینسینگ پاور مولتی ویتامین و مینرال ویتامین لایف ۳۰ عدد"
                fakeprice="207,000"
                realprice="189,000"
                discount="9%-"
              >
                <img src="/images/3.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
            <SwiperSlide>
              <Papularitem2
                desc="شامپو بدن پسوریازیس سریتا ۲۵۰ میلی لیتر"
                fakeprice="345,000"
                realprice="244,950"
                discount="29%-"
              >
                <img src="/images/4.png" alt="" />
              </Papularitem2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="banners">
        <div>
          <img src="/images/banner1.png" alt="" />
        </div>
        <div>
          <img src="/images/banner2.png" alt="" />
        </div>
        <div>
          <img src="/images/banner3.png" alt="" />
        </div>
        <div>
          <img src="/images/banner4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
