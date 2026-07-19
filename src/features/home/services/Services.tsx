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
<div   className="
  relative
  w-[170px]
  h-[198px]
  mx-auto
  "
  style={{
    filter: "drop-shadow(0 0 30px rgba(255,255,255,.04))",
  }}>

  {/* SVG */}
  <svg
  viewBox="0 0 184 201"
  className="absolute inset-0 w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient
      id="paint_linear"
      x1="92"
      y1="42.5"
      x2="92"
      y2="201"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="white" stopOpacity="0" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
  </defs>

  <path
    d="M16.0596 0.5L167.94 0.5C177.575 0.5 184.875 9.19601 183.206 18.6846L153.485 187.685C152.182 195.095 145.744 200.5 138.22 200.5L45.7803 200.5C38.2557 200.5 31.818 195.095 30.5146 187.685L0.793945 18.6846C-0.874695 9.19602 6.4254 0.5 16.0596 0.5Z"
    fill="white"
    fillOpacity="0.65"
    stroke="url(#paint_linear)"
  />
</svg>
<div
  className="
  absolute
  inset-0
  rounded-[18px]
  bg-white/10
  blur-2xl
  opacity-30
  -z-10
  "
/>

    <div
    className="
    absolute
    inset-0
    z-10
    flex
    flex-col
    justify-center
    items-center
    "
    >

    <FaPencilRuler
      className="
      text-[28px]
      text-[#183B40]
      mb-4
      "
    />

    <h3
      className="
      text-[29px]
      font-black
      leading-none
      text-[#183B40]
      "
    >
        خدمات
    </h3>

    <span
      className="
      mt-3
      text-[13px]
      tracking-[5px]
      uppercase
      font-semibold
      text-white
      "
    >
        Services
    </span>

</div>

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