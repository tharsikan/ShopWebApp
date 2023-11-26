import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ComponentProps, useState } from "react";
import { cn } from "../../../helpers/utils";
import GreyBtn from "../../buttons/GreyBtn";
import { Input } from "../Checkout/input";

type OrderSummaryMobProps = ComponentProps<"div">;

export function OrderSummaryMob({ className, ...props }: OrderSummaryMobProps) {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <motion.div
      layout
      className={cn("md:hidden bg-[#f5f5f5] -mx-8 my-3", className)}
    >
      <div className="flex items-center gap-1 py-3 border-y px-8 justify-between">
        <div
          className="flex items-center gap-1"
          role="button"
          onClick={() => setShowSummary((p) => !p)}
        >
          <Icon
            icon="fluent:cart-16-regular"
            className="text-lg text-sky-700"
          />
          <p className="text-sky-700 text-xs ">
            {showSummary ? "Hide" : "Show"} order summary
          </p>

          <Icon
            icon="tabler:chevron-up"
            className={cn("text-sky-700", { "rotate-180": !showSummary })}
          />
        </div>
        <p className="text-zinc-800 text-lg font-medium">$95.00</p>
      </div>
      {showSummary && (
        <div className="px-8 py-4">
          <div className="flex gap-3.5 items-center">
            <div className="relative w-fit ">
              <img
                className="w-16 aspect-square border rounded-md bg-white"
                src="https://www.figma.com/file/mVoqAWE5gPKDvmyKTivM9M/image/bd923c62ec9c1b8694e8c286100ac539066eb6f9"
                alt=""
              />
              <div className="grid place-content-center absolute -right-2 -top-2 rounded-full text-xs font-semibold bg-neutral-500 text-white aspect-square h-[21px]">
                1
              </div>
            </div>
            <div className="grow">
              <h4 className="text-zinc-800 text-sm font-semibold">
                Monstera Deliciosa
              </h4>
              <p className="text-neutral-500 text-xs">2 feet</p>
            </div>
            <h4 className="text-zinc-800 text-sm font-semibold">$100.00</h4>
          </div>
          <hr className="my-5" />{" "}
          <div className="flex gap-3">
            <Input placeholder="Discount code" className="!max-w-full" />
            <GreyBtn
              label={"Apply"}
              className={"bg-[#696969]/60 text-white h-[42px] hover:text-black"}
            />
          </div>
          <div className="text-zinc-800 mt-3.5 py-2 px-3 rounded bg-gray-200 gap-2 inline-flex items-center">
            <Icon icon={"fluent:tag-28-regular"} className="text-xl" />
            <p className="text-sm font-normal ">SPRINGSALE</p>
            <Icon icon={"ph:x"} className="" />
          </div>
          <hr className="my-5" />
          <section className="text-xs space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-black ">Subtotal</p>
              <p className="text-zinc-800 font-semibold ">$100.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-black ">Discount </p>{" "}
              <p className="text-neutral-500 ">Calculated at next step</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p className="text-black inline-flex gap-1">
                Shipping{" "}
                <Icon icon={"fluent:tag-28-regular"} className="text-lg" />
                <span className="font-normal ">SPRINGSALE</span>
              </p>
              <p className="text-zinc-800 font-semibold ">$10</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p className="text-black ">Taxes</p>
              <p className="text-zinc-800 font-semibold ">$5.00</p>
            </div>
            <hr />
            <div className="flex items-center gap-2">
              <p className="text-zinc-800 flex-1 text-[17px] font-semibold leading-relaxed">
                Total
              </p>
              <span className="text-neutral-500 text-xs">CAD</span>
              <p className="text-zinc-800 text-2xl font-semibold">$95.00</p>
            </div>
          </section>
        </div>
      )}
    </motion.div>
  );
}
