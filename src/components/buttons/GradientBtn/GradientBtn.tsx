import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
const GradientBtn = ({
  className,
  textClassName,
  iconClassName,
  textLight,
  lg,
  icon,
  label,
  textSm,
  iconify,
  veryShort,
  ...props
}: Partial<{
  className: any;
  textClassName: string;
  iconClassName: any;
  textLight: any;
  lg: boolean;
  short: boolean;
  icon: any;
  iconify: string;
  label: any;
  textSm: any;
  veryShort: any;
}> &
  ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-gradient-to-l from-red-500 gap-1.5 to-yellow-500 text-white rounded-md px-3 h-10 flex items-center justify-center hover:opacity-75",
        { "p-4": lg },
        className
      )}
    >
      {icon && (
        <div>
          <img className={cn(iconClassName)} src={icon} alt={label} />
        </div>
      )}
      {iconify && <Icon className={cn(iconClassName)} icon={iconify} />}
      <p
        className={cn(
          "md:text-sm font-semibold leading-tight text-white capitalize text-xs w-full",
          textClassName
        )}
      >
        {label}
      </p>
    </button>
  );
};

export default GradientBtn;
