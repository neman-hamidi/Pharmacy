import "./papularitem2.css";
import Image from "next/image";
const Papularitem2 = ({ srcImg, desc, fakeprice, realprice, discount }) => (
  <div className="papularitem2 ms-0 me-0 pb-3">
    <Image src={srcImg} width="240" height="208" alt="img" className="mx-auto" />
    <div>
      <p className="text-secondary">{desc}</p>
    </div>
    <p className="text-center">
      <del className="text-secondary">{fakeprice}تومان</del>
    </p>
    <p className="fw-bold text-center">{realprice}تومان</p>
    <div className="discount-number">{discount}</div>
  </div>
);
export default Papularitem2;
