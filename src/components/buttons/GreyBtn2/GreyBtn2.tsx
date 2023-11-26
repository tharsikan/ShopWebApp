import { HtmlHTMLAttributes } from "react";
import { cn } from "../../../helpers/utils";


const GreyBtn2 = ({
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
      className={cn(
        "font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]",
        short ? "h-[30px] text-sm" : "h-[38px]",
        !className?.includes("px-") && (short ? "px-3" : "px-5"),
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default GreyBtn2;
