import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { ComponentProps } from "react";
import { cn } from "../../helpers/utils";

type PrivacyProps = ComponentProps<"div"> & { level?: any[] };

export function Privacy({ className, ...props }: PrivacyProps) {
  return (
    <RadioGroup.Root
      defaultValue={props.level?.[0].label || level[0].label}
      className={cn("flex flex-col items-start gap-4 my-8", className)}
    >
      {(props.level || level).map((el) => (
        <div className="flex items-center gap-2.5">
          <RadioGroup.Item
            id={el.label}
            value={el.label}
            className="aspect-square h-4 w-4 rounded-full border aria-checked:bg-zinc-500"
          >
            <RadioGroup.Indicator className="after:bg-white relative flex aspect-square h-full w-full items-center justify-center after:block after:h-1 after:w-1 after:rounded-full after:content-['']" />
          </RadioGroup.Item>
          <label
            htmlFor={el.label}
            className="text-xs cursor-pointer flex gap-2 items-center"
          >
            <Icon icon={el.icon} className="text-zinc-500 text-xl" />{" "}
            <span className="text-zinc-900 text-sm font-medium ">
              {el.label}
            </span>
            {el.text}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}

const level = [
  {
    icon: "mingcute:user-2-fill",
    label: "Public",
    text: "Anyone can view, post, and comment to this community",
  },
  {
    icon: "fluent:eye-12-filled",
    label: "Restricted",
    text: "Anyone can view this community, but only approved users can post",
  },
  {
    icon: "teenyicons:lock-small-solid",
    label: "Private",
    text: "Only approved users can view and submit to this community",
  },
];
