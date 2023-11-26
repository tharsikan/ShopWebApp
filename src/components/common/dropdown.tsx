import { Icon } from "@iconify/react";
import * as Popover from "@radix-ui/react-popover";

import { HTMLAttributes, useEffect, useState } from "react";


interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  options: { icon?: any | undefined; label: string }[];
}

export default function DropdownContainer({
  className,
  options,
  ...props
}: DropdownProps) {
  const [value, setValue] = useState([
    "Select Category",
    "/assets/imgs/home/general.png",
  ]);

  // useEffect(() => {
  //   setValue(defaultValue);
  // }, [defaultValue]);
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          {" "}
          <button className="flex  items-center gap-3 p-3 border rounded-md h-11 bg-zinc-100 border-slate-400/20">
            <img className="h-6 w-6" src={value[1]} alt="" />
            <p className="text-lg font-bold max-md:hidden">{value[0]}</p>
          </button>
        </Popover.Trigger>

        <Popover.Content className="z-50 mt-1 scrollbar-hide rounded shadow-xl w-full max-h-[500px] overflow-y-auto  ">
          <div className="bg-white rounded divide-y ">
            {options?.map((_) => (
              <div
                key={_.label}
                className="flex items-center gap-3 px-3 py-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => setValue([_.label, _.icon])}
              >
                <img className="h-6 w-6" src={_.icon} alt="" />
                <p className="font-medium capitalize  text-zinc-700">
                  {_.label}
                </p>
              </div>
            ))}
          </div>
        </Popover.Content>
      </Popover.Root>
    </>
  );
}
