import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type CartCardProps = ComponentProps<"div">;

export function CartCard({ className, ...props }: CartCardProps) {
  return (
    <div className={cn("flex md:gap-6 gap-3", className)} {...props}>
      <img
        width={128}
        className="rounded-lg max-md:h-[84px]  aspect-square"
        src="/assets/imgs/home/pete.png"
        alt=""
      />
      <div className="text-sm max-md:leading-snug max-md:text-[8px]">
        <p className="font-semibold text-base max-md:text-xs max-md:mb-1">
          intern INT-38C-BK Acoustic Rosewood Right Hand Orientation
        </p>
        <p className="text-neutral-400">
          Product code : <span className=" font-semibold">MLSB</span>
        </p>
        <p className="text-neutral-400">
          Used : <span className=" font-semibold">Used By</span>
        </p>
        <p className="text-indigo-600 ">Holy Heck Music</p>
        <p className="text-neutral-500">Sonoma, CA, United States</p>
      </div>
      <Icon icon={"ph:x"} className="md:hidden shrink-0" />
    </div>
  );
}
