import "./specialDestination.css";
import { specialItems, divDesItems } from "./Text";
export default function specialDestination() {
  return (
    <div>
      <div className="special-div">
        {specialItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgSrc} alt="imgs" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="div-des">
        {divDesItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgSrc} alt="imgs" />
          </div>
        ))}
      </div>
    </div>
  );
}
