import { Icon } from "@iconify/react";
import * as Select from "@radix-ui/react-select";

import { ComponentProps, useState } from "react";
import { cn } from "../../../../../../helpers/utils";
import GradientBtn from "../../../../../buttons/GradientBtn";
import { Privacy } from "../../../../../common/privacy";



interface CreateCommunityModalProps extends ComponentProps<"div"> {}

export default function ReportModal({
  className,
  ...props
}: CreateCommunityModalProps) {
  const [state, setState] = useState({});
  return (
    <div className={cn("", className, {})} {...props}>
      <p className="text-zinc-900 font-medium">Report Issue</p>
      <div className="h-px bg-neutral-500/30 my-4" />
      <p className="text-zinc-900  font-medium ">Name</p>
      <div className="text-neutral-500 text-xs font-normal flex gap-1 items-center leading-none">
        Community names including capitalization cannot be changed.
        <Icon icon={"material-symbols:info-outline"} />
      </div>
      <input
        defaultValue={"r/"}
        className="w-[496px] max-md:w-full mt-6 mb-4 h-10 px-3 text-neutral-400 outline-gray-500 bg-white rounded border border-gray-100"
      />
      <p className="text-neutral-500 text-xs font-normal">
        21 Characters remaining
      </p>
     
      <Privacy />
      <div className="-mx-6 p-3.5 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={"Create Community"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </div>
  );
}

