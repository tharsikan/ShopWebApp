import { ComponentProps } from "react";
import { cn } from "../../helpers/utils";

type DestroyBtnProps = ComponentProps<"button"> & { sm?: boolean };

export function DestroyBtn({ className, sm, ...props }: DestroyBtnProps) {
  return (
    <button
      className={cn(
        "min-w-[156px] h-11 bg-red-500 text-sm font-bold hover:bg-red-600 transition-all active:scale-95 text-white rounded-md ",
        { "h-7": sm },
        className
      )}
      {...props}
    />
  );
}
