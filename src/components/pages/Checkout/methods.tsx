import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type MethodsProps = ComponentProps<"div"> & { level?: any[] };

export function Methods({ className, ...props }: MethodsProps) {
  return (
    <RadioGroup.Root
      defaultValue={props.level?.[0].label || level[0].label}
      className={cn(
        "flex flex-col border rounded-md divide-y divide-border border-border items-start",
        className
      )}
    >
      {(props.level || level).map((el) => (
        <div className="flex items-center w-full p-3.5 gap-2.5">
          <RadioGroup.Item
            id={el.label}
            value={el.label}
            className="aspect-square h-4 peer w-4 rounded-full border aria-checked:bg-[#1773B0]"
          >
            <RadioGroup.Indicator className="after:bg-white relative flex aspect-square h-full w-full items-center justify-center after:block after:h-1 after:w-1 after:rounded-full after:content-['']" />
          </RadioGroup.Item>
          <label
            htmlFor={el.label}
            className="text-xs grow cursor-pointer peer-aria-checked:[&_p]:text-[#1773B0] peer-aria-checked:[&_svg]:text-[#1773B0] gap-2 items-center"
          >
            <div className="flex w-full">
              <Icon icon={el.icon} className="text-xl mr-2" />{" "}
              <p className="text-zinc-900 text-sm font-semibold grow">
                {el.label}
              </p>
              <p className="text-zinc-900 text-sm font-semibold ">{el.price}</p>
            </div>
            <p className="text-neutral-500">{el.text}</p>
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}

const level = [
  {
    label: "Canada Post Expedited Parcel",
    text: "1 to 7 business days",
    price: "$10.00",
  },
  {
    label: "Canada Post Xpresspost",
    text: "1 to 3 business days",
    price: "$15.00",
  },
  {
    label: "Canada Post Priority",
    text: "1 to 3 business days",
    price: "$20.00",
  },
];
