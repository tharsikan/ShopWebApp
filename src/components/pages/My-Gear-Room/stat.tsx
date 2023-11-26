import { HTMLAttributes } from "react";
import { cn } from "../../../helpers/utils";

export const Stat = ({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) => {
  const data = [
    {
      value: 7,
      label: "Posts",
    },
    {
      value: 34,
      label: "# gear",
    },
    {
      value: 20,
      label: "For sale",
    },
  ];
  return (
    <div {...props} className={cn("gap-3.5 flex", className, {})}>
      {data.map((_) => (
        <div
          className="w-full p-1 md:p-3 border flex flex-col justify-center rounded-lg bg-yellow-50/60 border-amber-100"
          key={_.label}
        >
          <p className="md:text-xl text-base font-semibold text-center ">
            {_.value}
          </p>
          <p className="md:text-xs text-2xs font-medium text-center">
            {_.label}
          </p>
        </div>
      ))}
    </div>
  );
};
