import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";

type DataTableProps = ComponentProps<typeof motion.div> & {
  data: {
    label: string;
    value: string;
    extra?: string;
  }[];
};

export function DataTable({ className, data, ...props }: DataTableProps) {
  return (
    <motion.div
      className={cn(
        "container-mini border border-border divide-y px-3 divide-border rounded-md",
        className
      )}
      {...props}
    >
      {data.map((el) => (
        <div className="text-xs flex items-start py-3" key={el.label}>
          <p className="text-neutral-500 min-w-[60px]">{el.label}</p>
          <div className="grow">
            <p>{el.value}</p>
            <p className="text-neutral-500">{el.extra}</p>
          </div>
          <button className="text-sky-700">Change</button>
        </div>
      ))}
    </motion.div>
  );
}
