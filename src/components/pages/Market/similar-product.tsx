import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import { ProductCard } from "./product-card";

export default function SimilarProduct({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <section {...props}>
      <div
        className={cn(
          "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4",
          className,
          {}
        )}
      >
        {Array.from(Array(12)).map((_) => (
          <Link to="/single/listing">
            <ProductCard key={_} />
          </Link>
        ))}
      </div>
    </section>
  );
}
