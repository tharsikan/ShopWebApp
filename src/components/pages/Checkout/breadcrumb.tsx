import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";

type BreadcrumbProps = ComponentProps<"div"> & { current: string };

export function Breadcrumb({ className, current, ...props }: BreadcrumbProps) {
  return (
    <div
      className={cn(
        "flex text-zinc-800 gap-2 py-4 items-center text-[10px] md:text-xs font-normal",
        className
      )}
      {...props}
    >
      <Link to={"/cart"} className="text-sky-700">
        Cart
      </Link>
      <Icon icon={"ci:chevron-right"} />
      <Link
        to={"/checkout/info"}
        className={cn({
          "font-semibold": current === "info",
          "text-sky-700": current === "shipping" || current === "payment",
        })}
      >
        Information
      </Link>
      <Icon icon={"ci:chevron-right"} />
      <Link
        to={"/checkout/shipping"}
        className={cn({
          "font-semibold": current === "shipping",
          "text-sky-700": current === "payment",
        })}
      >
        Shipping
      </Link>
      <Icon icon={"ci:chevron-right"} />
      <Link
        to={"/checkout/payment"}
        className={cn({
          "font-semibold": current === "payment",
        })}
      >
        Payment
      </Link>
    </div>
  );
}
