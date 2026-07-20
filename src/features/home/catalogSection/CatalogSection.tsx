import Container from "../../../components/common/container/Container";

const cards = [
  {
    title: "کاتالوگ شرکت دانا",
    subtitle: "Dana Software catalogue",
    image: "/images/catalog-bg.png",
    primary: "مشاهده",
    secondary: "دانلود",
    reverse: true,
  },
  {
    title: "درخواست مشاوره",
    subtitle: "Request for advice",
    image: "/images/request-advice.png",
    primary: "درخواست مشاوره",
    secondary: "تماس با ما",
    reverse: false,
  },
];

const CatalogSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24" dir="rtl">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">

          {cards.map((card) => (
            <article
              key={card.title}
              className="relative h-[260px] overflow-hidden rounded-[22px]"
            >

              {/* تصویر کناره */}
              <img
                src={card.image}
                alt=""
                className={`
                absolute top-0 h-full w-[45%] object-cover
                rounded-[22px]
                blur-[1.5px]
                scale-[1.02]
                opacity-90
                z-0
                ${card.reverse ? "right-0" : "left-0"}
                `}
              />


              {/* پنل سفید وسط */}
              <div
                className={`
                absolute top-[%5] h-[95%] w-[75%]
                rounded-[22px] bg-white px-8
                flex flex-col justify-center
                shadow-sm
                z-20

                ${card.reverse ? "left-0" : "right-0"}
                `}
              >

                <h2 className="text-xl font-black text-[#173b40]">
                  {card.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#173b40]/30">
                  {card.subtitle}
                </p>


                <div className="mt-6 flex gap-2">

  {card.reverse ? (
    <>
      {/* مشاهده */}
      <button
        className="
          flex h-[50px] w-[150px] items-center justify-center
          rounded-xl
          bg-[#f1f3f3]
          text-[14px]
          font-bold
          text-[#173b40]
          transition-all
          duration-300
          hover:bg-[#e7eaea]
        "
      >
        مشاهده
      </button>

      {/* دانلود */}
      <button
        className="
          flex h-[50px] w-[150px] items-center justify-center
          rounded-xl
          bg-[#00665d]
          text-[14px]
          font-bold
          text-white
          transition-all
          duration-300
          hover:bg-[#00564e]
        "
      >
        دانلود
      </button>
    </>
  ) : (
    <>
      <>
  {/* درخواست مشاوره */}
  <button
    className="
      flex h-[50px] w-[150px] items-center justify-center
      rounded-xl
      bg-[#f7b900]
      text-[14px]
      font-bold
      text-[#173b40]
      transition-all
      duration-300
      hover:bg-[#e5ad00]
    "
  >
    درخواست مشاوره
  </button>

  {/* تماس با ما */}
  <button
    className="
      flex h-[50px] w-[150px] items-center justify-center
      rounded-xl
      bg-[#f1f3f3]
      text-[14px]
      font-bold
      text-[#173b40]
      transition-all
      duration-300
      hover:bg-[#e7eaea]
    "
  >
    تماس با ما
  </button>
</>
    </>
  )}

</div>

              </div>



              {/* شکل هندسی وسط */}
              <span
                className={`
                absolute
                z-10
                top-1/2
                -translate-y-1/2

                h-[66px] w-[110px]
                rounded-[22px]

                ${
                card.reverse
                ? "right-[22%] translate-x-1/2 bg-[#27A79E]"
                : "left-[22%] -translate-x-1/2 bg-[#F6B300]"
                }
                `}
              />


              {/* خطوط محو گوشه */}
              <span
                className={`
                absolute top-0
                h-20 w-20
                border
                border-[#ffffff55]
                opacity-40
                ${
                  card.reverse
                  ? "right-0 rounded-bl-[40px]"
                  : "left-0 rounded-br-[40px]"
                }
                `}
              />

            </article>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default CatalogSection;