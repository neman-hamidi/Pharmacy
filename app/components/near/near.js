import "./near.css"
export default function near() {
  return (
    <div>
        <div className="row near p-3">
            <div className="col-3 d-flex align-items-center gap-3">
                <div>
                    <img src="/images/zod.png" alt="s" />
                </div>
                <p className="fs-4">زود مصرف ها</p>
            </div>
            <div className="col-6 d-grid-zor pe-5">
                <div className="div-zod-img">
                    <img src="/images/4.png" alt="s" />
                    <div className="discount-2">30%-</div>
                </div>
                <div className="div-zod-img">
                    <img src="/images/2.png" alt="s" />
                    <div className="discount-2">33%-</div>
                </div>
                <div className="div-zod-img">
                    <img src="/images/1.png" alt="s" />
                    <div className="discount-2">21%-</div>
                </div>
                <div className="div-zod-img">
                    <img src="/images/3.png" alt="s" />
                    <div className="discount-2">5%-</div>
                </div>
                <div className="div-zod-img">
                    <img src="/images/5.png" alt="s" />
                    <div className="discount-2">17%-</div>
                </div>
            </div>
            <div className="col-3 justify-content-center d-flex">
                <button className="btn btn-info">مشاهده بیشتر</button>
            </div>
        </div>
    </div>
  )
}
