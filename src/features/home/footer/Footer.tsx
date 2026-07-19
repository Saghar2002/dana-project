import { FiArrowUpLeft, FiHeadphones, FiInstagram, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const FooterHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-5">
    <h3 className="font-heading text-lg font-black text-white">{title}</h3>
    <span className="mt-1 block text-xs font-semibold text-white/40">{subtitle}</span>
  </div>
);

const Footer = () => {
  return (
    <footer dir="rtl">
      <div className="relative overflow-hidden bg-[radial-gradient(46%_88%_at_69%_44%,#0d1f22_0%,#031518_100%)] text-white">
        <span className="absolute inset-0 bg-[url('/images/footer-right.png')] bg-cover bg-right-top bg-no-repeat opacity-10" aria-hidden="true" />
        <Container>
          <div className="relative lg:grid lg:grid-cols-[1fr_450px] lg:items-start">
          <div className="relative grid items-start gap-8 py-20 lg:col-start-1 lg:grid-cols-[1.35fr_0.72fr_0.72fr] lg:gap-5">
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

          <div dir="ltr" className="relative -mb-10 mt-4 flex h-[260px] items-end bg-[#ffb22c] lg:col-start-2 lg:row-start-1 lg:-mt-8 lg:mr-auto lg:h-[285px] lg:w-[450px] lg:rounded-r-[64px]">
            <img src="/images/footer-help.png" alt="نیاز به راهنمایی دارید" className="relative z-10 -mr-2 h-[310px] w-[36%] shrink-0 object-contain object-left lg:-mt-10 lg:h-[340px]" />
            <div dir="rtl" className="flex flex-1 flex-col items-center justify-center px-5 text-center text-[#1a3b41]">
              <p className="font-heading text-xl font-black">نیاز به راهنمایی دارید؟</p>
              <p className="mt-2 text-sm font-semibold text-[#1a3b41]/55">Do you need help?</p>
              <a href="tel:02191303862" dir="ltr" className="mt-4 flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 font-bold text-[#1a3b41]">021-91303862 <FiHeadphones className="text-[#ffb22c]" /></a>
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
