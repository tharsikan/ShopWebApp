import { Icon } from "@iconify/react";
import * as Accordion from "@radix-ui/react-accordion";
import { Variants, motion } from "framer-motion";
import { ElementRef, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { Checkbox } from "../Create-Post/Listing/shipping";
import { searchFilterData } from "./search-filter.data";

export const SearchFilterMob = ({
  setFilterVisible,
}: {
  setFilterVisible: (value: React.SetStateAction<boolean>) => void;
}) => {
  const filterContainerRef = useRef<ElementRef<typeof motion.nav>>(null);
  const close = () => setFilterVisible(false);

  useOnClickOutside(filterContainerRef, close);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "keyframes" }}
      variants={filterVariants}
      ref={filterContainerRef}
      className="max-w-[85%] flex flex-col z-50 shadow-2xl bg-white fixed inset-0 ml-auto"
    >
      <div className="py-1.5 flex items-center justify-between pl-4 pr-6 bg-accentYellow-500">
        <h4 className="text-stone-900 text-lg font-semibold">
          Filter Your Search
        </h4>
        <Icon
          role="button"
          onClick={close}
          className="text-black"
          icon={"ph:x-bold"}
        />
      </div>
      <Accordion.Root type="single" collapsible>
        {searchFilterData.map((_, idx) => (
          <Accordion.Item
            value={_.label}
            role="button"
            className="py-0.5 text-sm font-semibold text-left "
            key={_.label}
          >
            <Accordion.Trigger asChild className="group px-4 py-3 bg-gray-100">
              <div className="flex items-center justify-between">
                {_.label}
                <Icon
                  icon={"mdi:plus"}
                  className="w-8 text-xl transition-all rotate-180 group-aria-expanded:hidden"
                />
                <Icon
                  icon={"mdi:minus"}
                  className="w-8 text-xl transition-all rotate-180 group-aria-expanded:block hidden"
                />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="font-normal cursor-default space-y-2.5 px-4 py-1.5">
              {_.extra || null}
              {_.options.map((el) => (
                <div key={el} role="button">
                  <Checkbox
                    className="[&_.label]:text-neutral-700 [&_.label]:text-xs [&_.icon-container]:rounded-none"
                    label={el}
                  />
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <div className="grow" />
      <div className="p-4 flex [&>*]:grow gap-4">
        <button className="bg-[#2d2d2d] h-[35px] text-white text-xs font-semibold">
          Apply Filter
        </button>
        <button className="bg-[#2d2d2d] h-[35px] text-white text-xs font-semibold">
          Clear Filters
        </button>
      </div>
    </motion.nav>
  );
};

const filterVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
