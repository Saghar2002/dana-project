type HeaderLogoProps = {
  isScrolled: boolean;
};

const HeaderLogo = ({ isScrolled }: HeaderLogoProps) => {
  return (
    <a href="#home" className={`relative block after:absolute after:-bottom-9 after:right-0 after:hidden after:h-px after:w-[190px] lg:after:block ${isScrolled ? "after:bg-[#1a3b41]/30" : "after:bg-white/90"}`} aria-label="دانا سافت">
      <img
        src={isScrolled ? "/images/dana-software-logo-02.png" : "/images/dana-software-logo-01.png"}
        alt="توسعه فناوری نرم افزار دانا"
        className="h-auto w-28 object-contain sm:w-36 lg:w-40"
      />
    </a>
  );
};

export default HeaderLogo;
