import Container from "../../../components/common/container/Container";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderActions from "./HeaderActions";
import { useEffect, useState } from "react";


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header className={`fixed top-0 left-0 z-50 w-full transition-[background-color,border-color] duration-200 ${isScrolled ? "border-b border-[#1a3b41]/20 bg-[#f5f5f5]" : "bg-transparent"}`} dir="rtl">
        <Container>
          <div className="flex h-[114px] items-center justify-between gap-5">
            <HeaderLogo isScrolled={isScrolled} />
            <HeaderMenu isScrolled={isScrolled} />
            <HeaderActions isScrolled={isScrolled} />
          </div>
        </Container>
      </header>
    );
  };
  
  export default Header;
