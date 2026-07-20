import Container from "../../../components/common/container/Container";

type CatalogCard = {
  title: string;
  subtitle: string;
  image: string;
  primaryLabel: string;
  secondaryLabel: string;
  isReversed: boolean;
};

const cards: CatalogCard[] = [
  {
    title: "کاتالوگ شرکت دانا",
    subtitle: "Dana Software catalogue",
    image: "/images/catalog-bg.png",
    primaryLabel: "مشاهده",
    secondaryLabel: "دانلود",
    isReversed: true,
  },
  {
    title: "درخواست مشاوره",
    subtitle: "Request for advice",
    image: "/images/request-advice.png",
    primaryLabel: "درخواست مشاوره",
    secondaryLabel: "تماس با ما",
    isReversed: false,
  },
];

const CatalogSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24" dir="rtl">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 pb-20">
          {cards.map(({ title, subtitle, image, primaryLabel, secondaryLabel, isReversed }) => (
            <article key={title} className="relative min-h-[250px] overflow-hidden rounded-[22px] sm:h-[260px]">
              <img src={image} alt="" className={`absolute top-0 z-0 h-full w-[45%] scale-[1.02] rounded-[22px] object-cover opacity-90 blur-[1.5px] ${isReversed ? "right-0" : "left-0"}`} />

              <div className={`absolute top-[5%] z-20 flex min-h-[90%] w-[78%] flex-col justify-center rounded-[22px] bg-white px-5 py-7 shadow-sm sm:px-8 ${isReversed ? "left-0" : "right-0"}`}>
                <h2 className="font-heading text-lg font-black text-[#173b40] sm:text-xl">{title}</h2>
                <p className="mt-2 text-xs font-semibold text-[#173b40]/30 sm:text-sm">{subtitle}</p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  <a href={isReversed ? "#catalog" : "#contact"} className={`flex h-11 min-w-[108px] flex-1 items-center justify-center rounded-xl px-3 text-xs font-bold transition sm:h-[50px] sm:min-w-[130px] sm:text-sm ${isReversed ? "bg-[#f1f3f3] text-[#173b40] hover:bg-[#e7eaea]" : "bg-[#ffb22c] text-[#173b40] hover:bg-[#e5ad00]"}`}>
                    {primaryLabel}
                  </a>
                  <a href={isReversed ? "/dana-cataloge.pdf" : "#contact"} className={`flex h-11 min-w-[108px] flex-1 items-center justify-center rounded-xl px-3 text-xs font-bold transition sm:h-[50px] sm:min-w-[130px] sm:text-sm ${isReversed ? "bg-[#00665d] text-white hover:bg-[#00564e]" : "bg-[#f1f3f3] text-[#173b40] hover:bg-[#e7eaea]"}`}>
                    {secondaryLabel}
                  </a>
                </div>
              </div>

              <span className={`absolute top-1/2 z-10 h-[54px] w-[92px] -translate-y-1/2 rounded-[18px] sm:h-[66px] sm:w-[110px] sm:rounded-[22px] ${isReversed ? "right-[22%] translate-x-1/2 bg-[#27a79e]" : "left-[22%] -translate-x-1/2 bg-[#f6b300]"}`} aria-hidden="true" />
              <span className={`absolute top-0 h-20 w-20 border border-white/40 opacity-40 ${isReversed ? "right-0 rounded-bl-[40px]" : "left-0 rounded-br-[40px]"}`} aria-hidden="true" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CatalogSection;
