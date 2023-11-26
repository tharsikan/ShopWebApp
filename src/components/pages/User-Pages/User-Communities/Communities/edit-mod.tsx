import { ComponentProps } from "react";
import { cn } from "../../../../../helpers/utils";
import GradientBtn from "../../../../buttons/GradientBtn";
import DialogHeader from "../../../../common/dialog-header";

type EditModProps = ComponentProps<"div">;

export default function EditMod({ className, ...props }: EditModProps) {
  return (
    <div className={cn("", className, {})} {...props}>
      <DialogHeader />
      <h2 className="text-center mb-3 text-black text-3xl font-semibold">
        Edit Mods
      </h2>
      <h4 className="text-center text-black text-base font-bold">R/NYCJazz</h4>
      <p className="text-center text-black text-base font-normal">
        3 Max Moderators
      </p>
      <input
        type="email"
        placeholder="User@example.com"
        className="w-full md:w-[460px] h-12 px-3 mt-4 bg-zinc-100 rounded-[11px] border outline-accentYellow-500 border-slate-400/20"
      />
      <GradientBtn label={"Invite User"} className="mx-auto block mt-3 mb-10" />
      <section className=" mt-6 space-y-5 ">
        {Array.from(Array(3)).map((_, idx) => (
          <MemberCard {..._} idx={idx + 1} />
        ))}
      </section>
    </div>
  );
}

const MemberCard = ({ idx }: { idx: number }) => {
  return (
    <div className="border  px-4 py-2 rounded-lg">
      <div className="flex items-center gap-2.5 text-black ">
        <p className="w-5 text-sm font-medium">0{idx}</p>
        <img
          alt=""
          className="w-[54px] h-[54px] rounded-[108.49px] shadow"
          src="/assets/imgs/home/mark.png "
        />
        <div className="grow">
          <p className="text-base font-semibold ">justpete003</p>
          <p className=" text-xs font-semibold">Admin</p>
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/flower.svg" alt="" />
            <div className="text-[11px] font-medium ">1,65,201</div>
          </div>
        </div>
        <GradientBtn label={"remove"} className={"h-8 px-4"} />
      </div>
    </div>
  );
};
