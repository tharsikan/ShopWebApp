import { ComponentProps } from "react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";

type RemoveModProps = ComponentProps<"div">;

export function RemoveMod({ className, ...props }: RemoveModProps) {
  return (
    <>
      <p className="text-zinc-900 absolute top-3 font-medium">Remove as Mod</p>
      <hr className="my-6" />
      {/* #todo data */}
      <p className="text-zinc-900 text-base font-medium leading-tight">
        Once you remove as a mod, you will lose mod permissions and will be
        unable to access any mod tools for this community. Are you sure you wish
        to leave as a mod of this community?
      </p>
      {/* #done data end */}
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={"Leave"}
          className="!rounded-full h !font-bold !text-sm !px-[17px]"
        />
      </div>
    </>
  );
}

const managingTypes = [
  "Manage Users",
  "Manage Settings",
  "Manage Posts ",
  "Manage Rules",
];
