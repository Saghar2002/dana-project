import { FiArrowDown, FiArrowLeft } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

type TimelineStage = {
  title: string;
  image: string;
};

type TimelineCardProps = {
  stage: TimelineStage;
};

const stages: TimelineStage[] = [
  { title: "نیازسنجی\nدقیق", image: "/images/timeline-1.png" },
  { title: "طراحی\nمفهومی", image: "/images/timeline-2.png" },
  { title: "توسعه\nفنی", image: "/images/timeline-3.png" },
  { title: "تست\nنهایی", image: "/images/timeline-4.png" },
  { title: "استقرار\nعملیاتی", image: "/images/timeline-5.png" },
];

const TimelineCard = ({ stage }: TimelineCardProps) => (
  <article className="relative h-[102px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${stage.image})` }}>
    <span className="absolute inset-0 bg-[#18363d]/25 backdrop-blur-[0.5px]" />
    <div className="absolute inset-2 flex items-center rounded-lg bg-[#18363d]/20 px-5 backdrop-blur-[0.5px]">
      <h3 className="font-heading whitespace-pre-line text-right text-[18px] font-black leading-8 text-white">{stage.title}</h3>
    </div>
  </article>
);

const Timeline = () => {
  return (
    <section className="bg-[#f8f8f8] pb-8 pt-12 sm:py-20 lg:py-24" dir="rtl">
      <Container>
        <div className="mb-10 flex items-center gap-4 sm:mb-16">
          <span className="h-12 w-[2px] bg-[#5c9b59]" />
          <div>
            <h2 className="font-heading text-2xl font-black text-[#18363d] sm:text-3xl">تایم‌لاین پروژه</h2>
            <p className="text-sm font-semibold text-gray-400">Project timeline</p>
          </div>
        </div>

        <div className="relative rounded-2xl bg-[#eef3ef] p-3 sm:p-5">
          <div className="hidden xl:flex">
            {stages.map((stage, index) => (
              <div key={stage.image} className="relative flex-1">
                <TimelineCard stage={stage} />
                {index < stages.length - 1 && (
                  <span className="absolute -left-4 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg bg-[#ffb22c] text-[#18363d]">
                    <FiArrowLeft className="text-sm" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:hidden">
            {stages.map((stage, index) => (
              <div key={stage.image} className="relative">
                <TimelineCard stage={stage} />
                {index < stages.length - 1 && <FiArrowDown className="mx-auto -mb-1 mt-2 text-xl text-[#ffb22c] sm:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
