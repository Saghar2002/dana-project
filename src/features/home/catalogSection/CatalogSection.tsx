import { FiDownload, FiFileText, FiMessageCircle } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const cards = [
  {
    title: "کاتـالـــوگ شرکت دانا",
    subtitle: "Dana Software catalogue",
    image: "/images/catalog-bg.png",
    icon: FiFileText,
    primary: "مشاهده",
    secondary: "دانلود",
    href: "https://danasoftco.com/wp-content/uploads/2025/12/dana-cataloge.pdf",
  },
  {
    title: "درخواست مشاوره",
    subtitle: "Request for advice",
    image: "/images/request-advice.png",
    icon: FiMessageCircle,
    primary: "درخواست مشاوره",
    secondary: "تماس با ما",
    href: "#contact",
  },
];

const CatalogSection = () => {
  return (
    <section className="bg-[#f5f5f5] pb-24 pt-10" dir="rtl">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {cards.map(({ title, subtitle, image, icon: Icon, primary, secondary, href }, index) => (
            <article key={title} className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#1a3b41]">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
              <span className={`absolute inset-0 ${index === 0 ? "bg-[#1a3b41]/20" : "bg-[#01655d]/25"}`} />
              <div className={`absolute inset-y-0 ${index === 0 ? "right-0" : "left-0"} flex w-[70%] flex-col justify-center bg-white/90 px-8 py-8 backdrop-blur-md sm:w-[62%]`}>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#ffb22c] text-xl text-[#1a3b41]"><Icon /></span>
                <h2 className="font-heading text-xl font-black text-[#1a3b41]">{title}</h2>
                <p className="mt-2 text-sm font-semibold text-[#1a3b41]/45">{subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href={href} className="rounded-lg bg-[#ffb22c] px-4 py-2 text-sm font-bold text-[#1a3b41]">{primary}</a>
                  <a href={href} className="flex items-center gap-1 rounded-lg bg-[#1a3b41]/10 px-4 py-2 text-sm font-bold text-[#1a3b41]">
                    {secondary} {index === 0 && <FiDownload />}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CatalogSection;
