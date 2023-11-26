import { ComponentProps } from "react";

import { Icon } from "@iconify/react";
import * as RdxPopover from "@radix-ui/react-popover";
import { cn } from "../../helpers/utils";

type PopoverProps = ComponentProps<"div"> & { label: string };

export function Popover({
  className,
  children,
  label,
  ...props
}: PopoverProps) {
  return (
    <RdxPopover.Root>
      <RdxPopover.Trigger asChild>
        <button
          className={cn(
            "flex items-center gap-5 md:min-w-[210px] justify-between p-3 text-neutral-400 border rounded-md h-11 bg-zinc-100 border-slate-400/20",
            className
          )}
        >
          <p className=" text-sm font-medium">{label}</p>
          <Icon icon={"ri:arrow-up-s-line"} />
        </button>
      </RdxPopover.Trigger>

      <RdxPopover.Content className="z-50 mt-1 scrollbar-hide rounded shadow-xl w-full max-h-[500px] overflow-y-auto  ">
        {children}
      </RdxPopover.Content>
    </RdxPopover.Root>
  );
}
