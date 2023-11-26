import clsx from "clsx";
import { Link, useMatch } from "react-router-dom";

export interface TabProps {
  to: string;
  icon: string;
  label: string;
}

const Tab = ({ to, icon, label }: TabProps) => {
  const isUserRoute = useMatch(to);

  return (
    <Link
      to={to}
      className={clsx(
        "flex-shrink-0 flex items-center gap-[10px] cursor-pointer rounded-md py-[10px] px-4 h-11 relative",
        isUserRoute
          ? "border-transparent bg-gradient-to-l from-red-500 to-yellow-500 [&>div]:text-white"
          : "border-accentGray-600 border border-solid [&>div]:text-accentGray-700"
      )}
    >
      <img
        className={clsx(isUserRoute ? "invert" : "icon-grey")}
        src={icon}
        alt={label}
      />

      <div className="text-sm ">{label}</div>
      {isUserRoute && (
        <div className="bg-gradient-to-l from-red-500 to-yellow-500 absolute h-1 w-full left-0 -bottom-[18px]"></div>
      )}
    </Link>
  );
};

export default Tab;
