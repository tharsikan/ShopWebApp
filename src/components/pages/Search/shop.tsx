import SimilarProduct from "../Market/similar-product";
import { SearchCategories, SortSearch } from "./common";
import { SearchFilter } from "./filter";
export const SearchShop = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-x-2 gap-y-3 justify-start flex-wrap">
        <SearchCategories />
        <SortSearch />
        <div className="w-full block md:hidden" />
        <SearchFilter />
      </div>
      <SimilarProduct />
    </div>
  );
};
