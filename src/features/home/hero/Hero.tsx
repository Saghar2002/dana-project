import Container from "../../../components/common/container/Container";

const Hero = () => {
  return (
    <main 
      id="home" 
      className="hero-pattern min-h-[135vh] pt-24 text-white"  // ← hero-pattern اضافه شده
      dir="rtl"
    >
      <Container>
        <section className="grid min-h-[calc(100vh-6rem)] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <div className="mb-10 flex justify-center gap-3 lg:justify-start">
              <span className="rounded-lg bg-emerald-900/40 px-4 py-2 text-sm font-bold text-[#78b66b]">فناوری پیشرفته</span>
              <span className="rounded-lg bg-emerald-900/40 px-4 py-2 text-sm font-bold text-[#78b66b]">راهکار هوشمند</span>
            </div>
            <h1 className="font-black leading-[1.5] sm:text-4xl xl:text-5xl">قدرت‌بخش کسب‌وکارهای هوشمند</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-slate-300 lg:mx-0">
              مجموعه توسعه فناوری و نرم افزار دانا با تکیه بر تجربه، تخصص، راهکارهای نرم‌افزاری هوشمند،
              وب‌اپلیکیشن‌ها، اپلیکیشن‌های موبایل و سامانه‌های سازمانی را توسعه می‌دهد. خدمات ما شامل طراحی،
              برنامه‌نویسی، استقرار و پشتیبانی سیستم‌هاست و با بهره‌گیری از هوش مصنوعی و زیرساخت‌های نوین،
              تحول دیجیتال کسب‌وکارها را سرعت می‌بخشد.
            </p>
            <div className="mt-14 flex justify-center gap-3 lg:justify-start">
              <a href="#about" className="rounded-xl bg-amber-400 px-7 py-3 font-black text-[#032126] transition hover:bg-amber-300">درباره ما</a>
              <a href="#contact" className="rounded-xl bg-[#16454d] px-7 py-3 font-black transition hover:bg-[#205963]">تماس با ما</a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <img
              src="/images/dana-softco-mainpage-bg.png"
              alt="راهکارهای نرم‌افزاری دانا"
              className="w-full max-w-[588px] object-contain"
            />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;