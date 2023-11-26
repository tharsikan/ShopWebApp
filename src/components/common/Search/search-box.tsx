import { Variants, motion } from "framer-motion";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type SearchBoxProps = ComponentProps<typeof motion.div>;

export function SearchBox({ className, ...props }: SearchBoxProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "keyframes", duration: 0.2 }}
      style={{ filter: "drop-shadow(0px 2px 8px #FFB800)" }}
      className={cn("w-full space-y-1.5 origin-top bg-white p-3", className)}
      {...props}
    >
      {Array.from(Array(5).keys()).map((i) => (
        <li key={i} className="line-clamp-1 text-sm font-medium ">
          Fender Stratocaster{" "}
          <span className="text-red-400 font-semibold">
            in Electric Guitars
          </span>
        </li>
      ))}

      <hr />
      <h3 className="text-xs font-semibold">Communities</h3>
      {Array.from(Array(5).keys()).map((i) => (
        <li key={i} className="flex items-center gap-1.5 py-0.5">
          <img
            alt=""
            className="w-8 h-8 rounded-[63.59px] shadow"
            src="/assets/imgs/home/user-img-6.png"
          />
          <div className="font-semibold">
            <p className="text-[10px] font-semibold">r/teamfender</p>
            <p className="text-neutral-400 text-[8px]">1.3M members</p>
          </div>
        </li>
      ))}
    </motion.div>
  );
}

const variants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1 },
};
