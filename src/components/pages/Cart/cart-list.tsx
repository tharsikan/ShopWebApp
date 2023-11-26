import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import GreyBtn from "../../buttons/GreyBtn";
import Card from "../../common/Card";
import { CardRow } from "./card-row";

type CartListProps = ComponentProps<"div">;

export function CartList({ className, ...props }: CartListProps) {
  return (
    <div className={cn(className)} {...props}>
      <Card className="md:grid md:p-6 p-2.5 grid-cols-[3fr_1fr_1fr_1fr] items-center justify-items-center">
        {["Description", "Quantity", "Price", "Remove"].map((el) => (
          <p key={el} className="text-sm max-md:hidden font-medium">
            {el}
          </p>
        ))}
        <hr className="col-span-full max-md:hidden my-6 w-full" />
        {Array.from(Array(2)).map((el) => (
          <>
            <CardRow />
            <hr className="col-span-full my-6 w-full" />
          </>
        ))}
        <div className="col-span-full max-md:max-w-[175px] max-md:ml-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:gap-5 gap-1 ">
          {data.map((el) => (
            <div
              key={el.label}
              className="flex items-center md:min-w-[230px] justify-between md:p-5 rounded-md md:border "
            >
              <p className=" text-black text-xs md:text-sm md:font-medium">
                {el.label}
              </p>
              <p className="font-semibold max-md:text-xs">{el.value}</p>
            </div>
          ))}
        </div>
        <div className="col-span-full h-5" />
        <div className="md:grid grid-cols-4 gap-5 col-span-full w-full">
          <div className="flex h-10 md:h-12 col-span-3">
            <input
              placeholder="Please enter promo code"
              className="p-4 rounded-l-md w-full outline-none border "
            />
            <button className="bg-gradient px-8 whitespace-nowrap text-white min-h-full rounded-r-md">
              Apply
            </button>
          </div>
          <div className="md:space-y-5 space-y-2.5 max-md:max-w-[175px] max-md:ml-auto max-md:mt-2.5">
            <div className="flex gap-0.5">
              <button className="bg-gradient h-10 md:h-12 w-full whitespace-nowrap text-white rounded-l-md">
                Checkout
              </button>
              <button className="bg-gradient h-10 md:h-12 px-4 w-fit whitespace-nowrap text-white rounded-r-md">
                <Icon icon={"solar:cart-4-bold"} className="text-2xl" />
              </button>
            </div>
            <GreyBtn
              className={"h-10 md:h-12 text-black font-semibold"}
              label={"Update Quantity"}
            />
            <GreyBtn
              className={"h-10 md:h-12 text-black font-semibold"}
              label={"Continue Shopping"}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

const data = [
  { label: "Discount", value: "0.00$" },
  { label: "Delivery", value: "15.00$" },
  { label: "Subtotal", value: "520$" },
  { label: "Total", value: "520$" },
];
