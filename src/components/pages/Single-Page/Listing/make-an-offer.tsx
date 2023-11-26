import { ComponentProps } from "react";
import { cn } from "../../../../helpers/utils";
import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";
import DialogHeader from "../../../common/dialog-header";

interface MakeAnOfferProps extends ComponentProps<"div"> {}

export default function MakeAnOffer({ className, ...props }: MakeAnOfferProps) {
  return (
    <div className={cn("", className, {})} {...props}>
      <DialogHeader />
      <h2 className="text-center mb-3 text-black text-3xl font-semibold">
        Make An Offer
      </h2>
      <h4 className="text-center text-black text-base font-bold">
        Buy Now Price: $498.00
      </h4>
      <p className="text-center text-black text-base font-normal">
        3 Offers left
      </p>
      <p className=" text-center !text-red-500 text-[15px] font-semibold mt-8 mb-10">
        Your Offer here{" "}
      </p>

      {/* <div className="h-px max-w-[240px] bg-black/50 ml-[50%] -translate-x-1/2 mb-5" /> */}
      <input
        type="text"
        className="block max-w-[280px] ml-[50%] -translate-x-1/2 mb-5 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 "
        style={{ textIndent: "30%" }}
      />

      <div className="flex items-center justify-center gap-3">
        {["$ 490", "$ 490", "$ 490"].map((el) => (
          <YellowBtn key={el} label={el} className="px-4 rounded-xl" />
        ))}
      </div>

      <textarea
        placeholder="Add a comment"
        rows={6}
        className="w-full md:w-[460px] p-3 mt-8 bg-zinc-100 rounded-[11px] border outline-accentYellow-500 border-slate-400/20"
      />
      <GradientBtn
        label={"Submit Offer"}
        className="mx-auto block [&_*]:text-white mt-5 mb-10"
      />
      <p className="text-center md:w-[460px] text-zinc-600 text-sm font-medium">
        Best Offer lets you offer the seller a price you’re willing to pay for
        the item. The seller can accept, reject, or counter your offer by
        suggesting another price.
      </p>
    </div>
  );
}
