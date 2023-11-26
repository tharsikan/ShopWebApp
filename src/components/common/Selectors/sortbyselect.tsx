import * as RdxSelect from "@radix-ui/react-select";
import { HtmlHTMLAttributes, useState } from "react";
import { cn } from "../../../helpers/utils";

export default function SortbySelect({
  options,
  ...props
}: {
  options: {
    label: string;
    action?: string;
  }[];
  wrapperClass?: string;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState(props.placeholder);
  return (
    <div className={cn("relative", props.wrapperClass)}>
      <RdxSelect.Root onValueChange={setValue}>
        <RdxSelect.Trigger
          className={cn(
            " relative outline-none h-10 w-56 bg-accentGray-400 rounded-lg border border-slate-200 gap-4 px-3.5 flex capitalize items-center whitespace-nowrap justify-between text-xs font-medium leading-[18px]",
            props.className
          )}
        >
          <RdxSelect.Value className="whitespace-nowrap">
            Sort By: {value}
          </RdxSelect.Value>
          <RdxSelect.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            className="rounded-lg border border-slate-200 px-3.5 bg-white w-56 py-5"
          >
            <RdxSelect.ScrollUpButton />
            <RdxSelect.Viewport className="space-y-2 capitalize">
              {options.map((_) => (
                <RdxSelect.Item
                  className="outline-none font-medium cursor-pointer"
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
