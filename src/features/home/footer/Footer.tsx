import { FiArrowUpLeft, FiHeadphones, FiInstagram, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

type FooterHeadingProps = {
  title: string;
  subtitle: string;
};

const FooterHeading = ({ title, subtitle }: FooterHeadingProps) => (
  <div className="mb-8">
    <h3 className="font-heading text-[22px] font-black text-white">
      {title}
    </h3>

    <span className="mt-2 block text-xs font-semibold text-white/35">
      {subtitle}
    </span>
  </div>
);

const Footer = () => {
  return (
     <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#0d4658] text-white"
    >


      <div className="absolute inset-0">

        <img
          src="/images/footer-right.png"
          className="h-full w-full object-cover opacity-15"
          alt=""
        />

      </div>

      <div className="absolute inset-0 bg-[#0b4050]/90"></div>

      <span
        className="absolute right-0 top-0 h-full w-[420px] bg-[url('/images/footer-right.png')] bg-right-top bg-no-repeat opacity-70"
      />

      <Container>

        <div className="relative z-10 grid gap-12 pt-24 pb-44 lg:grid-cols-[1.4fr_.8fr_1fr]">

                  <div>

            <img
              src="/images/dana-software-logo-01.png"
              className="w-44"
              alt=""
            />

            <p className="mt-8 max-w-md leading-8 text-[15px] text-white/70">

              توسعه فناوری و نرم افزار دانا با تمرکز بر طراحی و تولید
              نرم افزارهای تخصصی، راهکارهای نوین و هوشمند برای کسب
              و کارها ارائه می‌دهد.

            </p>

          </div>
          {/* Quick Access */}

<div>

  <FooterHeading
    title="دسترسی سریع"
    subtitle="Quick Access"
  />

  <ul className="space-y-5">

    {[
      "خانه",
      "خدمات",
      "مقالات",
      "تماس با ما",
      "درباره ما",
      "قوانین و مقررات",
    ].map((item) => (

      <li key={item}>

        <a
          href="#"
          className="group flex items-center gap-3 text-[17px] text-white/75 transition-all duration-300 hover:text-[#ffb62b]"
        >

          <span className="h-[2px] w-0 bg-[#ffb62b] transition-all duration-300 group-hover:w-5"></span>

          {item}

        </a>

      </li>

    ))}

  </ul>

</div>
{/* Recent Posts */}

<div>

  <FooterHeading
    title="آخرین نوشته‌ها"
    subtitle="Recent Posts"
  />

  <ul className="space-y-7">

    {[
      "پشتیبانی نرم افزاری برای کسب و کارها",
      "نرم افزارهای سازمانی در عصر هوش مصنوعی",
      "۵ فناوری مهم حسابداری",
      "نرم افزارهای اتوماسیون در بهره‌وری کسب و کارها",
    ].map((item) => (

      <li
        key={item}
        className="border-b border-white/10 pb-5"
      >

        <a
          href="#"
          className="leading-8 text-white/70 transition hover:text-[#ffb62b]"
        >
          {item}
        </a>

      </li>

    ))}

  </ul>

</div>
        </div>

      </Container>


      <div className="bg-[#01655d] border-t border-white/10 px-6 pt-6 pb-4 text-center text-sm font-medium text-white">
  تمام حقوق مادی و معنوی این سایت متعلق به شرکت توسعه فناوری و نرم‌افزار دانا می‌باشد. طراحی و توسعه توسط هوش مصنوعی ویرا آریان.
</div>
    </footer>
  );
};

export default Footer;
