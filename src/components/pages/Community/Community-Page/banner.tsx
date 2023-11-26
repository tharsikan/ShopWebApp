import { HTMLAttributes } from "react";
import { cn } from "../../../../helpers/utils";
import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Banner({ className, ...props }: BannerProps) {
  return (
    <>
      <div className={cn("md:hidden", className, {})} {...props}>
        <div className="relative">
          <img
            src="https://www.figma.com/file/mVoqAWE5gPKDvmyKTivM9M/image/b0478ca7f364a7c461b0d95b814fb2abb0c3adea"
            alt=""
            className="h-56 w-full object-cover"
          />
          <img
            src="https://www.figma.com/file/mVoqAWE5gPKDvmyKTivM9M/image/882c503e3c717ed7ee04101c3b52f961402c131e"
            alt=""
            className="rounded-full absolute inset-x-0 mx-auto -translate-y-1/2 w-20 aspect-square ring-4 ring-white"
          />
        </div>
        <p className="text-center mt-12 font-bold">Robert Fox</p>
        <p className="text-center text-xs font-medium">r/photoshopbattles</p>
        <p className="mt-2 text-center text-zinc-500 text-xs font-medium">
          People tweeting stuff. We allow tweets from anyone.
        </p>
        <p className="max-w-[364px] mx-auto mt-3 text-center text-blue-700 text-sm font-medium">
          Twitter • microblogging • Social media •<br />
          Communication services • S&P 500 • Application
        </p>
        <div className="flex items-center justify-around mt-5">
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/flower.svg" alt="" />
            <div className="text-[11px] font-medium ">1,65,201</div>
          </div>{" "}
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/calendar.svg" alt="" />
            <div className="text-[11px] font-medium ">October 23, 2017</div>
          </div>
        </div>
        <YellowBtn label={"Join"} className="w-full mt-5" />
      </div>
    </>
  );
}
