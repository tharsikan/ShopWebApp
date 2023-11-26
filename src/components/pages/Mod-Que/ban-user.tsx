import * as Select from "@radix-ui/react-select";
import { ComponentProps, ElementRef, useEffect, useRef, useState } from "react";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn";
import RedOutlineBtn from "../../buttons/RedOutlineBtn";
import Switch from "../../common/Switch";
import { Input } from "../Checkout/input";

type BanUserProps = ComponentProps<"div"> & { editMode?: boolean };

export function BanUser({ className, editMode, ...props }: BanUserProps) {
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const [triggerOffset, setTriggerOffset] = useState(0);
  const triggerRef = useRef<ElementRef<typeof Select.Trigger>>(null);
  useEffect(() => {
    setTriggerOffset(triggerRef.current?.offsetWidth!);
  }, []);

  return (
    <>
      <p className="text-zinc-900 absolute font-medium top-3 ">
        {!editMode ? "Ban a user:" : "Edit ban for: u/MikeJazz"}
      </p>
      <hr className="my-6" />
      {!editMode && (
        <>
          <p className="text-zinc-900 text-xs font-medium leading-tight">
            Enter Username
          </p>
          <Input
            className="!max-w-full mt-1 h-9 text-xs"
            placeholder="Enter Username"
          />
        </>
      )}

      <p className="text-zinc-900 mt-2 mb-1 text-xs font-medium leading-tight">
        Reason for ban:
      </p>
      <Select.Root onValueChange={(v) => setSelectedOption(v)}>
        <Select.Trigger
          ref={triggerRef}
          className={cn(
            "px-2.5 py-2 border group w-full aria-expanded:border-accentYellow-500 flex items-center justify-between rounded-md"
          )}
        >
          <Select.Value className="whitespace-nowrap">
            {selectedOption}
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
            style={{ width: triggerOffset }}
            className={cn(
              "bg-white border border-zinc-300  z-[10001] -mt-1 rounded-b-lg"
            )}
          >
            <Select.Viewport className="!w-full">
              {data.map((_) => (
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
      <br />
      <p className="text-zinc-900 mt-2 mb-1 text-xs font-medium leading-tight">
        For How Long?
      </p>
      <section className="flex gap-3 md:gap-7">
        <div className="rounded border overflow-hidden border-gray-100 inline-flex items-center w-fit divide-x">
          <input
            className="h-7 w-12 outline-none px-2 text-center"
            type="number"
          />
          <p className="text-neutral-500 text-xs h-7 text-center inline-grid items-center w-12">
            Days
          </p>
        </div>
        <Switch
          wrapperClass="scale-90 origin-left"
          className="text-zinc-900 text-xs font-medium"
          label="Permanent"
        />
      </section>
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex items-center gap-2.5 bg-gray-100 ">
        {editMode && (
          <RedOutlineBtn className="rounded-full h-9 min-w-fit">
            Unban
          </RedOutlineBtn>
        )}
        <div className="grow" />
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={editMode ? "Edit Ban" : "Ban User"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </>
  );
}

const data = [
  "None",
  "Spam",
  "Threatening, Harassing, or Inciting Violence",
  "Personal And Confidential Information",
];
