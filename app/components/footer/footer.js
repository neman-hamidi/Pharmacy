import "./footer.css";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import Footeritem from "./footeritem/footeritem";
export default function footer() {
  return (
    <div>
      <div className="footer">
        <Footeritem
          title="پشتیبانی"
          desc1="از شنبه تا چهارشنبه ۸ تا ۲۱"
          desc2="پنجشنبه‌ها ۸ تا ۱۴"
        >
          <img src="/images/qq.png" alt="" />
        </Footeritem>

        <Footeritem
          title="جت مثبت سبز"
          desc1="ارسال ۳ ساعته"
          desc2="ویژه شهر تهران"
        >
          <img src="/images/ww.png" alt="" />
        </Footeritem>

        <Footeritem
          title="اصالت کالا"
          desc1="ضمانت اصالت"
          desc2="محصولات مثبت سبز"
        >
          <img src="/images/ee.png" alt="" />
        </Footeritem>

        <Footeritem
          title="مشاوره رایگان"
          desc1="مشاوره تخصصی"
          desc2="با پزشکان مثبت سبز"
        >
          <img src="/images/rr.png" alt="" />
        </Footeritem>
      </div>
      <hr />
      <div className="under-footer">
        <div className="pe-3 text-justify">
          <img src="/images/Neman.webp" alt="" />
          <p className="text-secondary">
            داروخانه آنلاین نعمان حمیدی به عنوان پر ورودی ترین و اولین داروخانه
            اینترنتی از دی ماه 1399 فعالیت خودرا با هدف ارائه اقلام غیر دارویی و
            فروش اینترنتی داروهای بدون نیاز به نسخه با مجوز رسمی از وزارت بهداشت
            و تحت نظر سازمان غذا و دارو آغاز نموده است.
          </p>
        </div>
        <div className="under-footer-div">
          <h6 className="text-secondary pb-2">دسترسی سریع</h6>
          <p>روش های ارسال</p>
          <p>راهنمای خرید و پیگیری</p>
          <p>مجوز ها و پروانه ها</p>
          <p>قوانین و مقررات</p>
          <p>نسخه آنلاین</p>
        </div>
        <div className="under-footer-div">
          <p>تبلیغات در سایت نعمان</p>
          <p>برند ها در سایت نعمان</p>
          <p>مجله سایت نعمان</p>
          <p>درباره سایت نعمان</p>
        </div>
        <div>
          <p className="text-secondary pb-4">ارتباط با ما</p>
          <p className="text-secondary lh-icon">
            <AddLocationOutlinedIcon className="green-icon" />
            تهران رسالت
          </p>
          <p className="text-secondary lh-icon">
            <PhoneCallbackOutlinedIcon className="green-icon" /> 021-00000000
          </p>
          <p className="text-secondary lh-icon">
            <MarkEmailReadOutlinedIcon className="green-icon" />
            info@gmail.com
          </p>
          <div className="div-footer-icons">
            <div className="icon-footer-div">
              <InstagramIcon />
            </div>
            <div className="icon-footer-div">
              <YouTubeIcon />
            </div>
            <div className="icon-footer-div">
              <LinkedInIcon />
            </div>
            <div className="icon-footer-div">
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-secondary pt-3">کلیه حقوق نزد این سایت محفوظ است.</p>
    </div>
  );
}
