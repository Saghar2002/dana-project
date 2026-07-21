import { useState } from "react";
import type { IconType } from "react-icons";
import { FiArrowLeft, FiBox, FiChevronDown, FiFileText, FiHeadphones, FiHome, FiPhone } from "react-icons/fi";

type DropdownItem = {
  title: string;
  href: string;
};

type NavigationItem = {
  title: string;
  href: string;
  icon?: IconType;
  hasDropdown?: boolean;
  isFeatured?: boolean;
  dropdownItems?: DropdownItem[];
};

const servicesDropdown: DropdownItem[] = [
  { title: "تولید نرم‌افزار سفارشی", href: "#custom-software" },
  { title: "طراحی و توسعه وب‌اپلیکیشن‌ها", href: "#web-apps" },
  { title: "طراحی و توسعه اپلیکیشن‌های موبایل", href: "#mobile-apps" },
  { title: "هوش مصنوعی و یادگیری ماشین", href: "#ai-ml" },
  { title: "اتوماسیون سازمانی", href: "#automation" },
  { title: "اینترنت اشیا و سیستم‌های هوشمند", href: "#iot" },
  { title: "مشاوره فناوری و زیرساخت نرم‌افزاری", href: "#consulting" },
];

const productsDropdown: DropdownItem[] = [
  { title: "اپلیکیشن دانا", href: "#dana-app" },
  { title: "نرم‌افزار واسط مودیان", href: "#mudian-software" },
];

const menuItems: NavigationItem[] = [
  { title: "خانه", href: "#home", icon: FiHome },
  { title: "خدمات", href: "#services", icon: FiHeadphones, hasDropdown: true, dropdownItems: servicesDropdown },
  { title: "محصولات", href: "#products", hasDropdown: true, dropdownItems: productsDropdown },
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
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const textColor = isScrolled ? "text-[#1a3b41]" : "text-white";
  const iconColor = isScrolled ? "text-[#1a3b41]/60" : "text-slate-400";

  const toggleMobileDropdown = (index: number) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <nav className="hidden lg:block" aria-label="منوی اصلی">
        <ul className="flex items-center">
          {menuItems.map(({ title, href, icon: Icon, hasDropdown, isFeatured, dropdownItems }, index) => (
            <li key={href} className={`group relative ${index ? (isScrolled ? "border-r border-[#1a3b41]/20" : "border-r border-slate-400/20") : ""}`}>
              <a href={href} className={`flex items-center gap-2 px-4 xl:px-5 font-bold transition ${textColor} ${isFeatured ? "text-[15px]" : "text-sm"}`}>
                {Icon && <Icon className={`text-lg transition-colors group-hover:text-[#ffb22c] ${iconColor}`} />}
                {title}
                {hasDropdown && <FiChevronDown className={`-mr-1 text-base transition-transform group-hover:rotate-180 group-hover:text-[#ffb22c] ${textColor}`} />}
              </a>

              {hasDropdown && dropdownItems && (
                <div
                  className="
                    invisible absolute right-0 top-full z-50 w-72 -translate-y-2 rounded-2xl bg-white
                    opacity-0 shadow-xl transition-all duration-200
                    group-hover:visible group-hover:translate-y-2 group-hover:opacity-100
                  "
                >
                  <ul className="divide-y divide-[#1a3b41]/10 py-2">
                    {dropdownItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="group/item flex items-center justify-between gap-3 px-6 py-6 text-sm font-bold text-[#1a3b41] transition"
                        >
                          {item.title}
                          <FiArrowLeft className="shrink-0 text-[#1a3b41]/40 transition-colors group-hover/item:text-[#ffb22c]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className={`absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-t px-5 py-4 shadow-xl transition-all duration-200 lg:hidden ${isScrolled ? "border-[#1a3b41]/10 bg-[#f5f5f5]" : "border-white/10 bg-[#092326]/95 backdrop-blur-lg"} ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        aria-label="منوی موبایل"
      >
        <ul className="grid gap-1">
          {menuItems.map(({ title, href, icon: Icon, hasDropdown, dropdownItems }, index) => (
            <li key={href}>
              {hasDropdown && dropdownItems ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(index)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-right font-bold ${textColor} hover:bg-white/10`}
                  >
                    {Icon && <Icon className={`text-lg transition-colors group-hover:text-[#ffb22c] ${iconColor}`} />}
                    <span>{title}</span>
                    <FiChevronDown className={`mr-auto transition-transform ${mobileOpenIndex === index ? "rotate-180" : ""}`} />
                  </button>
                  <ul className={`grid gap-1 overflow-hidden pr-4 transition-all ${mobileOpenIndex === index ? "max-h-96 py-1" : "max-h-0"}`}>
                    {dropdownItems.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} onClick={onNavigate} className={`block rounded-lg px-4 py-2 text-sm ${textColor}/80 hover:bg-white/10`}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={href} onClick={onNavigate} className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-bold ${textColor} hover:bg-white/10`}>
                  {Icon && <Icon className={`text-lg transition-colors group-hover:text-[#ffb22c] ${iconColor}`} />}
                  <span>{title}</span>
                </a>
              )}
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