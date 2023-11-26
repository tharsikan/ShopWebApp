import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn";
import Card from "../../common/Card";
import { Checkbox } from "../Create-Post/Listing/shipping";

type ConfirmationProps = ComponentProps<"div">;

export function Confirmation({ className, ...props }: ConfirmationProps) {
  return (
    <div className={cn("container-mini", className)} {...props}>
      <br />
      <div className="flex items-center gap-3.5">
        <Icon
          icon={"carbon:checkmark-outline"}
          className="text-4xl md:hidden text-sky-700"
        />
        <div>
          <p className="text-[10px] md:text-[13px]">Confirmation #DQFDHG5E0</p>
          <h4 className="text-zinc-800 max-md:text-sm font-semibold">
            Thank you John Smith!
          </h4>
        </div>
      </div>
      <br />
      <div className="border border-border rounded-md">
        <div className="grid h-36 place-content-center">MAP</div>
        <div className="p-3">
          <h4 className="text-zinc-800 max-md:text-sm font-semibold">
            Your order is confirmed
          </h4>
          <p className="text-[13px] max-md:text-xs  leading-5 mt-1">
            We’ve accepted your order, and we’re getting it ready. Come back to
            this page for updates on your shipment status.
          </p>
          <button className="text-xs rounded-md py-3 mt-3 text-blue-700 hover:bg-black/5 px-4 border border-border">
            Track order with Shop
          </button>
        </div>
      </div>
      <br />
      <Card className="overflow-hidden">
        <h3 className="text-zinc-800 font-semibold">Customer information</h3>
        <div className="grid [&_*]:text-[13px] max-md:[&_*]:text-[11px] [&_h4]:mt-3 [&_*]:leading-relaxed  grid-cols-1 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Contact information</h4>
            <p>name@example.com</p>

            <h4 className="font-semibold">Shipping address</h4>
            <p>
              John Smith <br />
              151 O’Connor St <br />
              Ground floor <br />
              Ottawa ON K2P 2L8 <br />
              Canada
            </p>
            <h4 className="font-semibold">Shipping method</h4>
            <p>Canada Post Expedited Parcel</p>
          </div>
          <div>
            <h4 className="font-semibold">Payment method</h4>
            <div className="flex items-center gap-2">
              <img alt="visa" src="/assets/vectors/payment/visa.svg" />
              <p>
                ending with 4242 -{" "}
                <span className="font-semibold">$336.80</span>
              </p>
            </div>

            <h4 className="font-semibold">Billing address</h4>
            <p>
              John Smith <br />
              151 O’Connor St <br />
              Ground floor <br />
              Ottawa ON K2P 2L8 <br />
              Canada
            </p>
          </div>
        </div>
        <br />
        <div className="bg-[#F5F5F5] [&_p]:text-xs border-t -mx-3 -mb-3 border-border p-3.5">
          <Checkbox label="Save my information for a faster checkout" />
        </div>
      </Card>
      <div
        className={cn(
          "flex items-center justify-between gap-5 max-md:flex-col max-md:mt-10 my-8 ",
          className
        )}
        {...props}
      >
        <Link
          to={""}
          className="text-sky-700 max-md:order-last text-[10.97px] font-medium "
        >
          Need help?
        </Link>
        <Link to={"/cart"}>
          <GradientBtn label="Continue Shopping" />
        </Link>
      </div>
    </div>
  );
}
