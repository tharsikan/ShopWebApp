import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import BlueOutlineBtn from "../../buttons/BlueOutlineBtn/BlueOutlineBtn";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Card from "../../common/Card/Card";
import { Popover } from "../../common/popover";
import { Privacy } from "../../common/privacy";
import Uploader from "../../common/uploader";

type SettingProps = ComponentProps<"div">;

export function Setting({ className, ...props }: SettingProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-[28px] font-semibold">
          Community Settings
        </p>
        <GradientBtn
          label={"Save Changes"}
          className={"md:px-6 md:w-[15%] md:block mb-1 hidden"}
        />
      </div>
      <div className="flex">
        <hr className="border-slate-400/20 flex-1 " />
      </div>
      <p className="my-3 text-neutral-400 text-base font-semibold uppercase">
        Community Profile
      </p>
      <div className="flex items-center justify-between">
        <Heading label="Community Name" sub="TalkBass" />
        {/* <BlueOutlineBtn className="!h-10">Change</BlueOutlineBtn> */}
      </div>
      <hr className="border-slate-400/20 my-6" />{" "}
      <div className="flex items-center justify-between">
        <Heading
          label="Sub Category"
          sub="This will help Muzfi recommend your community to relevant users."
        />
        <Popover label="Gigging">No content broh</Popover>
      </div>
      <br />
      <Heading
        label="Community Description"
        sub="This is how new members come to understand your community."
      />
      <textarea
        placeholder="About (optional)"
        className="h-[160px] w-full p-2.5 mt-3 bg-stone-50 rounded-md border border-slate-400 border-opacity-20"
      />
      <p className="text-neutral-400 text-[10px] font-medium ">
        200 Characters remaining
      </p>{" "}
      <hr className="border-slate-400/20 my-6" />
      <div className="flex items-center justify-between">
        <Heading
          label="Country"
          sub="This is your primary location. Learn more  "
        />
        <Popover label="USA">No content broh</Popover>
      </div>
      <hr className="border-slate-400/20 my-6" />
      <p className=" text-neutral-400 text-base font-semibold uppercase">
        Images
      </p>
      <Heading
        label="Community Image"
        sub="Images must be .png or .jpg format"
      />
      <Uploader className="aspect-square mt-5 " />
      <Privacy />
      <div className="flex gap-1 mt-20 grid-2">
        <button className="border-current px-4 border rounded-md inline-flex gap-1 md:text-sm font-semibold leading-tight text-white capitalizew-full bg-red-600 items-center text-xs">
          <Icon icon="material-symbols:delete-outline" className="text-lg" />
          Delete Community
        </button>
        <GradientBtn label={"Save Changes"} className={"px-10"} />
      </div>
    </Card>
  );
}

function Heading({ label, sub }: { label: string; sub: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold ">{label}</h3>
      <p className="text-neutral-400 -mt-1 text-md font-medium ">{sub}</p>
    </div>
  );
}
