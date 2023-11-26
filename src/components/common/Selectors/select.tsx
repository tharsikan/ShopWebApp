import * as RdxSelect from "@radix-ui/react-select";
import { HtmlHTMLAttributes, useState } from "react";

import { cn } from "./../../../helpers/utils";

export default function Select({
  options,
  ...props
}: {
  options: {
    label: string;
    action?: string;
  }[];
  wAuto?: boolean;
  sm?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState(props.placeholder);
  return (
    <div className="relative">
      <RdxSelect.Root onValueChange={setValue}>
        <RdxSelect.Trigger
          className={cn(
            " relative outline-none h-12 w-56 bg-neutral-100 rounded-lg border border-slate-200 gap-4 px-3.5 flex capitalize items-center whitespace-nowrap justify-between text-xs font-medium leading-[18px]",
            { "w-36": props.sm, "w-auto lg:w-56": props.wAuto },
            props.className
          )}
        >
          <RdxSelect.Value className="whitespace-nowrap">
            {value}
          </RdxSelect.Value>
          <RdxSelect.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </RdxSelect.Icon>
        </RdxSelect.Trigger>

        <RdxSelect.Portal>
          <RdxSelect.Content
            position="popper"
            className={cn(
              "rounded-lg border border-slate-200 px-3.5 bg-white w-56 ",
              { "w-36": props.sm, "max-sm:w-36": props.wAuto }
            )}
          >
            <RdxSelect.ScrollUpButton />
            <RdxSelect.Viewport className="capitalize py-2">
              {options.map((_) => (
                <RdxSelect.Item
                  className="outline-none py-2 cursor-pointer"
                  value={_.label}
                >
                  <RdxSelect.ItemText>{_.label}</RdxSelect.ItemText>
                </RdxSelect.Item>
              ))}
            </RdxSelect.Viewport>
            <RdxSelect.ScrollDownButton />
          </RdxSelect.Content>
        </RdxSelect.Portal>
      </RdxSelect.Root>
    </div>
  );
}
