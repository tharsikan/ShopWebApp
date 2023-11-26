import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Card from "../../common/Card";
import DialogWrapper from "../../common/dialog-wrapper";
import { AddRule } from "./add-rule";
import { DeleteRule } from "./delete-rule";

type RulesProps = ComponentProps<"div">;

export function Rules({ className, ...props }: RulesProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-slate-800  text-xl md:text-[29px] font-bold ">
          Community Rules
        </h2>
        <DialogWrapper
          wrapperClassName="md:min-w-[500px]"
          className="w-fit"
          content={<AddRule />}
        >
          <GradientBtn label={"Add Rule"} />
        </DialogWrapper>
      </div>
      <br />
      <p className="text-gray-500 text-xl">Rules</p>

      <div className="space-y-4">
        {rules.map((el, idx) => (
          <Card className="border  px-4 py-4 rounded-lg">
            <div key={el} className="flex gap-2 md:gap-4 items-center">
              <span className="md:w-16 shrink-0 text-center text-stone-700 text-md md:text-xl font-semibold">
                {idx + 1}
              </span>
              <h5 className="text-slate-800 text-sm md:text-xl  font-medium">
                {el}
              </h5>
              <DialogWrapper
                wrapperClassName="md:min-w-[500px]"
                className="w-fit"
                content={<AddRule editMode />}
              >
                <button className="md:w-7 w-5 aspect-square grid place-content-center bg-zinc-700 rounded-full">
                  <Icon icon={"mdi:edit-outline"} className="text-white" />
                </button>
              </DialogWrapper>
              <DialogWrapper
                wrapperClassName="md:min-w-[500px]"
                className="w-fit"
                content={<DeleteRule />}
              >
                <button className="md:w-7 w-5 aspect-square grid place-content-center bg-red-500 rounded-full">
                  <Icon icon={"lucide:x"} className="text-white" />
                </button>
              </DialogWrapper>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}

const rules = [
  "Set a reminder beforehand",
  "Find a location",
  "Screenshot the address",
  "Book the tickets",
  "Find out the parking",
  "Call them",
];
