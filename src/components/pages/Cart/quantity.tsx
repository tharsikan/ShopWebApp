import { HTMLAttributes, useState } from "react";
import { cn } from "../../../helpers/utils";

export default function Quantity({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = useState(1);
  return (
    <section className={cn("flex my-4 select-none w-fit", className)}>
      <div
        onClick={() => setValue((p) => ++p)}
        className="grid text-lg font-semibold rounded-tl rounded-bl cursor-pointer place-content-center bg-accentYellow-500 w-11 h-11"
      >
        +
      </div>
      <div className="grid text-lg font-semibold border-y bg-white place-content-center w-11 h-11">
        {value}
      </div>
      <div
        onClick={() => setValue((p) => --p)}
        className="grid text-lg font-semibold border rounded-tr rounded-br cursor-pointer bg-zinc-100 place-content-center w-11 h-11"
      >
        -
      </div>
    </section>
  );
}
