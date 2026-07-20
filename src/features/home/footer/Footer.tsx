import { FiArrowUpLeft, FiHeadphones, FiInstagram, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

type FooterHeadingProps = {
  title: string;
  subtitle: string;
};

const FooterHeading = ({ title, subtitle }: FooterHeadingProps) => (
  <div className="mb-5">
    <h3 className="font-heading text-lg font-black text-white">{title}</h3>
    <span className="mt-1 block text-xs font-semibold text-white/40">{subtitle}</span>
  </div>
);

const Footer = () => {
  return (
    <footer dir="rtl">
      <div className="relative overflow-visible bg-[radial-gradient(46%_88%_at_69%_44%,#0d1f22_0%,#031518_100%)] text-white ">
        <span className="absolute inset-0 bg-[url('/images/footer-right.png')] bg-cover bg-right-top bg-no-repeat opacity-10" aria-hidden="true" />
        <Container>
          <div className="relative">
          <div className="relative z-10 grid items-start gap-8 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.72fr_0.72fr] lg:py-24 lg:pl-[420px]">
            <div className="max-w-[336px]">
              <img src="/images/dana-software-logo-01.png" alt="دانا" className="w-48" />
              <p className="mt-6 text-justify text-sm leading-6 text-white/70">توسعه فناوری و نرم‌افزار دانا با تمرکز بر طراحی و تولید نرم‌افزارهای تخصصی، ارائه‌دهنده راهکارهای نوین در حوزه حسابداری، مالی و هوش مصنوعی است. ما با ارائه محصولات کاربردی مانند نرم‌افزار واسط مودیان و نرم‌افزار کلیپس، تلاش می‌کنیم تجربه‌ای سریع، امن و هوشمند برای کسب‌وکارها فراهم کنیم.</p>
            </div>
            <nav className="justify-self-center">
              <FooterHeading title="دسترسی سریع" subtitle="Quick Access" />
              <ul className="space-y-3 text-sm text-white/80">
                {["خانه", "خدمات", "مقالات", "تماس با ما", "درباره ما", "قوانین و مقررات"].map((item) => <li key={item}><a href={`#${item}`} className="transition hover:text-[#ffb22c]">{item}</a></li>)}
              </ul>
            </nav>
            <nav className="justify-self-center lg:-mr-8">
              <FooterHeading title="آخرین نوشته‌ها" subtitle="Recent Posts" />
              <ul className="space-y-3 text-sm leading-6 text-white/80">
                <li><a href="#blog">پشتیبانی نرم‌افزاری برای کسب‌وکارها</a></li>
                <li><a href="#blog">نرم‌افزارهای سازمانی در عصر هوش مصنوعی</a></li>
                <li><a href="#blog">۵ فناوری مهم حسابداری</a></li>
                <li><a href="#blog">نرم‌افزارهای اتوماسیون در بهره‌وری کسب‌وکارها</a></li>
              </ul>
            </nav>
          </div>

          <div
  dir="ltr"
  className="
    relative
    lg:absolute
    z-20
    mx-auto
    mt-2
    h-[280px]
    w-full
    max-w-[470px]
    overflow-visible
    sm:h-[330px]
    left-[-30px]
    lg:left-[-10px]
    lg:top-[50px]
    lg:mt-0
    lg:h-[390px]
    lg:w-[470px]
  "
>
  {/* کارت زرد */}
  <div
  dir="ltr"
  className="
    relative
    
    z-20
    mx-auto
    mt-2
    h-[280px]
    w-full
    max-w-[470px]
    overflow-visible
    sm:h-[330px]
    lg:absolute
    lg:left-[-140px]
    lg:top-[-95px]
    lg:mt-0
    lg:h-[390px]
    lg:w-[470px]
  "
>
  {/* عکس - پایین‌ترین لایه */}
  <img
    src="/images/footer-help.png"
    alt="نیاز به راهنمایی دارید"
    className="absolute inset-y-0 left-0 h-full w-[52%] rounded-r-[40px] object-cover"
  />

  {/* باکس زرد با برش مورب - روی عکس */}
  <div
    className="absolute inset-y-0 right-0 flex h-full w-[68%] items-center align-middle rounded-r-[70px] bg-[#f7b900] shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
    style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
  >
    <div dir="rtl" className="pr-6 pl-6 text-right text-[#173b40]">
      <h3 className="font-heading lg:text-xl font-black leading-none sm:text-lg">
        نیاز به راهنمایی دارید؟
      </h3>

      <p className="mt-3 text-base font-medium text-[#173b40]/55">
        ?Do you need help
      </p>

      
      <a
        href="tel:02191303862"
        dir="ltr"
        className="mt-7 flex h-11 w-fit items-center gap-3 rounded-xl text-[#f7b900] bg-white px-5 font-bold shadow-md transition hover:scale-[1.03] sm:h-[54px] sm:px-8">
        <FiHeadphones className="text-[#f7b900]" />
        021-91303862
      </a>
    </div>
  </div>
</div>
</div>

          </div>
        </Container>
      </div>

      <div className="bg-[#122a2e] py-10 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <FooterHeading title="دیگر راه‌های ارتباطی" subtitle="Other Contact Methods" />
              <div className="space-y-4 text-sm text-white/80">
                <p className="flex gap-3"><FiMapPin className="shrink-0 text-lg text-[#ffb22c]" />تهران، خیابان طالقانی غربی، خیابان فریمان، پلاک ۳۰، واحد ۱۵</p>
                <a className="flex gap-3" href="mailto:info@danasoftco.com"><FiMail className="shrink-0 text-lg text-[#ffb22c]" />info@danasoftco.com</a>
              </div>
            </div>
            <div>
              <FooterHeading title="شبکه‌های اجتماعی" subtitle="Social Media" />
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="#linkedin" className="flex items-center gap-3 bg-white/5 p-4"><FiLinkedin /> danasofco.com <FiArrowUpLeft className="mr-auto text-white/40" /></a>
                <a href="#instagram" className="flex items-center gap-3 bg-white/5 p-4"><FiInstagram /> danasofco.com <FiArrowUpLeft className="mr-auto text-white/40" /></a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#01655d] border-t border-white/10 px-6 pt-6 pb-4 text-center text-sm font-medium text-white">
  تمام حقوق مادی و معنوی این سایت متعلق به شرکت توسعه فناوری و نرم‌افزار دانا می‌باشد. طراحی و توسعه توسط هوش مصنوعی ویرا آریان.
</div>
    </footer>
  );
};

export default Footer;
