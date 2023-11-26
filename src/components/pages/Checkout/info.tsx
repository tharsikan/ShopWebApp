import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import { Action } from "./action";
import { Breadcrumb } from "./breadcrumb";
import { Input } from "./input";
import { Methods } from "./methods";
import { OrDivider } from "./or-divider";
import { SelectComp } from "./select";

type InfoProps = ComponentProps<"div">;

export function Info({ className, ...props }: InfoProps) {
  return (
    <div className={cn(className)} {...props}>
      <Breadcrumb current="info" />
      <div className="p-4 flex flex-wrap container-mini justify-evenly border-border rounded-md relative border gap-4">
        <h3 className="text-zinc-800 text-sm font-semibold inset-x-0 m-auto bg-white w-fit -top-2.5 px-3 absolute">
          Express checkout
        </h3>
        {Array.from(Array(3).keys()).map((el) => (
          <img
            role="button"
            className="active:scale-95 transition-all"
            src={`/assets/imgs/payment/${el + 1}.png`}
            alt="pay btn"
          />
        ))}
      </div>
      <OrDivider />
      <h4 className="text-[17px] font-semibold my-2.5">Contact information</h4>
      <Input placeholder="Email" />
      <h4 className="text-[17px] font-semibold my-2.5">Delivery Method</h4>
      <Methods level={level} className="container-mini" />
      <h4 className="text-[17px] font-semibold my-2.5">Shipping address</h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 container-mini">
        <Input className="md:max-w-4xl" placeholder="First name (optional)" />
        <Input className="md:max-w-4xl" placeholder="Last name" />
        <Input className="md:max-w-4xl col-span-full" placeholder="Address" />
        <Input
          className="md:max-w-4xl col-span-full"
          placeholder="Apartment, suite, etc. (optional)"
        />

        <Input className="md:max-w-4xl col-span-full" placeholder="City" />
        <div className="col-span-full grid grid-cols-1 lg:grid-cols-3 gap-3">
          <SelectComp placeholder="Country / region" options={country} />
          <SelectComp placeholder="Province" options={province} />
          <SelectComp placeholder="Country / region" options={country} />
        </div>
        <div className=" col-span-full relative">
          <Input placeholder="Phone" className="md:max-w-4xl" />
          <Icon
            icon="ph:question"
            className=" absolute inset-y-0 my-auto right-3 text-xl text-zinc-500"
          />
        </div>
      </div>
      <Action from="Cart" to="Shipping" toLink="/checkout/shipping" />
    </div>
  );
}

const level = [
  {
    label: "Ship",
    icon: "iconoir:delivery-truck",
  },
  {
    label: "Pick up",
    icon: "ant-design:shop-twotone",
  },
];

const country = [{ label: "Canada" }, { label: "USA" }, { label: "UK" }];
const province = [{ label: "somewhere" }, { label: "somewhere2" }];
