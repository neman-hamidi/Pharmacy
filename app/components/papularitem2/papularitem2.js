import "./papularitem2.css";
export default function papularitem2({ children, desc, fakeprice, realprice, discount }) {
  return (
    <div>
      <div className="papularitem2 ms-0 me-0 pb-3">
        <div>
          {children}
        </div>
        <div>
          <p className="text-secondary">{desc}</p>
        </div>
        <p className="text-center"><del className="text-secondary">{fakeprice}تومان</del></p>
        <p className="fw-bold text-center">{realprice}تومان</p>
        <div className="discount-number">{discount}</div>
      </div>
    </div>
  );
}
