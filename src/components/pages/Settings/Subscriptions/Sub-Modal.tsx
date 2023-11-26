import { Icon } from "@iconify/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";

import { ComponentProps, useState } from "react";
import { cn } from "../../../../helpers/utils";
import GradientBtn from "../../../buttons/GradientBtn";
import JumboHeader from "../../../common/JumboHeader";
import { Privacy } from "../../../common/privacy";
import { PaymentExt } from "../../Checkout/payment-ext";

interface SubModalProps extends ComponentProps<"div"> {}

export default function SubModal({ className, ...props }: SubModalProps) {
  const [state, setState] = useState(0);
  return (
    <div className={cn("", className, {})} {...props}>
      <JumboHeader
        title="Buy Muzfi Premium!"
        des="You're purchasing Muzfi
Premium for yourself"
      />
      <div className="h-px bg-neutral-500/30" />

      <PaymentExt />
      <p>Total: ${state === 1 ? "4.99/monthly" : "47.90/yearly"}</p>
      <p className="font-normal text-xs">
        By completing your purchase, you are agreeing to automatic payments for
        Muzfi Premium and Muzfi’s User Agreement and Privacy Policy. Your
        Premium subscription will auto- renew monthly for $
        {state === 1 ? "4.99" : "47.90"} (plus tax where applicable). Cancel
        anytime in User Settings. Cancel at least 24 hours before your
        subscription ends to avoid getting charged for the next month. No
        partial refunds.
      </p>
      <div className="-mx-6 p-3.5 -mb-6 flex justify-end items-center gap-2.5 bg-gray-100 ">
        <button className="text-zinc-600 !text-sm border border-current py-2 px-[17px]  rounded-full font-bold ">
          Cancel
        </button>
        <GradientBtn
          short
          label={"Complete Purchase"}
          className="!rounded-full !font-bold !text-sm !px-[17px]"
        />
      </div>
    </div>
  );
}

const data = [
  {
    label: "Debit or Credit Card",
    payment: ["visa", "mastercard", "mastero", "american-express"],
  },
  {
    label: "Your PayPal Account",
    extra: <>Login into your paypal account </>,
    payment: ["paypal"],
  },
];
