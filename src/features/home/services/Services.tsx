import { FiArrowUpLeft, FiCpu, FiGlobe, FiGrid, FiMonitor, FiSettings } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const services = [
  { title: "تولید نرم‌افزار سفارشی", image: "/images/services/custom-software.png", icon: FiSettings },
  { title: "طراحی و توسعه وب‌اپلیکیشن‌ها", image: "/images/services/web-app.png", icon: FiGlobe },
  { title: "طراحی و توسعه اپلیکیشن‌های موبایل", image: "/images/services/mobile-app.png", icon: FiMonitor },
  { title: "هوش مصنوعی و یادگیری ماشین", image: "/images/services/ai.png", icon: FiCpu },
  { title: " اتوماسیون سازمانی(ERP/CRM/HRM)", image: "/images/services/automation.png", icon: FiGrid },
  { title: "اینترنت اشیا و سیستم‌های هوشمند", image: "/images/services/iot.png", icon: FiCpu },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f5f5f5] py-20 text-[#1a3b41]" dir="rtl">
      <Container>
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-[#529553]">راهکارهای ما</span>
          <h2 className="font-heading mt-3 text-2xl font-black">خدمات تخصصی دانا</h2>
          <p className="mt-3 text-sm leading-6 text-[#1a3b41]/60">راهکارهای نرم‌افزاری متناسب با نیاز کسب‌وکار شما</p>
        </div>

        <div className="grid overflow-hidden rounded-2xl sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, image, icon: Icon }) => (
            <a key={title} href="#contact" className="group relative isolate min-h-[360px] overflow-hidden bg-[#1a3b41]">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#1a3b41] via-[#1a3b41]/20 to-transparent" />
              <span className="absolute inset-0 bg-[#1a3b41]/10 transition group-hover:bg-transparent" />
              {/* <span className="absolute left-1/2 top-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-xl bg-[#ffb22c] text-2xl text-[#1a3b41] transition group-hover:-translate-y-1">
                <Icon />
              </span> */}
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