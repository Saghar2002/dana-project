import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

type FaqItem = {
  question: string;
  answer: string;
};

const questions: FaqItem[] = [
  {
    question: "چرا باید از خدمات نرم‌افزاری ما استفاده کنید؟",
    answer: "زیرا تمام راهکارها بر اساس نیاز واقعی هر کسب‌وکار طراحی می‌شوند و با استانداردهای روز فناوری توسعه می‌یابند.",
  },
  {
    question: "چه نوع کسب‌وکارهایی می‌توانند از خدمات شما بهره‌مند شوند؟",
    answer: "از استارتاپ‌ها تا سازمان‌های بزرگ، هر مجموعه‌ای که به توسعه نرم‌افزار، اتوماسیون یا مشاوره فناوری نیاز داشته باشد می‌تواند از خدمات ما استفاده کند.",
  },
  {
    question: "آیا امکان ارائه راهکارهای کاملاً سفارشی وجود دارد؟",
    answer: "بله؛ تیم ما تمام مراحل تحلیل، طراحی و توسعه را با رویکرد کاملاً اختصاصی انجام می‌دهد تا نتیجه دقیقاً مطابق نیاز شما باشد.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="faq-background overflow-hidden bg-[#f5f5f5] py-16 text-[#1a3b41] sm:py-24" dir="rtl">
      <Container>
        <div className="relative">
          <span className="absolute inset-x-0 top-1/2 z-0 mx-auto h-[240px] w-full -translate-y-1/2 rounded-[32px] bg-[#ececec]/70 sm:h-[320px]" aria-hidden="true" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div className="relative mx-auto w-full max-w-[295px]">
              <img src="/images/faq.png" alt="سوالات متداول" className="relative z-10 w-full object-contain" />

              <div className="relative z-30 mx-auto -mt-12 h-[180px] w-full max-w-[360px] rounded-[28px] bg-white/20 shadow-[0_20px_60px_rgba(0,0,0,.10)] backdrop-blur-3xl [clip-path:polygon(5%_0%,100%_0%,95%_100%,0%_100%)] sm:h-[220px] lg:absolute lg:-top-[120px] lg:right-[200px] lg:mt-0 lg:h-[250px]">
                <div className="flex h-full items-center justify-center gap-5 px-6 sm:gap-8 sm:px-8">
                  <span className="mt-5 h-[50px] w-[2px] bg-[#173b40]/20" aria-hidden="true" />
                  <div className="flex h-full flex-col items-center justify-center">
                    <h2 className="font-heading text-2xl font-black text-[#173b40] sm:text-[28px]">سوالات متداول</h2>
                    <p className="mt-2 text-sm text-[#173b40]/45">Most asked question</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-40 w-full max-w-[750px]">
              <dl className="space-y-3">
                {questions.map(({ question, answer }, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={question} className={`rounded-xl border border-[#1a3b41]/10 transition ${isOpen ? "bg-white" : "bg-white/60"}`}>
                      <dt>
                        <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center gap-3 px-4 py-4 text-right text-sm font-bold sm:px-5 sm:text-base" aria-expanded={isOpen}>
                          <FiHelpCircle className="shrink-0 text-lg text-[#1a3b41]/45" />
                          <span className="flex-1">{question}</span>
                          <FiChevronDown className={`shrink-0 text-xl text-[#1a3b41]/60 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                      </dt>
                      {isOpen && <dd className="px-4 pb-5 pr-11 text-sm leading-7 text-[#1a3b41]/70 sm:px-5 sm:pr-14">{answer}</dd>}
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
