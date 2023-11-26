import { Outlet } from "react-router-dom";
import { SearchCategory } from "./category";

export default function SearchLayout() {
  return (
    <>
      <SearchCategory />
      <Outlet />
    </>
  );
}
