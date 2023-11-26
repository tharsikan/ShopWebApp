import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type InputProps = ComponentProps<"input"> & { full?: boolean };

export function Input({ className, full, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "placeholder:text-neutral-500 p-2.5 rounded-md border w-full block border-border text-sm",
        { "container-mini": !full },
        className
      )}
      {...props}
    />
  );
}
