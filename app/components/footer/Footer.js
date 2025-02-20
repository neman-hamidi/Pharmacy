import "./footer.css";

import {
  footerText,
  quickAccessLinks,
  siteLinks,
  AboutFooter,
  contactInfo,
  socialIcons,
} from "./Text";
import Footeritem from "./footeritem/footeritem";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        {footerText.map((item, index) => (
          <Footeritem key={index} {...item} />
        ))}
      </div>
      <hr />
      <div className="under-footer">
        <div className="pe-3 text-justify">
          <img src="/images/Neman.webp" alt="img-logo" />
          <p className="text-secondary">{AboutFooter}</p>
        </div>
        <div className="under-footer-div">
          <h6 className="text-secondary pb-2 text-xl">دسترسی سریع</h6>
          {quickAccessLinks.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
        <div className="under-footer-div">
          {siteLinks.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
        <div>
          <h3 className="text-secondary pb-4">ارتباط با ما</h3>
          {contactInfo.map((item, index) => (
            <p key={index} className="text-secondary lh-icon">
              {item.icon} {item.text}
            </p>
          ))}
          <div className="div-footer-icons">
            {socialIcons.map((social, index) => (
              <div key={index} className={social.className}>
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-secondary pt-3">
        کلیه حقوق نزد این سایت محفوظ است.
      </p>
    </footer>
  );
}
