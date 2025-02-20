import "./mostSell.css";
import Papularitem2 from "../papularitem2/Papularitem2";
import { ExtraText, namesBerandImgs, TextMostSale } from "./Text";
export default function MostSell() {
  return (
    <div>
      <p className="text-center fs-4 py-3">پرفروش‌ترین های هفته</p>
      <div className="mostSell">
        {TextMostSale.map((item, index) => (
          <Papularitem2 key={index} {...item} />
        ))}
      </div>
      <div className="mostSell2">
        <div>
          <img src="/images/z2.png" alt="imgs" />
        </div>
        <div>
          <img src="/images/z1.png" alt="imgs" />
        </div>
      </div>
      <div className="bg-name-berand">
        <div className="name-berand">
          <p className="pb-2 pt-4">برند محبوب بلفاند</p>
          <div className="under-berand"></div>
        </div>
        <div className="names-berand">
          {namesBerandImgs.slice(0, 6).map((item, index) => (
            <div key={index}>
              <img src={item.src} alt="imgs" />
            </div>
          ))}
        </div>
      </div>
      <div className="div-description">
        {namesBerandImgs.slice(6).map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="imgs" />
          </div>
        ))}
      </div>
      <div className="desc-undersite">
        <h4 className="mb-2">داروخانه آنلاین</h4>
        <p className="text-secondary">{ExtraText}</p>
      </div>
      <div className="text-center">
        <button className="btn btn-info">مشاهده بیشتر</button>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}
