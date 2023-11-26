import { ComponentProps } from "react";

import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";
import Switch from "../../common/Switch";

type PostsProps = ComponentProps<"div">;

export function Posts({ className, ...props }: PostsProps) {
  return (
    <Card className={cn("p-6", className)}>
      <p className="md:text-[28px] text-xl font-semibold">Posts Settings</p>
      <hr className="border-slate-400/20 flex-1 mt-6" />
      <br />
      <p className=" text-neutral-400 font-semibold  uppercase">
        Types of Posts
      </p>
      <div className="space-y-3 mt-2 md:w-5/6">
        {types.map((el) => (
          <div key={el.label} className="flex items-center justify-between">
            <h4 className="md:text-xl text-base font-semibold">{el.label}</h4>
            <Switch label={el.label} className="hidden" />
          </div>
        ))}
      </div>
    </Card>
  );
}

const types = [
  { label: "Allow Listings" },
  { label: "Allow Polls" },
  { label: "Allow New Gear " },
];
