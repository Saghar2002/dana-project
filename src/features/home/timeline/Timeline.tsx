import { FiArrowLeft } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const stages = [
  { title: "نیازسنجی دقیق", image: "/images/timeline-1.png" },
  { title: "طراحی مفهومی", image: "/images/timeline-2.png" },
  { title: "توسعه فنی", image: "/images/timeline-3.png" },
  { title: "تست نهایی", image: "/images/timeline-4.png" },
  { title: "استقرار عملیاتی", image: "/images/timeline-5.png" },
];

const Timeline = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 text-[#1a3b41]" dir="rtl">
      <Container>
        <div className="mb-14 flex items-center gap-4">
          <span className="h-10 w-px bg-[#529553]" />
          <div>
            <h2 className="font-heading text-2xl font-black">تایم‌لاین پروژه</h2>
            <p className="mt-1 text-sm font-semibold text-[#1a3b41]/35">Project timeline</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {stages.map(({ title, image }, index) => (
            <div key={title} className="relative">
              <article className="relative h-40 overflow-hidden rounded-xl bg-[#1a3b41]">
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-[#1a3b41]/20 backdrop-blur-[2px]" />
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-[#1a3b41]/35 px-3 py-3 text-center text-white">
                  <h3 className="font-heading text-xl font-black">{title}</h3>
                </div>
              </article>
              {index < stages.length - 1 && (
                <span className="absolute -left-7 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-lg bg-[#ffb22c] text-[#1a3b41] xl:grid">
                  <FiArrowLeft className="text-lg" />
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
