import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import YellowBtn from "../../buttons/YellowBtn";
import Card from "../../common/Card/Card";
import { RatingStars } from "../Single-Page/Listing/details";
import About from "./about";
import { Stat } from "./stat";

export default function GearRoomProfile({
  store,
  communities,
  thread,
}: {
  store?: boolean;
  communities?: boolean;
  thread?: boolean;
}) {
  const { pathname } = useLocation();
  return (

    <>
      <Card>
        <p className=" md:text-[22px] font-semibold">
          {store
            ? communities
              ? "My Communities "
              : pathname.includes("reviews")
              ? "My Reviews"
              : thread
              ? "My Threads"
              : pathname.includes("for-sale")
              ? "My Store"
              : pathname.includes("watchlist")
              ? "My Watchlist"
              : "My Store"
            : "Pierre’s Gear Room"}
        </p>
        <div className="flex max-md:flex-col gap-4 mt-4">
          <div className="flex gap-4">
            <img
              className="w-full max-w-[90px] md:max-w-[170px] rounded-lg aspect-square"
              src="/assets/imgs/home/pete.png"
              alt=""
            />
            <UserInfo className="md:hidden flex-1" />
          </div>
          <div className="flex flex-wrap max-md:flex-col justify-between md:items-center grow">
            <UserInfo className="max-md:hidden" />
            <Stat className="px-3 mt-3 basis-full" />
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:my-2 md:gap-1 w-full md:grid-cols-4 ">
          {data.map((_) => (
            <div
              key={_.label}
              className="flex flex-col items-center gap-1 my-2 md:my-4"
            >
              <div className="text-xs font-medium text-zinc-500">{_.label}</div>
              <_.Comp />
            </div>
          ))}
        </div>
      </Card>

      <About store={store} />
    </>
  );
}

const data = [
  {
    label: "MuzPoints",
    Comp: () => (
      <div className="flex items-center gap-1">
        <img src="/assets/vectors/common/flower.svg" alt="" />
        <div className="text-[11px] font-medium ">1,65,201</div>
      </div>
    ),
  },
  {
    label: "Calendar",
    Comp: () => (
      <div className="flex items-center gap-1">
        <img src="/assets/vectors/common/calendar.svg" alt="" />
        <div className="text-[11px] font-medium ">Jun. 18. 1998</div>
      </div>
    ),
  },
  {
    label: "Seller Rating",
    Comp: () => <RatingStars />,
  },
  {
    label: "Buyer Rating ",
    Comp: () => <RatingStars />,
  },
];

const action = [

  {
    icon: "mdi:user-block-outline",
    label: "Block User",
  },
  {
    icon: "ic:outline-report",
    label: "Report User",
  },
];

const Action = () => {
  return (
    <div className="flex md:my-3 md:justify-center gap-1.5 md:gap-7 ">
      {action.map((_) => (
        <button
          key={_.label}
          className="flex items-center border text-zinc-600 hover:bg-zinc-600/5 rounded-md border-zinc-600 py-2 md:py-2.5 px-1 md:px-3.5 justify-center md:gap-2.5 gap-1 w-full md:w-fit"
        >
          <Icon icon={_.icon} className="text-md shrink-0" />
          <p className="font-bold text-[9px] md:text-xs">{_.label}</p>
        </button>
      ))}
    </div>
  );
};

function UserInfo({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex w-full items-center gap-4", className)}>
      <div className="">
        <p className="md:text-lg text-xs font-semibold ">MR.keys121</p>

        <p className="flex items-center gap-1 text-[9px] md:text-xs font-medium text-neutral-400 md:mt-2">
          <Icon icon={"fluent:location-12-regular"} className="text-base" />{" "}
          Damascus, OR, United States3
        </p>
      </div>
      <YellowBtn
        className="px-4 md:scale-90 scale-[0.67] md:mr-3 origin-right"
        label={"Chat"}
      />
      {action.map((_) => (
        <button
          key={_.label}
          className="flex items-center border text-zinc-600 hover:bg-zinc-600/5 rounded-md border-zinc-600 py-1 md:py-2 px-1 md:px-3.5 justify-center md:gap-2.5 gap-1 w-full md:w-fit"
        >
          <Icon icon={_.icon} className="text-md shrink-0" />
          <p className="font-bold text-[9px] md:text-xs">{_.label}</p>
        </button>
      ))}

    </div>
  );
}
