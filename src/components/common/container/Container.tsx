import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 min-[480px]:px-10 md:px-14">
      {children}
    </div>
  );
};

export default Container;
