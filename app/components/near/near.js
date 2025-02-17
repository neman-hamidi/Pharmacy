import "./near.css";

import NearText from "./Text";
export default function Near() {
  return (
    <>
      <div className="row near p-3">
        <div className="col-3 d-flex align-items-center gap-3">
          <div>
            <img src="/images/zod.png" alt="s" />
          </div>
          <p className="fs-4">زود مصرف ها</p>
        </div>
        <div className="col-6 d-grid-zor pe-5">
          {NearText.map((item, index) => (
            <div key={index} className="div-zod-img">
              <img src={item.src} alt="imgs" />
              <div className="discount-2">{item.discount}</div>
            </div>
          ))}
        </div>
        <div className="col-3 justify-content-center d-flex">
          <button className="btn btn-info">مشاهده بیشتر</button>
        </div>
      </div>
    </>
  );
}
