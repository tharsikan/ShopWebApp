import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import GradientBtn from "../../buttons/GradientBtn";
import Card from "../../common/Card";
import { SearchCategories, SortSearch } from "../Search/common";
import { SearchFilter } from "../Search/filter";
import { SearchFilterMob } from "../Search/filter-mob";
import CardContainer from "./card-container";
import CategoriesFilter from "./categories";
import SimilarProduct from "./similar-product";

const ForSale = () => {
  const [isSearchFilterVisible, setSearchFilterVisible] = useState(false);
  // THIS is for (6. For Sale Page) SEE FIGMA FILE
  return (
    <div>
      <Card className="flex p-1.5 [&_*]:my-0 items-center gap-x-2 gap-y-3 justify-start flex-wrap">
        <SearchCategories />
        <CategoriesFilter options={["Shop", "About", "Feedback"]} />
        <SortSearch />
      </Card>
      <CardContainer />
      <CategoriesFilter
        className="max-md:hidden"
        options={["All Listings", "Auction", "Buy It Now"]}
      />

      <div className="text-xs mt-4 md:mt-6 font-medium capitalize text-neutral-400">
        168,874 Results
      </div>
      <div className="h-0 pb-8 mt-1 border-t border-slate-400/20" />
      <div className="flex items-center gap-x-2 max-md:hidden gap-y-3 justify-start flex-wrap">
        <SearchFilter />
      </div>
      <div
        role="button"
        className="w-fit"
        onClick={() => setSearchFilterVisible(true)}
      >
        <GradientBtn
          textClassName="inline-flex gap-1 items-center"
          className="pointer-events-none text-sm z-10 active:scale-50 cursor-pointer relative p-3 md:hidden font-medium capitalize"
          label={
            <>
              <Icon icon="pajamas:hamburger" /> Filter & Sort (0)
            </>
          }
        />
      </div>
      <AnimatePresence>
        {isSearchFilterVisible && (
          <SearchFilterMob setFilterVisible={setSearchFilterVisible} />
        )}
      </AnimatePresence>
      <SimilarProduct />
    </div>
  );
};

export default ForSale;

const options = [
  { label: "Best Match" },
  { label: "Most Recent First" },
  { label: "Price Low to High" },
  { label: "Price High to Low" },
];
