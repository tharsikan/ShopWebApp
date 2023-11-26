import { Icon } from "@iconify/react";
import React, { useId, useState } from "react";
import ShippingDetails from "./shipping-details";

export function Checkbox({
  label,
  extra,
  className,
}: {
  label: string | React.ReactNode;
  extra?: string;
  className?: string;
}) {
  const id = useId();
  return (
    <div className={className}>
      <input type="checkbox" id={id} className="hidden peer" />
      <label
        htmlFor={id}
        className="peer-checked:[&>div]:bg-blue-700 flex items-center gap-2.5 select-none"
      >
        <div className="icon-container w-[18px] h-[18px] grid place-content-center group   rounded border border-slate-400 border-opacity-20">
          <Icon
            icon={"material-symbols:check"}
            className="text-lg text-white"
          />
        </div>
        <p className="label text-sm font-medium ">{label}</p>
        {extra && (
          <span className="text-blue-700 bg-blue-100 rounded-sm py-0.5 px-1.5 text-[8px] font-normal">
            {extra}
          </span>
        )}
      </label>
    </div>
  );
}

export default function Shipping() {
  const [isShipping, setIsShipping] = useState(false);

  return (
    <>
      <section>
        <p className="font-semibold ">Shipping</p>
        <p className="text-sm font-semibold mt-1.5">
          <span>How will you deliver the item to the buyer? </span>
          <span className="text-red-600 ">*</span>
        </p>
        <div className="text-sm mt-1.5 mb-3 ">You can select both options.</div>
        <div className="space-y-1">
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              id="checkbox"
              onChange={() => setIsShipping(!isShipping)}
            />
            <label
              htmlFor="checkbox"
              className="peer-checked:[&>div]:bg-blue-700 flex items-center gap-2.5 select-none"
            >
              <div className="w-[18px] h-[18px] grid place-content-center group   rounded border border-slate-400 border-opacity-20">
                <Icon
                  icon={"material-symbols:check"}
                  className="text-lg text-white"
                />
              </div>
              <p className="text-sm font-medium ">Shipping</p>

              <span className="text-blue-700 bg-blue-100 rounded-sm py-0.5 px-1.5 text-[8px] font-normal">
                Items sell faster
              </span>
            </label>
          </div>
          <div>
            <input type="checkbox" className="hidden peer" id="checkbox2" />
            <label
              htmlFor="checkbox2"
              className="peer-checked:[&>div]:bg-blue-700 flex items-center gap-2.5 select-none"
            >
              <div className="w-[18px] h-[18px] grid place-content-center group   rounded border border-slate-400 border-opacity-20">
                <Icon
                  icon={"material-symbols:check"}
                  className="text-lg text-white"
                />
              </div>
              <p className="text-sm font-medium ">Local Pickup</p>
            </label>
          </div>
        </div>

        {isShipping && <ShippingDetails />}
      </section>
    </>
  );
}
