import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const footerText = [
  {
    title: "پشتیبانی",
    desc1: "از شنبه تا چهارشنبه ۸ تا ۲۱",
    desc2: "پنجشنبه‌ها ۸ تا ۱۴",
    src: "/images/qq.png",
  },
  {
    title: "جت مثبت سبز",
    desc1: "ارسال ۳ ساعته",
    desc2: "ویژه شهر تهران",
    src: "/images/ww.png",
  },
  {
    title: "اصالت کالا",
    desc1: "ضمانت اصالت",
    desc2: "محصولات مثبت سبز",
    src: "/images/ee.png",
  },
  {
    title: "مشاوره رایگان",
    desc1: "مشاوره تخصصی",
    desc2: "با پزشکان مثبت سبز",
    src: "/images/rr.png",
  },
];
const quickAccessLinks = [
  "روش های ارسال",
  "راهنمای خرید و پیگیری",
  "مجوز ها و پروانه ها",
  "قوانین و مقررات",
  "نسخه آنلاین",
];

const siteLinks = [
  "تبلیغات در سایت نعمان",
  "برند ها در سایت نعمان",
  "مجله سایت نعمان",
  "درباره سایت نعمان",
];
const AboutFooter =
  "داروخانه آنلاین نعمان حمیدی به عنوان پر ورودی ترین و اولین داروخانه اینترنتی از دی ماه 1399 فعالیت خودرا با هدف ارائه اقلام غیر دارویی و فروش اینترنتی داروهای بدون نیاز به نسخه با مجوز رسمی از وزارت بهداشتو تحت نظر سازمان غذا و دارو آغاز نموده است.";

const contactInfo = [
  {
    icon: <AddLocationOutlinedIcon className="green-icon" />,
    text: "تهران رسالت",
  },
  {
    icon: <PhoneCallbackOutlinedIcon className="green-icon" />,
    text: "021-00000000",
  },
  {
    icon: <MarkEmailReadOutlinedIcon className="green-icon" />,
    text: "info@gmail.com",
  },
];

const socialIcons = [
  { icon: <InstagramIcon />, className: "icon-footer-div" },
  { icon: <YouTubeIcon />, className: "icon-footer-div" },
  { icon: <LinkedInIcon />, className: "icon-footer-div" },
  { icon: <FacebookIcon />, className: "icon-footer-div" },
];
export { footerText, quickAccessLinks, siteLinks, AboutFooter, contactInfo, socialIcons };
