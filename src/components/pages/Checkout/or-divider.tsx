import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type OrDividerProps = ComponentProps<"div">;

export function OrDivider({ className, ...props }: OrDividerProps) {
  return (
    <div
      className={cn(
        "relative h-14 grid items-center container-mini",
        className
      )}
      {...props}
    >
      <div className="h-px bg-border" />
      <p className="text-sm bg-white absolute mx-auto w-fit inset-x-0 px-3">
        OR
      </p>
    </div>
  );
}
