import { useState } from "react";
import { Input } from "../../../common/input";

export function ShippingTable() {
  const [isShipping, setIsShipping] = useState(false);

  return (
    <section>
      <table className="border-collapse border-spacing-0 [&_td]:border-stone-400/20 [&_td]:border">
        <tr>
          <td className="flex items-start gap-2.5 py-4 px-2">
            <input
              type="radio"
              name="shipping"
              id="flat"
              onChange={() => setIsShipping(false)}
            />
            <label htmlFor="flat" className="">
              <p className="text-sm font-bold leading-tight ">
                Offer free shipping
              </p>
              <div className="text-[10px] font-bold">
                Attract more buyers by offering to cover shipping! You can
                adjust the listing’s price to make up for the cost.
              </div>
            </label>
          </td>
          <td className="w-24 p-2 bg-blue-100">
            <p className=" text-[10px] font-bold">Best for</p>
            <p className=" text-[8px] font-bold">Selling quickly</p>
          </td>
          <td className="w-24 p-2 bg-blue-100">
            <p className=" text-[10px] font-bold">Buyer sees</p>
            <p className=" text-[8px] font-bold">Free Shipping</p>
          </td>
        </tr>
        <tr>
          <td className="flex items-start gap-2.5 py-4 px-2">
            <input
              type="radio"
              name="shipping"
              id="free"
              onChange={() => setIsShipping(true)}
            />
            <label htmlFor="free" className="">
              <p className="text-sm font-bold leading-tight ">
                Set a flat shipping rate for this region
              </p>
              <div className="text-[10px] font-bold">
                Determine one cost that all buyers in this entire region will
                pay.
              </div>
            </label>
          </td>
          <td className="w-24 p-2 bg-blue-100">
            <p className=" text-[10px] font-bold">Best for</p>
            <p className=" text-[8px] font-bold">Large items</p>
          </td>
          <td className="w-24 p-2 bg-blue-100">
            <p className=" text-[10px] font-bold">Buyer sees</p>
            <p className=" text-[8px] font-bold">
              $25 to ship anywhere in the Continental U.S.
            </p>
          </td>
        </tr>
      </table>
      {isShipping && (
        <div>
          <p className="text-[11px] font-bold mt-10 mb-1">
            Shipping Rate
            <span className="text-red-600 ">*</span>
          </p>
          <Input
            placeholder="Input Rate"
            className="w-1/2 bg-zinc-100"
            type="number"
          />
        </div>
      )}
    </section>
  );
}
