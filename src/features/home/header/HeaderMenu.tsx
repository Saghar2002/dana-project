import type { IconType } from "react-icons";
import { FiBox, FiChevronDown, FiFileText, FiHeadphones, FiHome, FiPhone } from "react-icons/fi";

type NavigationItem = {
  title: string;
  href: string;
  icon?: IconType;
  hasDropdown?: boolean;
  isFeatured?: boolean;
};

const menuItems: NavigationItem[] = [
  { title: "خانه", href: "#home", icon: FiHome },
  { title: "خدمات", href: "#services", icon: FiHeadphones, hasDropdown: true },
  { title: "محصولات", href: "#products", hasDropdown: true },
  { title: "مقالات", href: "#blog", icon: FiFileText },
  { title: "درباره ما", href: "#about", icon: FiBox, isFeatured: true },
  { title: "تماس با ما", href: "#contact", icon: FiPhone, isFeatured: true },
];

type HeaderMenuProps = {
  isScrolled: boolean;
  isOpen: boolean;
  onNavigate: () => void;
};

const HeaderMenu = ({ isScrolled, isOpen, onNavigate }: HeaderMenuProps) => {
  const textColor = isScrolled ? "text-[#1a3b41]" : "text-white";
  const iconColor = isScrolled ? "text-[#1a3b41]/60" : "text-slate-400";

  return (
    <>
      <nav className="hidden lg:block" aria-label="منوی اصلی">
        <ul className="flex items-center">
          {menuItems.map(({ title, href, icon: Icon, hasDropdown, isFeatured }, index) => (
            <li key={href} className={index ? (isScrolled ? "border-r border-[#1a3b41]/20" : "border-r border-slate-400/20") : ""}>
              <a href={href} className={`flex items-center gap-2 px-4 xl:px-5 font-bold transition hover:text-[#ffb22c] ${textColor} ${isFeatured ? "text-[15px]" : "text-sm"}`}>
                {Icon && <Icon className={`text-lg ${iconColor}`} />}
                {title}
                {hasDropdown && <FiChevronDown className={`-mr-1 text-base ${textColor}`} />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className={`absolute inset-x-0 top-full border-t px-5 py-4 shadow-xl transition-all duration-200 lg:hidden ${isScrolled ? "border-[#1a3b41]/10 bg-[#f5f5f5]" : "border-white/10 bg-[#092326]/95 backdrop-blur-lg"} ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        aria-label="منوی موبایل"
      >
        <ul className="grid gap-1 sm:grid-cols-2">
          {menuItems.map(({ title, href, icon: Icon, hasDropdown }) => (
            <li key={href}>
              <a href={href} onClick={onNavigate} className={`flex items-center gap-3 rounded-lg px-4 py-3 font-bold ${textColor} hover:bg-white/10`}>
                {Icon && <Icon className={`text-lg ${iconColor}`} />}
                <span>{title}</span>
                {hasDropdown && <FiChevronDown className="mr-auto" />}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:02191303862" className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#ffb22c] px-4 py-3 font-bold text-[#1a3b41]">
          <FiHeadphones />
          مشاوره: ۰۲۱-۹۱۳۰۳۸۶۲
        </a>
      </nav>
    </>
  );
};

export default HeaderMenu;
