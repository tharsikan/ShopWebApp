import { Icon } from "@iconify/react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";

interface Props {
  className?: any;
  short?: any;
  iconify?: string;
  label?: any;
  icon?: React.ReactNode;
  iconClassName?: string;
  to?: string;
}

const GreyBtn = ({
  className,
  short,
  label,
  iconClassName,
  iconify,
  icon,
  to,
}: Props) => {
  return (
    <Link
      className={cn(
        "font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]",
        short ? "h-[30px] text-sm" : "h-[38px]",
        !className?.includes("px-") && (short ? "px-3" : "px-5"),
        className
      )}
      to={to ? to : "/"}
    >
      {" "}
      {iconify && <Icon className={clsx(iconClassName)} icon={iconify} />}
      {label && label} {icon && icon}
    </Link>
  );
};

export default GreyBtn;
