import { useState } from "react";
import Select from "../../../common/select";

const ordersData = [
  {
    identifier: 16999535,
    date: "03-09-2023",
    total: "$736.56",
    name: "intern INT-38C-BK Acoustic Rosewood Right Hand Orientation",
    quantity: 1,
    condition: "Very Good",
    address: "Jesse Matthews 219 CenterCourt Columbia SC 29212 UNITED STATES",
    tel: "843-754-7746",
    shippingDate: "03-10-2023",
    completedOn: "03-09-2023",
  },
  {
    identifier: 16999535,
    date: "03-09-2023",
    total: "$736.56",
    name: "intern INT-38C-BK Acoustic Rosewood Right Hand Orientation",
    quantity: 1,
    condition: "Very Good",
    address: "Jesse Matthews 219 CenterCourt Columbia SC 29212 UNITED STATES",
    tel: "843-754-7746",
    shippingDate: "03-10-2023",
    completedOn: "03-09-2023",
  },
  {
    identifier: 16999535,
    date: "03-09-2023",
    total: "$736.56",
    name: "intern INT-38C-BK Acoustic Rosewood Right Hand Orientation",
    quantity: 1,
    condition: "Very Good",
    address: "Jesse Matthews 219 CenterCourt Columbia SC 29212 UNITED STATES",
    tel: "843-754-7746",
    shippingDate: "03-10-2023",
    completedOn: "03-09-2023",
  },
];

const instrumentOptions = [
  {  
    label: "All(32)",
  },
  {
    label: "Open(2)",
  },
  {
    label: "Completed(32)",
  },
  
];

const Purchases = () => {
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
        {ordersData.map((el, idx) => {
          return (
            <div
              className="border rounded-lg border-solid bg-white border-accentGray-600 mb-4"
              key={"purchase-" + idx}
            >
              <div className="p-[10px]">
                <div className="flex flex-wrap gap-4 justify-between items-center pb-[10px]">
                  <div className="flex gap-8">
                    <div className="w-[100px] text-accentBlue-500 font-semibold text-sm cursor-pointer">
                      {el.identifier}
                    </div>
                    <div className="text-sm font-semibold">{el.date}</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex cursor-pointer text-accentBlue-500 gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/history.svg"
                        alt="history"
                      />
                      Offer History
                    </div>
                    <div className="hidden sm:flex cursor-pointer text-accentBlue-500 gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/message.svg"
                        alt="message"
                      />
                      Messages
                    </div>

                    <div className="text-xs">
                      Total:{" "}
                      <span className="text-accentBlue-500 font-semibold">
                        {el.total}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:space-x-4 space-y-4 grid-cols-12 py-[10px] border-t border-solid border-accentGray-600">
                  <div className="flex gap:2 sm:gap-8 col-span-12 md:col-span-6">
                    <div className="w-[100px] text-accentBlue-500 font-semibold text-sm">
                      <div className="w-[100px] h-[100px] bg-gray-400 rounded-lg"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-base max-w-[390px]">
                        {el.name}
                      </div>
                      <div className="text-accentGray-700">
                        Quantity: {el.quantity}
                      </div>
                      <div className="text-accentGray-700">
                        Condition: {el.condition}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className="font-bold text-xs">Shipping info</div>
                    <div className="text-xs my-[10px]">{el.address}</div>
                    <a
                      href={"tel:" + el.tel}
                      className="text-xs text-accentBlue-500"
                    >
                      Tel: {el.tel}
                    </a>
                  </div>
                  <div className="col-span-6 md:col-span-3 flex justify-end items-end md:items-start">
                    <div className="w-full">
                      <div className="flex justify-end">
                        <button className="flex-shrink-0 border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-10 px-6 font-bold hover:-translate-y-1 transition-transform ">
                          Message Buyer
                        </button>
                      </div>

                      <div className="hidden md:block min-w-full md:min-w-0 mt-3">
                        <div className="text-accentGray-700 text-[10px] sm:text-end ">
                          Payout Status
                        </div>
                        <div className="w-full h-2 relative mt-1">
                          <div className="bg-accentYellow h-[1px] absolute top-1/2 left-0 -translate-y-1/2 w-full"></div>
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between items-center">
                            <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                            <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                            <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                            <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 block md:hidden">
                    <div className="min-w-full md:min-w-0 mt-3">
                      <div className="text-accentGray-700 text-[10px] sm:text-end ">
                        Payout Status
                      </div>
                      <div className="w-full h-2 relative mt-1">
                        <div className="bg-accentYellow h-[1px] absolute top-1/2 left-0 -translate-y-1/2 w-full"></div>
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between items-center">
                          <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                          <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                          <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                          <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-[10px] flex justify-between items-center border-t border-b border-solid border-accentgray-600 gap-4 flex-wrap md:flex-nowrap">
                  <div className="gap-5 flex flex-wrap">
                    <div className="text-xs flex flex-shrink-0 items-center gap-2">
                      <img
                        src="/assets/vectors/purchases/shipped.svg"
                        alt="shipped"
                      />
                      Shipped: {el.shippingDate}
                    </div>

                    <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-4  hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                      Packing Slip
                    </button>
                    <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-4  hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                      Print Label
                    </button>
                    <button className="border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-4  hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                      Purchase Additional Shipping Label
                    </button>
                  </div>
                  <div className="min-w-full md:min-w-0">
                    <div className="text-accentGray-700 text-[10px] sm:text-end ">
                      Delivered
                    </div>
                    <div className="w-full md:w-24 h-2 relative mt-1">
                      <div className="bg-accentYellow h-[1px] absolute top-1/2 left-0 -translate-y-1/2 w-full"></div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between items-center">
                        <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                        <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                        <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                        <div className="w-2 h-2 rounded-[50%] bg-accentYellow"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[10px] flex flex-wrap gap-4 justify-between items-center border-b border-solid border-accentgray-600">
                  <div className="text-xs gap-2">
                    Muzfi Payments payment completed on {el.completedOn}
                  </div>

                  <button className="flex-shrink-0 border border-solid bg-accentGray-400 border-accentGray-600 rounded-md h-9 px-4  hover:-translate-y-1 transition-transform text-accentGray-200 text-xs">
                    Initiate a Refund
                  </button>
                </div>
                <div className="pt-[10px] flex flex-wrap justify-between items-center gap-3">
                  <div className="flex gap-3">
                    <div className="flex sm:hidden cursor-pointer text-accentBlue-500 gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/history.svg"
                        alt="history"
                      />
                      Offer History
                    </div>
                    <div className="flex sm:hidden cursor-pointer text-accentBlue-500 gap-2 items-center text-xs font-semibold">
                      <img
                        src="/assets/vectors/purchases/message.svg"
                        alt="message"
                      />
                      Messages
                    </div>
                  </div>
                  <div className="cursor-pointer text-accentBlue-500 gap-2 flex items-center text-xs font-semibold">
                    <img src="/assets/vectors/purchases/note.svg" alt="note" />
                    Add Note
                  </div>
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
