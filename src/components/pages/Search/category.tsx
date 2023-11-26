import { NavLink, useSearchParams } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";

export const SearchCategory = () => {
  const [searchParams] = useSearchParams();

  return (
    <Card className="my-4 py-2 px-3.5 max-md:bg-transparent max-md:border-0 md:flex gap-8">
      <div className=" flex md:flex-wrap overflow-x-auto scrollbar-hidden gap-3.5 items-center">
        {searchCategories.map((el) => (
          <NavLink
            to={el + "?q=" + searchParams.get("q")}
            key={el}
            className={({ isActive }) =>
              cn(
                "md:p-2.5 p-1.5 px-2 whitespace-nowrap text-sm font-semibold capitalize rounded md:rounded-lg bg-zinc-50 border-slate-400/20 md:border ",
                {
                  "px-2.5 bg-gradient-to-l from-red-500 to-yellow-500  text-white ":
                    isActive,
                }
              )
            }
          >
            {el.replace("-", " ")}
          </NavLink>
        ))}
      </div>
      <p className="md:font-semibold max-md:text-neutral-400 pb-0.5 pt-2 max-md:border-b max-md:text-xs font-medium">
        60,000+ results for {searchParams.get("q")}
      </p>
    </Card>
  );
};

export const searchCategories = [
  "shop",
  "posts",
  "communities",
  "gear-catalog",
  "people",
];
