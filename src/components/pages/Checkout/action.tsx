import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn";

type ActionProps = ComponentProps<"div"> & {
  to: string;
  toLink?: string;
  from: string;
  fromLink?: string;
};

export function Action({
  className,
  to,
  toLink = "",
  from,
  fromLink = "",
  ...props
}: ActionProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-5 container-mini max-md:flex-col max-md:mt-10 mt-3 mb-8 ",
        className
      )}
      {...props}
    >
      <Link
        to={fromLink}
        className="text-sky-700 max-md:order-last text-[10.97px] font-medium "
      >
        Return to {from}
      </Link>
      <Link to={toLink}>
        <GradientBtn
          label={to === "confirmation" ? "pay now" : `Continue to ${to}`}
        />
      </Link>
    </div>
  );
}
