import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Container from "../../../components/common/container/Container";

const questions = [
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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-background overflow-hidden bg-[#f5f5f5] py-24 text-[#1a3b41]" dir="rtl">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative mx-auto max-w-[295px]">
            <img src="/images/faq.png" alt="سوالات متداول" className="w-full object-contain" />
            <div className="absolute -bottom-7 left-1/2 w-[225px] -translate-x-1/2 bg-white/15 px-6 py-6 text-center text-white shadow-xl backdrop-blur-xl [clip-path:polygon(12%_0,88%_0,100%_100%,0_100%)]">
              <h2 className="font-heading text-xl font-black">سوالات متداول</h2>
              <p className="mt-1 text-xs font-semibold text-white/70">Most asked question</p>
            </div>
          </div>

          <div className="relative">
            <dl className="space-y-3">
              {questions.map(({ question, answer }, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={question} className={`rounded-xl border border-[#1a3b41]/10 transition ${isOpen ? "bg-white" : "bg-white/60"}`}>
                    <dt>
                      <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center gap-3 px-5 py-4 text-right font-bold">
                        <FiHelpCircle className="shrink-0 text-lg text-[#1a3b41]/45" />
                        <span className="flex-1">{question}</span>
                        <FiChevronDown className={`shrink-0 text-xl text-[#1a3b41]/60 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </dt>
                    {isOpen && <dd className="px-5 pb-5 pr-14 text-sm leading-7 text-[#1a3b41]/70">{answer}</dd>}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
