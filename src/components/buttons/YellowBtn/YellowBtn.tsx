import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

const YellowBtn = ({
  className,
  short,
  label,
  ...props
}: Partial<{
  className: string;
  short: boolean;
  label: any;
}> &
  HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "text-black text-base font-semibold flex items-center justify-center rounded-md hover:bg-accentYellow-600/80 bg-accentYellow-600 transition-colors",
        short ? "h-[30px] px-3 text-sm" : "h-[38px] ",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default YellowBtn;
