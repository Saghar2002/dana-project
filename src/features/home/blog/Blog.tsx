import { FiArrowLeft, FiBookOpen } from "react-icons/fi";
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
              <FiBookOpen className="text-3xl text-[#ffb22c]" />
              <div className="relative pr-5 before:absolute before:right-0 before:top-1/2 before:h-10 before:w-px before:-translate-y-1/2 before:bg-[#529553]">
                <h2 className="font-heading text-3xl font-black">وبلاگ</h2>
                <p className="mt-1 text-sm font-semibold text-[#1a3b41]/35">Weblog</p>
              </div>
            </div>
          </div>

          <article className="group overflow-hidden rounded-2xl xl:order-2">
            <a href="#blog" className="block">
              <div className="relative h-[245px] overflow-hidden border-2 border-white">
                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute right-5 top-5 rounded-lg bg-[#ffb22c] px-3 py-1.5 text-xs font-bold text-[#1a3b41]">{featuredPost.category}</span>
              </div>
              <div className="relative mx-4 -mt-7 flex min-h-[172px] flex-col rounded-2xl bg-white p-6 shadow-[0_8px_28px_rgba(26,59,65,0.08)]">
                <span className="text-xs font-bold text-[#529553]">{featuredPost.category}</span>
                <h3 className="font-heading mt-3 text-xl font-black leading-8">{featuredPost.title}</h3>
              </div>
            </a>
          </article>

          <div className="grid gap-5 xl:order-3">
            {sidePosts.map(({ title, category, image }) => (
              <article key={title} className="group overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(26,59,65,0.06)]">
                <a href="#blog" className="grid min-h-[192px] grid-cols-[42%_58%]">
                  <div className="overflow-hidden border-2 border-white">
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col p-4">
                    <span className="text-[11px] font-bold text-[#529553]">{category}</span>
                    <h3 className="font-heading mt-2 line-clamp-3 text-sm font-black leading-6">{title}</h3>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        <a href="#blog" className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-lg border border-[#ffb22c] px-7 py-2.5 font-bold text-[#1a3b41] transition hover:bg-[#ffb22c]">
          مطالعه <FiArrowLeft />
        </a>
        <a href="#blog" className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-lg bg-[#ffb22c] px-7 py-2.5 font-bold text-[#1a3b41] transition hover:bg-[#fdc564]">
          همه مقالات <FiArrowLeft />
        </a>
      </Container>
    </section>
  );
};

export default Blog;
