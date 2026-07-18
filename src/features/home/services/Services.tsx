import { FaPencilRuler } from "react-icons/fa";  // این رو اضافه کن
import { FiArrowUpLeft } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const services = [
  { title: "تولید نرم‌افزار سفارشی", image: "/images/services/custom-software.png" },
  { title: "طراحی و توسعه وب‌اپلیکیشن‌ها", image: "/images/services/web-app.png" },
  { title: "طراحی و توسعه اپلیکیشن‌های موبایل", image: "/images/services/mobile-app.png" },
  { title: "هوش مصنوعی و یادگیری ماشین", image: "/images/services/ai.png" },
  { title: " اتوماسیون سازمانی(ERP/CRM/HRM)", image: "/images/services/automation.png" },
  { title: "اینترنت اشیا و سیستم‌های هوشمند", image: "/images/services/iot.png" },
];

const Services = () => {
  return (
    <section id="services" className=" py-20" dir="rtl">
      <Container>
        <div className="relative z-10 mx-auto -mb-32 h-[201px] w-[184px] text-center">
  
  {/* SVG با شکل اصلی */}
  <svg 
    viewBox="0 0 184 201" 
    className="absolute inset-0 h-full w-full" 
    aria-hidden="true"
  >
    <defs>
      {/* گرادینت برای حاشیه */}
      <linearGradient 
        id="services-title-border" 
        x1="0" 
        y1="0" 
        x2="184" 
        y2="201" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffffff" stopOpacity="0.7" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0.08" />
      </linearGradient>
      
      {/* کلیپ برای حذف ۱ سانت پایین */}
      <clipPath id="bottom-gap">
        <path d="M16.0596 0.5 L167.94 0.5 C177.575 0.5 184.875 9.19601 183.206 18.6846 L153.485 187.685 C152.182 195.095 145.744 200.5 138.22 200.5 L45.7803 200.5 C38.2557 200.5 31.818 195.095 30.5146 187.685 L0.793945 18.6846 C-0.874695 9.19602 6.4254 0.5 16.0596 0.5 Z" />
        {/* حذف ۱ سانت از پایین (حدود ۱۰px از عرض ۱۸۴px) */}
        <rect x="45%" y="190" width="10%" height="15" />
      </clipPath>
    </defs>
    
    {/* شکل اصلی با افکت شیشه‌ای و کدری بیشتر */}
    <path 
      d="M16.0596 0.5 L167.94 0.5 C177.575 0.5 184.875 9.19601 183.206 18.6846 L153.485 187.685 C152.182 195.095 145.744 200.5 138.22 200.5 L45.7803 200.5 C38.2557 200.5 31.818 195.095 30.5146 187.685 L0.793945 18.6846 C-0.874695 9.19602 6.4254 0.5 16.0596 0.5 Z"
      fill="rgba(255, 255, 255, 0.2)"
      style={{
        backdropFilter: 'blur(80px)',
        WebkitBackdropFilter: 'blur(60px)',
      }}
    />
    
    {/* حاشیه سفید با گرادینت */}
    <path 
      d="M16.0596 0.5 L167.94 0.5 C177.575 0.5 184.875 9.19601 183.206 18.6846 L153.485 187.685 C152.182 195.095 145.744 200.5 138.22 200.5 L45.7803 200.5 C38.2557 200.5 31.818 195.095 30.5146 187.685 L0.793945 18.6846 C-0.874695 9.19602 6.4254 0.5 16.0596 0.5 Z"
      fill="none"
      stroke="url(#services-title-border)"
      strokeWidth="2"
      clipPath="url(#bottom-gap)"
    />
    
    {/* حاشیه ضخیم‌تر برای جلوه بیشتر */}
    <path 
      d="M16.0596 0.5 L167.94 0.5 C177.575 0.5 184.875 9.19601 183.206 18.6846 L153.485 187.685 C152.182 195.095 145.744 200.5 138.22 200.5 L45.7803 200.5 C38.2557 200.5 31.818 195.095 30.5146 187.685 L0.793945 18.6846 C-0.874695 9.19602 6.4254 0.5 16.0596 0.5 Z"
      fill="none"
      stroke="rgba(255, 255, 255, 0.15)"
      strokeWidth="6"
      clipPath="url(#bottom-gap)"
    />
  </svg>
  
  {/* محتوای داخل شکل */}
  <div className="absolute inset-x-0 top-[52px] flex flex-col items-center z-10">
    <FaPencilRuler className="mb-3 text-2xl text-[#1a3b41]" />
    <h2 className="font-heading text-2xl text-[#1a3b41] font-black">خدمات</h2>
    <span className="mt-1 text-xs font-semibold text-white/70">Services</span>
  </div>
</div>

        <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, image }) => (
            <a key={title} href="#contact" className="group relative isolate min-h-[520px] overflow-hidden bg-[#1a3b41]">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#1a3b41] via-[#1a3b41]/20 to-transparent" />
              <span className="absolute inset-0 bg-[#1a3b41]/10 transition group-hover:bg-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <strong className="font-heading text-lg font-bold">{title}</strong>
                <FiArrowUpLeft className="shrink-0 text-xl text-[#ffb22c]" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;