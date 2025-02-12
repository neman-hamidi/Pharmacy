import "./berand.css";
import products from "./Text";
import Papularitem2 from "../papularitem2/Papularitem2";
const Berands = () => (
  <>
    <div className="name-berand">
      <h3 className="pb-2">برند محبوب بلفاند</h3>
      <div className="under-berand"></div>
    </div>
    <div className="main-berand mb-4">
      <div className="d-flex justify-content-start align-items-center">
        <img src="/images/Belphamed.png" alt="img" />
      </div>
      <div className="berand">
        {products.slice(0, 5).map((product, index) => (
          <Papularitem2 key={index} {...product} />
        ))}
      </div>
    </div>

    <div className="name-berand">
      <p className="pb-2">برند محبوب سرینا</p>
      <div className="under-berand"></div>
    </div>
    <section className="main-berand">
      <div className="d-flex justify-content-start align-items-center">
        <img src="/images/15.png" alt="img" />
      </div>
      <div className="berand">
        {products.slice(5).map((product, index) => (
          <Papularitem2 key={index} {...product} />
        ))}
      </div>
    </section>
  </>
);
export default Berands;
