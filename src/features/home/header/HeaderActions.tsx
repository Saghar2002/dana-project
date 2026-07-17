import { FiHeadphones, FiUser } from "react-icons/fi";

type HeaderActionsProps = {
  isScrolled: boolean;
};

const HeaderActions = ({ isScrolled }: HeaderActionsProps) => {
  return (
    <div className={`hidden items-center gap-5 text-[15px] font-bold xl:flex ${isScrolled ? "text-[#1a3b41]" : "text-white"}`}>
      <div className="flex items-center gap-2">
        <span>مشاوره</span>
        <a href="tel:02191303862" className="font-heading text-lg font-black text-[#ffb22c]" dir="ltr">۰۲۱-۹۱۳۰۳۸۶۲</a>
        <FiHeadphones className="text-xl text-[#ffb22c]" />
      </div>
      <span className={`h-7 w-px ${isScrolled ? "bg-[#1a3b41]/20" : "bg-white/50"}`} />
      <div className={`flex items-center gap-3 ${isScrolled ? "rounded-lg bg-[#ffb22c] px-4 py-2 text-[#1a3b41]" : ""}`}>
        <a href="#login" className={`rounded-lg transition ${isScrolled ? "p-0 hover:text-[#1a3b41]/70" : "border border-[#ffb22c] px-3 py-1.5 text-white hover:bg-[#ffb22c] hover:text-[#021d20]"}`}>
          ورود
        </a>
        <span className={`h-5 w-px ${isScrolled ? "bg-[#1a3b41]/30" : "bg-white/20"}`} aria-hidden="true" />
        <a href="#signup" className={`flex items-center gap-2 transition ${isScrolled ? "text-[#1a3b41] hover:text-[#1a3b41]/70" : "text-white hover:text-[#ffb22c]"}`}>
          <FiUser className={`text-xl ${isScrolled ? "text-[#1a3b41]" : "text-[#ffb22c]"}`} />
          عضویت
        </a>
      </div>
    </div>
  );
};

export default HeaderActions;
