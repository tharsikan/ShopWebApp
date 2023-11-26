import clsx from "clsx";

import "./Jumbotron.css";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Jumbotron = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        "jumbotron p-4 sm:p-7 pr-52 sm:pr-80 lg:pr-52 xl:pr-80 relative border border-solid border-accentGray-600 min-h-[100px] sm:min-h-[180px] lg:min-h-[100px] xl:min-h-[180px] rounded-lg",
        className
      )}
    >
      <img
        className="absolute max-w-[130px] sm:max-w-full lg:max-w-[130px] xl:max-w-full top-0 right-16"
        src="/assets/imgs/common/claps.png"
        alt="claps"
      />
      <img
        className="absolute max-w-[130px] sm:max-w-full lg:max-w-[130px] xl:max-w-full bottom-0 right-0 rotate-180"
        src="/assets/imgs/common/claps.png"
        alt="claps"
      />
      {children}
    </div>
  );
};

export default Jumbotron;
