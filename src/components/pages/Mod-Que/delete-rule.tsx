import { ComponentProps } from "react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";

type DeleteRuleProps = ComponentProps<"div">;

export function DeleteRule({ className, ...props }: DeleteRuleProps) {
  return (
    <>
      <p className="text-zinc-900 absolute top-3 font-medium">Delete Rule</p>
      <hr className="my-6" />
      <div className="text-zinc-900 font-medium">
        Are you sure you want to delete this rule?
      </div>{" "}
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={"Delete Rule"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </>
  );
}
