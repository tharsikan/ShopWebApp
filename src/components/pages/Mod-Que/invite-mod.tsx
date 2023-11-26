import { ComponentProps } from "react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Switch from "../../common/Switch";

type InviteModProps = ComponentProps<"div"> & { edit?: true };

export function InviteMod({ className, edit, ...props }: InviteModProps) {
  return (
    <>
      <p className="text-zinc-900 absolute top-3 font-medium">
        {edit ? "Edit:" : "Invite Moderators"}
      </p>
      <hr className="my-6" />
      {/* #todo data */}
      {!edit && (
        <input
          placeholder="Enter Username"
          className="h-7 relative rounded border w-full px-2 border-gray-100"
        />
      )}
      <h4 className="text-zinc-900 text-xs font-semibold mt-5 mb-2">
        Give them access to:
      </h4>
      <div className="flex items-center justify-between">
        <h4 className="text-zinc-900 text-xs font-semibold">Everything</h4>
        <Switch
          label="everything"
          className="sr-only"
          wrapperClass="scale-50 origin-right"
        />
      </div>
      <p className="text-neutral-400 text-[8px] font-semibold uppercase">
        Limit Access to:
      </p>
      {managingTypes.map((el) => (
        <div className="flex items-center justify-between">
          <h4 className="text-zinc-900 text-xs font-semibold">{el}</h4>
          <Switch
            label={el}
            className="sr-only"
            wrapperClass="scale-50 origin-right"
          />
        </div>
      ))}
      {/* #done data end */}
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={edit ? "Save Changes" : "Invite New Mod"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
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
