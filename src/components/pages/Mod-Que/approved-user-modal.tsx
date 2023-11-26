import { ComponentProps } from "react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";

type ApprovedUserModalProps = ComponentProps<"div"> & { confirm?: boolean };

export function ApprovedUserModal({
  className,
  confirm,
  ...props
}: ApprovedUserModalProps) {
  return (
    <>
      <p className="text-zinc-900 absolute top-3 font-medium">
        {confirm ? "Confirm" : "Add approved user"}
      </p>
      <hr className="my-6" />
      {confirm ? (
        <p className="text-zinc-900 font-medium leading-tight">
          Are you sure you want to remove this user as an approved user?
        </p>
      ) : (
        <>
          <div className="text-zinc-900 text-xs font-medium mb-1">
            Enter Username
          </div>
          <input
            placeholder="Enter Username"
            className="h-7 relative rounded border w-full px-2 border-gray-100"
          />
        </>
      )}
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={confirm ? "Remove User" : "Add User"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </>
  );
}
