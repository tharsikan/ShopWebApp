import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import { Action } from "./action";
import { Breadcrumb } from "./breadcrumb";
import { Methods } from "./methods";
import { DataTable } from "./data-table";

type ShippingProps = ComponentProps<"div">;

export function Shipping({ className, ...props }: ShippingProps) {
  return (
    <div className={cn(className)} {...props}>
      <Breadcrumb current="shipping" />
      <DataTable data={prevState} />
      <br />
      <h4 className="text-[17px] font-semibold my-2.5">Delivery Method</h4>
      <Methods className="container-mini" />
      <br />
      <Action
        from="Info"
        to="Payment"
        fromLink="/checkout/info"
        toLink="/checkout/payment"
      />
    </div>
  );
}

const prevState = [
  {
    label: "Contact",
    value: "name@example.com",
  },
  {
    label: "Ship to",
    value: "151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada",
  },
];
