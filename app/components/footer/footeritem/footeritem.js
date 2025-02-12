import "./footeritem.css";
import Image from "next/image";
export default function footeritem({ src, title, desc1, desc2 }) {
  return (
    <article className="footeritem">
      <Image src={src} height="80" width="80" alt="img-footer" />
      <div>
        <h3>{title}</h3>
        <p className="text-secondary py-2">{desc1}</p>
        <p className="text-secondary">{desc2}</p>
      </div>
    </article>
  );
}
