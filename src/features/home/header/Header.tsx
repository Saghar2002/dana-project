import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../../../components/common/container/Container";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((previousValue) => !previousValue);
  const closeMenu = () => setIsMenuOpen(false);
  const foregroundColor = isScrolled ? "text-[#1a3b41]" : "text-white";

  return (
    <header className={`fixed left-0 top-0 z-50 flex h-20 w-full items-center border-b transition-[background-color,border-color] duration-200 lg:h-[114px] ${isScrolled ? "border-[#1a3b41]/20 bg-[#f5f5f5]" : "border-white/10 bg-transparent"}`} dir="rtl">
      <Container>
        <div className="relative flex h-20 items-center justify-between gap-4 lg:h-[114px]">
          <HeaderLogo isScrolled={isScrolled} />
          <HeaderMenu isScrolled={isScrolled} isOpen={isMenuOpen} onNavigate={closeMenu} />
          <HeaderActions isScrolled={isScrolled} />
          <button type="button" className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${foregroundColor}`} onClick={toggleMenu} aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
