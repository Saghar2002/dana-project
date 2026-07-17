import { FiBox, FiChevronDown, FiFileText, FiHeadphones, FiHome, FiPhone } from "react-icons/fi";

const menus = [
  { title: "خانه", icon: FiHome },
  { title: "خدمات", icon: FiHeadphones, dropdown: true },
  { title: "محصولات", dropdown: true },
  { title: "مقالات", icon: FiFileText },
  { title: "درباره ما", icon: FiBox, featured: true },
  { title: "تماس با ما", icon: FiPhone, featured: true },
];

type HeaderMenuProps = {
  isScrolled: boolean;
};

const HeaderMenu = ({ isScrolled }: HeaderMenuProps) => {
  return (
    <nav className="hidden lg:block" aria-label="منوی اصلی">
      <ul className="flex items-center">
        {menus.map(({ title, icon: Icon, dropdown, featured }, index) => (
          <li key={title} className={index ? (isScrolled ? "border-r border-[#1a3b41]/20" : "border-r border-slate-400/20") : ""}>
            <a href={`#${title}`} className={`flex items-center gap-2 px-5 font-bold transition hover:text-[#ffb22c] ${isScrolled ? "text-[#1a3b41]" : "text-white"} ${featured ? "text-[15px]" : "text-sm"}`}>
              {Icon && <Icon className={`text-lg ${isScrolled ? "text-[#1a3b41]/60" : "text-slate-400"}`} />}
              {title}
              {dropdown && <FiChevronDown className={`-mr-1 text-base ${isScrolled ? "text-[#1a3b41]" : "text-white"}`} />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
