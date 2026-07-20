import Container from "../../../components/common/container/Container";

const Hero = () => {
  return (
     <main 
      id="home" 
      className="hero-pattern min-h-[135vh] pt-24 text-white"  // ← hero-pattern اضافه شده
      dir="rtl"
     >
      <Container>
        <section className="grid min-h-[calc(100vh-5rem)] items-center gap-8 py-12 sm:py-16 lg:min-h-[calc(100vh-114px)] lg:grid-cols-2 lg:gap-20">
          <div className="order-2 w-full min-w-0 text-center lg:order-1 lg:text-right">
            <div className="mb-7 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3 lg:justify-start">
              <span className="rounded-lg bg-emerald-900/40 px-4 py-2 text-sm font-bold text-[#78b66b]">فناوری پیشرفته</span>
              <span className="rounded-lg bg-emerald-900/40 px-4 py-2 text-sm font-bold text-[#78b66b]">راهکار هوشمند</span>
            </div>
            <h1 className="font-heading break-words text-2xl font-black leading-[1.5] sm:text-3xl lg:text-[1.6rem]">قدرت‌بخش کسب‌وکارهای هوشمند</h1>
            <p className="mx-auto mt-5 max-w-2xl break-words text-sm font-medium leading-6 text-slate-300 sm:mt-6 lg:mx-0">
              مجموعه توسعه فناوری و نرم‌افزار دانا با تکیه بر تجربه، تخصص، راهکارهای نرم‌افزاری هوشمند، وب‌اپلیکیشن‌ها، اپلیکیشن‌های موبایل و سامانه‌های سازمانی را توسعه می‌دهد. خدمات ما شامل طراحی، برنامه‌نویسی، استقرار و پشتیبانی سیستم‌هاست و با بهره‌گیری از هوش مصنوعی و زیرساخت‌های نوین، تحول دیجیتال کسب‌وکارها را سرعت می‌بخشد.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-14 lg:justify-start">
              <a href="#about" className="rounded-xl bg-amber-400 px-6 py-2.5 font-black text-[#032126] hover:bg-amber-300 sm:px-7 sm:py-3">درباره ما</a>
              <a href="#contact" className="rounded-xl bg-[#16454d] px-6 py-2.5 font-black hover:bg-[#205963] sm:px-7 sm:py-3">تماس با ما</a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <img src="/images/dana-softco-mainpage-bg.png" alt="راهکارهای نرم‌افزاری دانا" className="w-full max-w-[360px] object-contain sm:max-w-[480px] lg:max-w-[588px]" />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Hero;
