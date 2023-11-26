import { SearchCategories, SortSearch } from "./common";
import { SearchPostList } from "./post-list";

export const SearchPosts = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3.5 justify-start flex-wrap">
        <SearchCategories />
        <SortSearch />
      </div>
      <SearchPostList />
    </div>
  );
};
