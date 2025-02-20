"use client";
import "./nav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import NavMenu from "../navMenu/NavMenu";
import menuItems from "./Text";
export default function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          {menuItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p>
                {item.title}
                {item.subMenu && <ArrowDropDownIcon />}
              </p>
              {hoveredIndex === index && item.subMenu && (
                <NavMenu
                  title1={item.subMenu[0]}
                  title2={item.subMenu[1]}
                  title3={item.subMenu[2]}
                  title4={item.subMenu[3]}
                  title5={item.subMenu[4]}
                />
              )}
            </div>
          ))}
          <button className="btn-nav btn-nav1">مجله سلامت</button>
        </div>
      </div>
    </>
  );
}
