"use client";
import "./nav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import NavMenu from "../navMenu/navMenu";
export default function nav() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  return (
    <>
      <div>
        <div className="row nav">
          <div className="col-2 img-nav">
            <img src="/images/neman.webp" alt="img-Neman" />
          </div>
          <div className="col-8">
            <div className="search-in-nav">
              <input type="text" placeholder="جستجوی محصولات" />
              <SearchOutlinedIcon className="icon-nav" />
            </div>
          </div>
          <div className="col-3 d-flex">
            <button className="btn-nav">ارسال تیکت پشتیبانی</button>
            <button className="btn-nav mx-1">ورود/ثبت نام</button>
            <button className="basket">
              <ShoppingBasketIcon className="color-icon-nav" />
              <div>0</div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="nav-menu">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>
              پیشنهاد های شگفت انگیز
              <ArrowDropDownIcon />
            </p>
            {isHovered && (
              <NavMenu
                title1="10 درصد تخفیف"
                title2="30درصد تخفیف"
                title3="40درصد تخفیف"
                title4="50دردصد تخفیف"
                title5="بالای 50درصد"
              />
            )}
          </div>

          <div>
            <p>زود مصرف ها</p>
          </div>

          <div
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <p>
              مکمل های رژیم غذایی
              <ArrowDropDownIcon />
            </p>
            {isHovered3 && (
              <NavMenu
                title1="مکمل های کمک درمانی"
                title2="مکمل های گیاهی و طبیعی"
                title3="قرص لاغری"
                title4="ویتامین ها"
                title5="مواد معدنی"
              />
            )}
          </div>

          <div
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <p>
              مکمل بدنسازی
              <ArrowDropDownIcon />
            </p>
            {isHovered4 && (
              <NavMenu
                title1="پروتئین ها"
                title2="آمینو اسید"
                title3="کاهش وزن"
                title4="انرژی زا"
                title5="کراتین"
              />
            )}
          </div>

          <div
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <p>
              مراقبت و پوست و مو
              <ArrowDropDownIcon />
            </p>
            {isHovered5 && (
              <NavMenu
                title1="مراقبت پوست صورت"
                title2="مراقبت از مو"
                title3="شوینده پوست"
                title4="مراقبت از پوست بدن"
                title5="مراقبت از ناخن"
              />
            )}
          </div>
          <div
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <p>
              بهداشتی
              <ArrowDropDownIcon />
            </p>
            {isHovered6 && (
              <NavMenu
                title2="بهداشت عمومی"
                title1="بهداشت بانوان"
                title3="بهداشت دهان و دندان"
                title4="موهای ضد تعریق"
                title5="بهداشت آقایان"
              />
            )}
          </div>

          <div
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            <p>
              آرایشی
              <ArrowDropDownIcon />
            </p>
            {isHovered7 && (
              <NavMenu
                title1="عصر و ادکلن"
                title2="حالت دهنده مو"
                title3="خرید رنگ مو"
                title4="اکسیدان"
                title5="آرایش صورت"
              />
            )}
          </div>

          <div
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            <p>
              مادر و کودک
              <ArrowDropDownIcon />
            </p>
            {isHovered8 && (
              <NavMenu
                title1="مراقبت از پوست کودک"
                title2="مراقبت از کودک"
                title3="لوازم کودک"
                title4="غذای کودک"
                title5="مکمل کودکان"
              />
            )}
          </div>

          <div
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <p>
              تجهیزات پزشکی
              <ArrowDropDownIcon />
            </p>
            {isHovered2 && (
              <NavMenu
                title1="ارتوپدی"
                title2="دستگاه های خانگی"
                title3="ژل/محلول"
                title4="لوازم پزشکی"
                title5="تست های خانگی"
              />
            )}
          </div>

          <div>
            <p>تازه ها</p>
          </div>
          <button className="btn-nav btn-nav1">مجله سلامت</button>
        </div>
      </div>
    </>
  );
}
