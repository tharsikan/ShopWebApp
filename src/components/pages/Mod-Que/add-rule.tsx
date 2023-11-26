import { ComponentProps } from "react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import RedOutlineBtn from "../../buttons/RedOutlineBtn";
import { Privacy } from "../../common/privacy";

type AddRuleProps = ComponentProps<"div"> & { editMode?: boolean };

export function AddRule({ className, editMode, ...props }: AddRuleProps) {
  return (
    <>
      <p className="text-zinc-900 absolute top-3 font-medium">
        {editMode ? "Edit" : "Add"} Rule
      </p>
      <hr className="my-6" />
      <p className="text-zinc-900 font-medium">Rule</p>
      <input className="h-10 relative border w-full border-gray-100" />
      <p className="text-neutral-500 text-xs my-1">100 Characters remaining</p>
      <p className="text-zinc-900 text-xs font-medium">Applies to:</p>
      <Privacy level={level} className="my-2 gap-2" />
      <br />
      <p className="text-zinc-900 text-xs font-medium">Full Description</p>
      <textarea
        rows={6}
        className=" bg-white rounded border w-full border-gray-100"
      />
      <p className="text-neutral-500 text-xs my-1">5 00 Characters remaining</p>
      <div className="-mx-6 p-3.5 mt-10 -mb-6 flex items-center gap-2.5 bg-gray-100 ">
        {editMode && (
          <RedOutlineBtn className="rounded-full h-9 min-w-fit">
            Delete
          </RedOutlineBtn>
        )}
        <div className="grow" />
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={editMode ? "Update" : "Create Community"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </>
  );
}

const level = [
  {
    label: "Posts & Comments ",
  },
  {
    label: "Posts only",
  },
  {
    label: "Comments only",
  },
];
