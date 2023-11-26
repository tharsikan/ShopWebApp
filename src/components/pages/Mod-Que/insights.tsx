import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import Card from "../../common/Card/Card";

type InsightsProps = ComponentProps<"div">;

export function Insights({ className, ...props }: InsightsProps) {
  return (
    <Card className={cn("p-8", className)}>
      <div className="rounded-lg border py-3 px-6  border-slate-400/20">
        <div className="flex max-md:flex-col gap-2 md:items-center justify-between">
          <div>
            <h3 className="md:text-[22px] text-xl font-semibold">
              Community Growth
            </h3>
            <h6 className="md:text-lg font-semibold ">Updated 09.21.2023</h6>
          </div>
          <div className="rounded-lg border min-w-[200px] p-3 text-zinc-500 border-slate-400/20">
            <Icon icon={"bx:map"} className="inline-block mr-1" />
            <span className=" text-xs ">Time</span>
            <p className="text-sm font-medium text-black">Last 7 Days</p>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-16 md:mb-32 mt-4 md:mt-20 md:grid-cols-4 gap-[5%] mx-[5%]">
          {data.map((el) => (
            <div
              className="bg-yellow-50 rounded-lg border py-4 border-amber-100"
              key={el.label}
            >
              <h5 className="text-center text-xl md:text-[28px] font-semibold">
                {el.value}
              </h5>
              <h4 className="text-center max-md:text-sm font-medium leading-tight">
                {el.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
const data = [
  { value: "7,202", label: "Views" },
  { value: "73", label: "Uniques on Avg." },
  { value: "246", label: "Subscribed" },
  { value: "702", label: "Unsubscribed" },
];
