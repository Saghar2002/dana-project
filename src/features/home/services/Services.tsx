import {
  FaBrain,
  FaBuilding,
  FaPaintbrush,
  FaPenRuler,
  FaSitemap,
  FaTowerBroadcast,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { FiArrowUp } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

type Service = {
  title: string;
  subtitle: string;
  image: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "تولید نرم‌افزار سفارشی",
    subtitle: "راهکارهای اختصاصی نرم‌افزاری برای نیازهای دقیق شما",
    image: "/images/services/custom-software.png",
    icon: FaPaintbrush,
  },
  {
    title: "طراحی و توسعه وب‌اپلیکیشن‌ها",
    subtitle: "وب‌اپلیکیشن‌های مدرن، سریع و امن برای کسب‌وکارها",
    image: "/images/services/web-app.png",
    icon: FaBuilding,
  },
  {
    title: "طراحی و توسعه اپلیکیشن‌های موبایل",
    subtitle: "اپلیکیشن‌های موبایل کارآمد با تجربه کاربری روان",
    image: "/images/services/mobile-app.png",
    icon: FaBuilding,
  },
  {
    title: "هوش مصنوعی و یادگیری ماشین",
    subtitle: "مدل‌های هوش مصنوعی برای تحلیل و تصمیم‌گیری",
    image: "/images/services/ai.png",
    icon: FaBrain,
  },
  {
    title: "اتوماسیون سازمانی (ERP / CRM / HRM)",
    subtitle: "راهکارهای اتوماسیون سازمانی برای بهبود مدیریت فرایندها",
    image: "/images/services/automation.png",
    icon: FaSitemap,
  },
  {
    title: "اینترنت اشیا و سیستم‌های هوشمند",
    subtitle: "راهکارهای IoT هوشمند برای نظارت و مدیریت",
    image: "/images/services/iot.png",
    icon: FaTowerBroadcast,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20" dir="rtl">
      <Container>
        <div className="relative z-10 mx-auto -mb-32 h-[201px] w-[184px] text-center">
          <div
            className="relative mx-auto h-[198px] w-[170px]"
            style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,.04))" }}
          >
            <svg viewBox="0 0 184 201" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="services-title-border" x1="92" y1="42.5" x2="92" y2="201" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
              <path
                d="M16.0596 0.5L167.94 0.5C177.575 0.5 184.875 9.19601 183.206 18.6846L153.485 187.685C152.182 195.095 145.744 200.5 138.22 200.5L45.7803 200.5C38.2557 200.5 31.818 195.095 30.5146 187.685L0.793945 18.6846C-0.874695 9.19602 6.4254 0.5 16.0596 0.5Z"
                fill="white"
                fillOpacity="0.5"
                stroke="url(#services-title-border)"
              />
            </svg>
            <div className="absolute inset-0 -z-10 rounded-[18px] bg-white/10 opacity-30 blur-2xl" />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
              <FaPenRuler className="mb-4 text-[28px] text-[#183b40]" />
              <h3 className="font-heading text-[29px] font-black leading-none text-[#183b40]">خدمات</h3>
              <span className="mt-3 text-[13px] font-semibold uppercase tracking-[5px] text-white">Services</span>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, subtitle, image}) => (
            <a key={title} href="#contact" className="group relative isolate grid h-[520px] grid-rows-[1fr_auto] overflow-hidden bg-[#1a3b41]">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a3b41]/5 to-[#1a3b41]/80 transition-all duration-200 group-hover:via-[#1a3b41]/20 group-hover:to-[#1a3b41]/90" />

              <span className="z-10 m-[14px] flex h-full flex-col items-center justify-end rounded-lg border border-transparent px-4 pb-20 text-center transition-all duration-200 group-hover:border-white/50 group-hover:pb-[70px]">
                
                <strong className="font-heading text-xl font-extrabold text-white">{title}</strong>
              </span>

              <span className="relative z-10 h-0 overflow-visible px-[14px] transition-[height] duration-200 group-hover:h-[124px]">
                <span className="absolute -top-14 left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center transition-transform duration-200 group-hover:-translate-y-1">
                  <span className="absolute inset-0 bg-white/25 [clip-path:polygon(50%_0%,100%_20%,100%_80%,50%_100%,0%_80%,0%_20%)] transition-all duration-200 group-hover:translate-y-1 group-hover:bg-[#ffb22c]" />
                  <FiArrowUp className="relative text-lg text-[#1a3b41]" />
                </span>
                <span className="absolute inset-x-[14px] bottom-0 z-0 h-[90px] translate-y-6 bg-white opacity-0 [clip-path:polygon(100%_89%,99%_96%,95%_100%,5%_100%,1%_96%,0%_89%,0%_11%,1%_4%,5%_0%,95%_0%,99%_4%,100%_11%)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100" />
                <span className="relative z-10 flex h-full translate-y-3 items-end justify-center px-8 pb-8 text-center text-sm leading-6 text-[#1a3b41] opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">{subtitle}</span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
