import "./navMenu.css";
export default function NavMenu({ title1, title2, title3, title4, title5 }) {
  return (
    <div className="navMenu">
      <p>{title1}</p>
      <p>{title2}</p>
      <p>{title3}</p>
      <p>{title4}</p>
      <p>{title5}</p>
    </div>
  );
}
