import { FiArrowLeft } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const stages = [
  { title: "نیازسنجی\nدقیق", image: "/images/timeline-1.png" },
  { title: "طراحی\nمفهومی", image: "/images/timeline-2.png" },
  { title: "توسعه\nفنی", image: "/images/timeline-3.png" },
  { title: "تست\nنهایی", image: "/images/timeline-4.png" },
  { title: "استقرار\nعملیاتی", image: "/images/timeline-5.png" },
];

const Timeline = () => {
  return (
    <section   dir="rtl"
 className="py-24 bg-[#f8f8f8]">
      <Container>
        {/* Heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="w-[2px] h-12 bg-[#5C9B59]" />

          <div>
            <h2 className="font-heading text-3xl font-black text-[#18363d]">
              تایم‌لاین پروژه
            </h2>

            <p className="text-sm text-gray-400 font-semibold">
              Project timeline
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative py-5">

  <div className="absolute inset-y-0 left-2 right-2 rounded-2xl bg-[#EEF3EF]" />

  <div className="relative hidden xl:flex">

    {stages.map((item, index) => (
      <div key={index} className="relative flex-1">

        <article
          className="relative h-[102px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#18363d]/25 backdrop-blur-[0.5px]" />

          {/* Content */}
          <div
            className="
              absolute
              inset-y-2
              right-2
              left-2
              z-10
              flex
              items-center
              justify-start
              rounded-lg
              bg-[#18363d]/20
              backdrop-blur-[0.5px]
              px-5
            "
          >
            <h3 className="font-heading whitespace-pre-line text-right text-[18px] font-black leading-8 text-white">
              {item.title}
            </h3>
          </div>

          {index !== stages.length - 1 && (
            <span
              className="
                absolute
                -left-4
                top-1/2
                z-20
                flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-lg
                bg-[#ffb22c]
                text-[#18363d]
              "
            >
              <FiArrowLeft className="text-sm" />
            </span>
          )}
        </article>

      </div>
    ))}

  </div>

</div>
      </Container>
    </section>
  );
};

export default Timeline;