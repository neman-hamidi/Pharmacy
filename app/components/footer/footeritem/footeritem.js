import "./footeritem.css";
export default function footeritem({ children, title, desc1, desc2 }) {
  return (
    <div>
      <div className="footeritem">
        <div className="img-footer">{children}</div>
        <div>
          <p>{title}</p>
          <p className="text-secondary py-2">{desc1}</p>
          <p className="text-secondary">{desc2}</p>
        </div>
      </div>
    </div>
  );
}
