import { Icon } from "@iconify/react";
import * as Select from "@radix-ui/react-select";

import { ComponentProps, useState } from "react";

import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import { Privacy } from "../../common/privacy";
import {
  soloCategoriesData,
  soloSubCategoriesData,
} from "../Home/Categories/categoriesData";

interface CreateCommunityModalProps extends ComponentProps<"div"> {}

export default function CreateCommunityModal({
  className,
  ...props
}: CreateCommunityModalProps) {
  const [state, setState] = useState({});
  return (
    <div className={cn("", className, {})} {...props}>
      <p className="text-zinc-900 font-medium">Create a community</p>
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
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-8  mt-4">
        <div className=" text-stone-500 mb-1 text-[8px] font-semibold ">
          Categories
        </div>
        <div className=" text-stone-500 mb-1 text-[8px] font-semibold ">
          Sub-Categories
        </div>
        {[categories, subCategories].map((item) => (
          <Select.Root
            onValueChange={(v) =>
              setState((p) => ({ ...p, [item.placeholder]: v }))
            }
            key={item.placeholder}
          >
            <Select.Trigger
              className={cn(
                "p-2.5 border group aria-expanded:border-accentYellow-500 flex items-center justify-between rounded-md"
              )}
            >
              <Select.Value className="whitespace-nowrap">
                {/* @ts-ignore */}
                {state[item.placeholder] || item.placeholder}
              </Select.Value>
              <Select.Icon className="group-aria-expanded:text-accentYellow-500 group-aria-expanded:scale-y-[-1] duration-700 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                position="popper"
                className={cn(
                  "bg-white w-[230px] border border-zinc-300  z-[10001] -mt-1 rounded-b-lg overflow-auto"
                )}
              >
                <Select.Viewport>
                  {item.option.map((_) => (
                    <Select.Item
                      className="p-2.5 hover:bg-accentYellow-500 hover:text-white text-stone-500"
                      value={_}
                      key={_}
                    >
                      {_}
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        ))}
      </div>
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

const categories = {
  placeholder: "Keys/Synths/Pianos",
  option: soloCategoriesData,
};

const subCategories = {
  placeholder: "Gigging/Live",
  option: soloSubCategoriesData,
};
