import { Icon } from "@iconify/react";
import * as Select from "@radix-ui/react-select";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type SelectProps = ComponentProps<typeof Select.Trigger> & {
  options: { label: string }[];
  placeholder: string;
  wrapperClass?: string;
};

export function SelectComp({
  className,
  placeholder,
  wrapperClass,
  options,
  ...props
}: SelectProps) {
  return (
    <Select.Root>
      <Select.Trigger
        className={cn(
          "border text-xs text-left flex justify-between items-center border-border  p-2.5 rounded-md",
          className
        )}
        {...props}
        aria-label={placeholder}
      >
        <div>
          <p className="text-neutral-500 text-[10px]">{placeholder}</p>
          <Select.Value />
        </div>
        <Icon
          icon="tabler:chevron-down"
          className="border-l border-border w-6 pl-2"
        />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={cn(
            "bg-white p-2.5 border-border border rounded-md shadow-lg",
            wrapperClass
          )}
        >
          <Select.Viewport>
            {options.map((el) => (
              <Select.Item className="outline-none" value={el.label}>
                <Select.ItemText>{el.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
