import Container from "../../../components/common/container/Container";

const posts = [
  {
    title: "چرا پشتیبانی نرم‌افزاری باکیفیت برای کسب‌وکارها حیاتی است؟",
    category: "آموزش و نکات تخصصی",
    image: "/images/blog-01.png",
  },
  {
    title: "آینده نرم‌افزارهای سازمانی در عصر هوش مصنوعی",
    category: "آموزش و نکات تخصصی",
    image: "/images/blog-03.png",
  },
  {
    title: "۵ فناوری مهم که آینده حسابداری را دگرگون می‌کنند",
    category: "فناوری و نوآوری",
    image: "/images/blog-04.png",
  },
];

const Blog = () => {
  const [featuredPost, ...sidePosts] = posts;

  return (
    <section className="blog-background overflow-hidden bg-[#f5f5f5] py-24 text-[#1a3b41]" dir="rtl">
      <Container>
        <div className="grid items-start gap-6 xl:grid-cols-[1fr_1.55fr_1.15fr]">
          <div className="flex min-h-[410px] flex-col justify-center xl:order-1">
            <div className="flex flex-col items-start gap-3">
              <div className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:h-10 before:w-px before:-translate-y-1/2 before:bg-[#529553]">
                <h5 className="font-heading text-3xl font-black">وبلاگ</h5>
                <p className="mt-1 text-sm font-semibold text-[#1a3b41]/35">Weblog</p>
              </div>
            </div>
          </div>

          <article className="group mx-auto w-full max-w-[550px] xl:order-2">
  <a href="#blog" className="block">
    {/* Image */}
    <div className="relative">
      <figure className="overflow-hidden rounded-[28px] border-[3px] border-white">
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="h-[260px] w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
      </figure>

      {/* Category on image */}
     
    </div>

    {/* Content */}
    <div className="relative  -mt-12 px-7 pb-4 z-20">
      {/* White Shape */}
      <span
        className="absolute rounded-[8px] inset-0 block bg-white"
        style={{
          clipPath: "polygon(...)", // 👈 اینجا clip-path خودت
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-7 pt-7">
        
         <span className="absolute -top-3 right-4 z-20 rounded-xl bg-[#ffbf00] px-5 py-2 text-sm font-bold text-[#1a3b41]">
        {featuredPost.category}
      </span>

        <h3 className="mt-3 text-l font-black leading-[1.7]">
          {featuredPost.title}
        </h3>

        <p className="mt-1 mb-14 line-clamp-2 text-lg text-gray-500">
          انتخاب یک نرم افزار مناسب تنها نیمی از مسیر موفقیت...
        </p>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <div className="rounded-t-[24px] bg-[#0e7d6c] px-12 py-4 text-xl font-bold text-white shadow-lg">
          مطالعه
        </div>
      </div>
    </div>
  </a>
</article>

      <div className="grid gap-5 xl:order-3">
  {sidePosts.map(({ title, category, image }) => (
    <article key={title} className="group overflow-visible">
      <a
        href="#blog"
        className="grid min-h-[192px] grid-cols-[48%_58%] items-center"
      >
        
        {/* Image */}
<div className="relative overflow-hidden rounded-[22px] border-2 border-white">
  <img
    src={image}
    alt={title}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />

  {/* Category */}
  <span className="absolute bottom-4 right-4 z-20 rounded-xl bg-[#ffbf00] px-6 py-3 text-sm  text-[#1a3b41]">
    {category}
  </span>
</div>

        {/* White Card */}
        <div className="relative px-6 py-7 -mt-12 -mr-10 z-20">
          <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_8px_28px_rgba(26,59,65,0.06)]">

            {/* مورب سمت راست */}
            <div
              className="absolute top-0 right-0 h-full w-10 bg-[#f7f7f7]"
              style={{
                transform: "skewX(-12deg) translateX(18px)",
              }}
            />

            {/* محتوا */}
            <div className="relative z-10 px-8 py-8 min-h-[140px] w-[360px]">
              {/* <span className="text-[11px] font-bold text-[#529553]">
                {category}
              </span> */}

              <h3 className=" mt-2 line-clamp-3 text-lg font-black leading-6">
                {title}
              </h3>
            </div>

          </div>
        </div>
      </a>
    </article>
  ))}
</div>
</div>
        {/* <a href="#blog" className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-lg border border-[#ffb22c] px-7 py-2.5 font-bold text-[#1a3b41] transition hover:bg-[#ffb22c]">
          مطالعه <FiArrowLeft />
        </a> */}
        <a href="#blog" className="mx-auto mt-14 flex w-fit items-center gap-2 rounded-lg bg-[#ffb22c] px-7 py-2.5 font-bold text-[#1a3b41] transition hover:bg-[#fdc564]">
          همه مقالات
        </a>
      </Container>
    </section>
  );
};

export default Blog;
