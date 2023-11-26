import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn";
import { Input } from "./input";

type PaymentExtProps = {};
export function PaymentExt({ ...props }: PaymentExtProps) {
  const [state, setState] = useState("credit");
  return (
    <>
      <br />
      <h4 className="text-[17px] font-semibold my-2.5">Payment</h4>
      <p className="container-mini text-sm mb-2">
        All transactions are secure and encrypted.
      </p>
      <RadioGroup.Root
        className="flex container-mini flex-col border rounded-md divide-y divide-border border-border items-start"
        defaultValue="credit"
        onValueChange={(x) => setState(x)}
      >
        <div className="w-full">
          <div className="flex items-start w-full p-3.5 gap-2.5">
            <RadioGroup.Item
              value="credit"
              className="aspect-square h-4 peer w-4 rounded-full border aria-checked:bg-[#1773B0]"
            >
              <RadioGroup.Indicator className="after:bg-white relative flex aspect-square h-full w-full items-center justify-center after:block after:h-1 after:w-1 after:rounded-full after:content-['']" />
            </RadioGroup.Item>
            <label
              htmlFor="credit"
              className="text-xs -mt-0.5 grow cursor-pointer peer-aria-checked:[&_p]:text-[#1773B0] peer-aria-checked:[&_svg]:text-[#1773B0] gap-2 items-center"
            >
              <div className="flex w-full">
                <p className="text-zinc-900 text-sm font-semibold grow">
                  Credit card
                </p>
                <div className="flex gap-2.5 text-[11px] text-neutral-500 flex-wrap">
                  {["visa", "mastercard", "paypal"].map((img) => (
                    <img
                      alt={img}
                      width={35}
                      height={22}
                      key={img}
                      src={`/assets/vectors/common/${img}.svg`}
                    />
                  ))}{" "}
                  and more...
                </div>
              </div>
            </label>
            {/* credit card boxes */}{" "}
          </div>
          <div
            className={cn(
              "bg-stone-300/30 space-y-3.5 p-3.5",
              state === "credit" ? "" : "hidden"
            )}
          >
            <Input full placeholder="Name on card" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="relative">
                <Icon
                  icon="uil:lock"
                  className=" absolute inset-y-0 my-auto right-3 text-xl text-zinc-500"
                />
                <Input full placeholder="Card number" />
              </div>
              <Input full placeholder="Expiration date (MM / YY)" />
              <Input full placeholder="Zip Code" />
              <div className="relative">
                <Icon
                  icon="ph:question"
                  className=" absolute inset-y-0 my-auto right-3 text-xl text-zinc-500"
                />
                <Input full placeholder="Security code" />
              </div>
            </div>
          </div>
          <div className="flex items-start w-full p-3.5 gap-2.5">
            <RadioGroup.Item
              value="paypal"
              className="aspect-square h-4 peer w-4 rounded-full border aria-checked:bg-[#1773B0]"
            >
              <RadioGroup.Indicator className="after:bg-white relative flex aspect-square h-full w-full items-center justify-center after:block after:h-1 after:w-1 after:rounded-full after:content-['']" />
            </RadioGroup.Item>
            <label
              htmlFor="paypal"
              className="text-xs -mt-0.5 grow cursor-pointer peer-aria-checked:[&_p]:text-[#1773B0] peer-aria-checked:[&_svg]:text-[#1773B0] gap-2 items-center"
            >
              <div className="flex w-full">
                <img alt="paypal" src="/assets/vectors/payment/paypal.svg" />
              </div>
            </label>
          </div>
          <div
            className={cn(
              "bg-stone-300/30 space-y-3.5 p-3.5",
              state === "paypal" ? "" : "hidden"
            )}
          >
           <GradientBtn label={"Continue To Paypal"} />
          </div>
        </div>
      </RadioGroup.Root>
    </>
  );
}
