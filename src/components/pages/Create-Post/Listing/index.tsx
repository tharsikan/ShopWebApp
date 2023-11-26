import { Icon } from "@iconify/react";
import * as Tabs from "@radix-ui/react-tabs";
import YellowBtn from "../../../buttons/YellowBtn";
import Description from "./description";
import { ProductInfo } from "./product-info";
import Shipping from "./shipping";
import ShippingDetails from "./shipping-details";
import Pricing from "./pricing";
import Review from "./review";
import { useEffect, useState } from "react";
import GreyBtn2 from "../../../buttons/GreyBtn2";

const Listing = () => {
  // ADD Create Listing Page Sequence Here (7. Create Thread: LISTING)
  const [value, setValue] = useState("Product Info");
  const [isShipping, setIsShipping] = useState(false);

    useEffect(() => {
      
    });
  return (
    <>
      {/* steeper           */}

      <Tabs.Root value={value} onValueChange={setValue}>
        <div className="grid grid-cols-4">
          <div className="col-span-3 max-md:col-span-full pr-2.5">
            <Tabs.Content value="Product Info">
              <ProductInfo />
              <YellowBtn
                onClick={() => setValue("Photos & Description")}
                className="px-6 my-8 w-max"
                label={"Continue"}
              />
            </Tabs.Content>
            <Tabs.Content value="Photos & Description">
              <Description />
              <div className="flex gap-5">
                <GreyBtn2
                  onClick={() => setValue("Product Info")}
                  className="w-32 my-8"
                  label={"Back"}
                />
                <YellowBtn
                  onClick={() => setValue("Shipping")}
                  label={"Continue"}
                  className="px-8 my-8 w-fit"
                />
              </div>
            </Tabs.Content>
            <div className="flex flex-col h-full">
              <div className="grow">
                <Tabs.Content value="Shipping" asChild>
                  <>
                    <Shipping/>
                    <div className="flex gap-5">
                      <GreyBtn2
                        className="w-32 my-8"
                        label={"Back"}
                        onClick={() => setValue("Photos & Description")}
                      />
                      <YellowBtn
                        onClick={() => setValue("Pricing")}
                        className="w-32 my-8"
                        label={"Continue"}
                      />
                    </div>
                  </>
                </Tabs.Content>
                <Tabs.Content value="Pricing" asChild>
                  <>
                    <Pricing />
                    <div className="flex gap-5">
                      <GreyBtn2
                        className="w-32 my-8"
                        label={"Back"}
                        onClick={() => setValue("Shipping")}
                      />
                      <YellowBtn
                        onClick={() => setValue("Review")}
                        className="w-32 my-8"
                        label={"Continue"}
                      />
                    </div>
                  </>
                </Tabs.Content>
                <Tabs.Content value="Review" asChild>
                  <>
                    <Review />
                    <div className="flex gap-5">
                      <GreyBtn2
                        className="w-32 my-8"
                        label={"Back"}
                        onClick={() => setValue("Pricing")}
                      />
                      <YellowBtn className="w-32 my-8" label={"Continue"} />
                    </div>
                  </>
                </Tabs.Content>
              </div>
            </div>
          </div>
          <Tabs.List className="border-l max-md:hidden pl-1.5 flex flex-col gap-20 relative items-start h-fit border-slate-400/20">
            <div className="absolute w-px h-full bg-accentYellow-500 left-[18px]" />
            {steps.map((_) => (
              <Tabs.Trigger
                key={_}
                value={_}
                className="relative z-10 flex items-center gap-3 mx-1 group"
              >
                <div className="w-[18px] grid place-content-center h-[18px] group-aria-selected:bg-white bg-accentYellow-500 rounded-full border border-yellow-500">
                  <Icon
                    icon={"material-symbols:check"}
                    className="text-sm text-white"
                  />
                </div>
                <p className="text-sm font-medium leading-[18px]">{_}</p>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
      </Tabs.Root>
    </>
  );
};

export default Listing;

const steps = [
  "Product Info",
  "Photos & Description",
  "Shipping",
  "Pricing",
  "Review",
];
