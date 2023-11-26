import { ComponentProps } from "react";
import { cn } from "../../helpers/utils";

interface DialogHeaderProps extends ComponentProps<"div"> {}

export default function DialogHeader({
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <>
      <div
        className={cn("flex items-center justify-center", className, {})}
        {...props}
      >
        <img src="/assets/imgs/common/logo-2.png" className="w-28" alt="" />
        <div className="h-px bg-gradient-to-l mt-7 mb-10 from-red-500 to-yellow-500" />
      </div>
    </>
  );
}
