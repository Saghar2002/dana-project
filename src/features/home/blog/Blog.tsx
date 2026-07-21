import Container from "../../../components/common/container/Container";
import { FiArrowLeft } from "react-icons/fi";

type BlogPost = {
  title: string;
  category: string;
  image: string;
  excerpt?: string;
};

const posts: BlogPost[] = [
  {
    title: "چرا پشتیبانی نرم‌افزاری باکیفیت برای کسب‌وکارها حیاتی است؟",
    category: "آموزش و نکات تخصصی",
    image: "/images/blog-01.png",
  },
  {
    title: "آینده نرم‌افزارهای سازمانی در عصر هوش مصنوعی",
    category: "آموزش و نکات\u00A0تخصصی",
    image: "/images/blog-03.png",
    excerpt: "در سال‌های اخیر، هوش مصنوعی به یکی از مؤثرترین فناوری‌های تحول‌آفرین در دنیای نرم‌افزارهای سازمانی تبدیل شده است.",
  },
  {
    title: "۵ فناوری مهم که آینده حسابداری را دگرگون می‌کنند",
    category: "فناوری و نوآوری",
    image: "/images/blog-04.png",
    excerpt: "صنعت حسابداری در حال تجربه تحولی عمیق است؛ تحولی که ناشی از ورود فناوری‌های نوین به فضای مالی کسب‌وکارهاست.",
  },
];

const Blog = () => {
  const [featuredPost, ...sidePosts] = posts;

  return (
    <section className="blog-background overflow-hidden bg-[#f5f5f5] py-24 text-[#1a3b41]" dir="rtl">
      <Container>
        <div className="grid items-start gap-6 xl:grid-cols-[1fr_1.55fr_1.15fr]">
          <div className="flex min-h-0 flex-col justify-center pb-2 xl:order-1 xl:min-h-[410px] xl:pb-0">
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
  {sidePosts.map(({ title, category, image, excerpt }) => (
    <article key={title} className="group overflow-visible">
      <a
        href="#blog"
        className="grid min-h-[250px] grid-cols-[34%_66%] items-center"
      >
        
        {/* Image */}
<div className="relative h-[170px] overflow-hidden rounded-[24px] border-2 border-white">
  <img
    src={image}
    alt={title}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />

  {/* Category */}
  <span className="absolute bottom-4 right-4 z-20 rounded-xl bg-[#ffbf00] px-5 py-3 text-sm  text-[#1a3b41]">
    {category}
  </span>
</div>

        {/* White Card */}
        <div className="relative z-20 -mr-8 -mt-10 px-4 py-5">
         <div className="relative h-[175px] overflow-hidden rounded-[26px] bg-white shadow-[0_12px_35px_rgba(0,0,0,.08)]">

            {/* محتوا */}
            <div className="relative z-10 flex h-full flex-col justify-start px-8 pt-6">
              <h3 className="line-clamp-2 text-[18px] font-black leading-8">
                {title}
              </h3>
              <div className="mt-3 flex items-end justify-between gap-5">

  <p className="line-clamp-2 flex-1 text-[14px] leading-7 text-[#1a3b41]/55">
    {excerpt}
  </p>

  <FiArrowLeft className="shrink-0 text-[22px] text-[#173b40]/35 transition group-hover:-translate-x-1" />

</div>
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
        <a href="#blog" className="mx-auto -mt-12 flex w-fit items-center gap-2 rounded-lg bg-[#ffb22c] px-7 py-2.5 font-bold text-[#1a3b41] transition hover:bg-[#fdc564]">
          همه مقالات
        </a>
      </Container>
    </section>
  );
};

export default Blog;
