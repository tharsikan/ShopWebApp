import clsx from "clsx";
import { useEffect, useState } from "react";
import { cn } from "../../../helpers/utils";
import { useAppSelector } from "../../../redux/hooks";

export default function CategoriesFilter({
  options,
  className,
}: {
  options: string[];
  className?: string;
}) {
  const category = useAppSelector((state) => state.categorySelect);
  const [selectedInstrument, setSelectedInstrument] = useState(category.value);
  const [selector, setSelector] = useState(options[0]);
  useEffect(() => {
    setSelectedInstrument(category.value);
  });
  return (
    <section className={cn("my-4", className)}>
      <div className=" flex flex-wrap gap-3.5 my-3">
        <button
          className={clsx(
            selector === options[0]
              ? "px-2.5 py-[11px] text-sm whitespace-nowrap font-semibold capitalize rounded-lg bg-gradient-to-l from-red-500 to-yellow-500  text-white "
              : "px-2.5 py-[11px] whitespace-nowrap text-sm font-semibold capitalize rounded-lg bg-zinc-50 border-slate-400/20 border "
          )}
          onClick={() => setSelector(options[0])}
        >
          {options[0]}
        </button>
        {options.slice(1).map((_) => (
          <button
            className={clsx(
              selector === _
                ? "px-2.5 py-[11px] text-sm whitespace-nowrap font-semibold capitalize rounded-lg bg-gradient-to-l from-red-500 to-yellow-500  text-white "
                : "px-2.5 py-[11px] whitespace-nowrap text-sm font-semibold capitalize rounded-lg bg-zinc-50 border-slate-400/20 border "
            )}
            onClick={() => setSelector(_)}
          >
            {_}
          </button>
        ))}
      </div>
    </section>
  );
}
