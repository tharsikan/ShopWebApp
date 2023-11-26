import { useState } from "react";
import Select from "../../../common/select";

const offersData = [
  {
    offerFrom: "Instrumentpro Inc",
    buyer: "Goldi's Boutique",
    buyerOffer: "$314.99 + $0",
    address: "San Leandro, CA, United States",
    days: 9,
    name: "Korg Synthesizer, 25 Key (MONOLOGUEBK)",
    amount: "$349.99",
    expired: true,
  },
  {
    offerFrom: "Instrumentpro Inc",
    buyer: "Goldi's Boutique",
    buyerOffer: "$314.99 + $0",
    address: "San Leandro, CA, United States",
    days: 9,
    name: "Korg Synthesizer, 25 Key (MONOLOGUEBK)",
    amount: "$349.99",
    declined: true,
  },
  {
    offerFrom: "Instrumentpro Inc",
    buyer: "Goldi's Boutique",
    buyerOffer: "$314.99 + $0",
    address: "San Leandro, CA, United States",
    days: 9,
    name: "Korg Synthesizer, 25 Key (MONOLOGUEBK)",
    amount: "$349.99",
    accepted: true,
  },
  {
    offerFrom: "Instrumentpro Inc",
    buyer: "Goldi's Boutique",
    buyerOffer: "$314.99 + $0",
    address: "San Leandro, CA, United States",
    days: 9,
    name: "Korg Synthesizer, 25 Key (MONOLOGUEBK)",
    amount: "$349.99",
    accepted: true,
  },
];

const instrumentOptions = [
  {
    label: "All(32)",
  },
  {
    label: "Active",
  },
  {
    label: "Accepted",
  },
  {
    label: "Declined",
  },
  {
    label: "Expired",
  },
];

type Props = {
  type: boolean;
};


const Purchases = (props: Props) => {
  const [instrumentValue, setInstrumentValue] = useState("All");
  return (
    <div className="mt-5">
      <div className="flex items-center gap-5 text-xs">
        <div className="max-w-[190px]">
          <Select
            uniqueKey="order-selector"
            label="Order Status"
            defaultValue={instrumentValue}
            options={instrumentOptions}
            onOptionSelect={(val) => setInstrumentValue(val)}
          />
        </div>
      </div>

      <div className="mt-10">
        {offersData.map((el, idx) => {
          return (
            <div
              className="border rounded-lg border-solid bg-white border-accentGray-600 mb-4"
              key={"purchase-" + idx}
            >
              <div className="p-[10px]">
                <div className="flex flex-wrap gap-4 justify-between items-center pb-[10px]">
                  <div className="flex gap-8 sm:w-auto w-full">
                    <div className="text-sm font-semibold">Offer From</div>
                    <div className="flex cursor-pointer text-accentBlue-500 gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/shop.svg"
                        alt="shop"
                      />
                      Instrumentpro Inc
                    </div>
                    <div className="flex cursor-pointer gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/direct.svg"
                        alt="direct"
                      />
                      Direct Offer
                    </div>
                  </div>

                  <div className="hidden sm:flex gap-4">
                    {el.expired && <div className="text-sm">Expired Offer</div>}
                    {el.declined && (
                      <div className="text-sm text-red-600">Declined Offer</div>
                    )}
                    {el.accepted && (
                      <div className="text-sm text-accentGreen-500">
                        Accepted Offer
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mb-[10px] justify-between">
                  <div className="text-accentGray-200">{el.address}</div>

                  <div className="block sm:hidden text-xs text-[10px] text-accentGray-700">
                    {el.days} days
                  </div>
                </div>
                <div className="flex justify-between bg-accentGray-40 p-[10px] rounded-md border border-solid border-accentGray-600">
                  <div className="flex gap-2 sm:gap-3 col-span-12 md:col-span-6">
                    <div className="w-[100px] text-accentBlue-500 font-semibold text-sm">
                      <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-accentBlue-500 text-xs sm:text-base">
                        {el.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-end flex-shrink-0">
                    <div className="font-semibold mb-5">{el.amount}</div>

                    <div className="font-semibold flex items-center gap-2 underline text-accentBlue-500 text-xs">
                      Listing Details{" "}
                      <img
                        src="/assets/vectors/purchases/arrow-down.svg"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-[10px] flex justify-between items-center">
                  <div className="flex cursor-pointer gap-5 items-center text-xs font-semibold">
                    <img src="/assets/vectors/purchases/shop.svg" alt="shop" />
                    <div>
                      <span className="text-accentBlue-500">{el.buyer}</span>{" "}
                      offered {el.buyerOffer}
                      shipping to You
                    </div>
                  </div>

                  <div className="flex sm:hidden gap-4 flex-shrink-0">
                    {el.expired && <div className="text-sm">Expired Offer</div>}
                    {el.declined && (
                      <div className="text-sm text-red-600">Declined Offer</div>
                    )}
                    {el.accepted && (
                      <div className="text-sm text-accentGreen-500">
                        Accepted Offer
                      </div>
                    )}
                  </div>
                  <div className="hidden sm:block text-xs text-[10px] text-accentGray-700">
                    {el.days} days
                  </div>
                </div>

                <div className="pt-[10px] flex justify-start items-center border-t border-solid border-accentgray-600 gap-4 flex-wrap md:flex-nowrap">
                  <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-2 sm:px-4 hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                    Offer History
                  </button>
                  <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-2 sm:px-4 hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                    Make a New Offer
                  </button>
                  <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-2 sm:px-4 hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                    Message Seller
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Purchases;
