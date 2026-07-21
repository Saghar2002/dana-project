import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 min-[480px]:px-10 min-[769px]:px-14 ${className}`}>
      {children}
    </div>
  );
};

export default Container;