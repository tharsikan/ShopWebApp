import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn";
import CreatePost from "../../common/Search/create-post-popover";

export default function Category({
  category,
  post,
}: Partial<{ category: any; post: any }>) {
  return (
    <section className="flex flex-wrap max-md:mt-4 items-center gap-4">
      {category.map((_: any) => (
        <CategoryCard {..._} />
      ))}
      {post && (
        <CreatePost>
          <GradientBtn
            iconClassName="w-5 h-5"
            textClassName="text-sm"
            className="flex-shrink-0  "
            icon="/assets/vectors/common/add-white.svg"
            label=" Post Here"
          />
        </CreatePost>
      )}
    </section>
  );
}

// @ts-ignore
export const CategoryCard = ({ title, icon, value, active, link }) => {
  return (
    <NavLink
      role="button"
      className={({ isActive }) =>
        cn(
          "flex items-center max-md:gap-1 gap-2.5 box-border  border border-slate-400 rounded-lg max-md:py-2 py-3 md:p-2.5 p-1.5 px-2 whitespace-nowrap text-sm font-semibold capitalize bg-zinc-50 border-slate-400/20 md:border ",
          {
            "px-2.5 bg-gradient-to-l from-red-500 to-yellow-500  text-white":
              isActive,
          }
        )
      }
      to={link}
    >
      <Icon icon={icon} width={20} /> {title}
    </NavLink>
  );
};
