import * as Switch from "@radix-ui/react-toggle-group";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import GreyBtn from "../../buttons/GreyBtn";
import { Checkbox } from "../Create-Post/Listing/shipping";
import { Action } from "./action";
import { Breadcrumb } from "./breadcrumb";
import { DataTable } from "./data-table";
import { Input } from "./input";
import { Methods } from "./methods";
import { PaymentExt } from "./payment-ext";

type PaymentProps = ComponentProps<"div">;

export function Payment({ className, ...props }: PaymentProps) {
  return (
    <div className={cn(className)} {...props}>
      <Breadcrumb current="payment" />
      <br />
      <DataTable data={data} />
      <br />
      <h4 className="text-[17px] font-semibold my-2.5">Add tip</h4>
      <div className="border container-mini border-border rounded-md">
        <h3 className="text-black text-sm font-semibold p-4">
          Show your support for the team at Plant store
        </h3>
        <div className="p-4 bg-stone-300/30">
          <Switch.Root
            type="single"
            className="bg-white rounded-md divide-x divide-border grid items-center grid-cols-4"
          >
            {tips.map((el) => (
              <Switch.Item
                className="flex flex-col group justify-center items-center h-full py-2.5"
                value={el.amount.toString()}
              >
                <p className="text-black group-aria-checked:text-sky-700 text-[13px] font-semibold">
                  {el.amount === 0 ? "None" : <>{el.amount}%</>}
                </p>
                <p className="text-neutral-500 group-aria-checked:text-sky-600  text-[11px]">
                  {el.value}
                </p>
              </Switch.Item>
            ))}
          </Switch.Root>
          <div className="py-2.5 flex gap-3">
            <Input placeholder="Discount code" className="!max-w-full" />
            <GreyBtn
              label={"Apply"}
              className={"bg-[#696969]/60 text-white h-[42px] hover:text-black"}
            />
          </div>
          <p className="text-xs">Thank you, we appreciate it</p>
        </div>
      </div>
      <PaymentExt />
      <br />
      <h4 className="text-[17px] font-semibold my-2.5">Billing address</h4>
      <p className="container-mini text-sm mb-2">
        Select the address that matches your card of payment method.
      </p>
      <Methods className="container-mini" level={methods} />
      <br />
      <h4 className="text-[17px] font-semibold my-2.5">Remember me</h4>
      <div className="rounded-md border container-mini border-border p-2.5">
        <Checkbox label="Save my information for a faster checkout" />
      </div>
      <br />
      <Action
        to="confirmation"
        from="Shipping"
        fromLink="/checkout/shipping"
        toLink="/checkout/confirmation"
      />
    </div>
  );
}

const data = [
  {
    label: "Contact",
    value: "name@example.com",
  },
  {
    label: "Ship to",
    value: "151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada",
  },
  {
    label: "Method",
    value: "Canada Post Expedited Parcel · $10.00",
    extra: "1 to 7 business days",
  },
];

const tips = [
  { amount: 15, value: "$14.70" },
  { amount: 18, value: "$17.64" },
  { amount: 20, value: "$19.60" },
  { amount: 0 },
];

const methods = [
  {
    label: "Same as shipping address",
  },
  {
    label: "Use a different billing address",
  },
];
