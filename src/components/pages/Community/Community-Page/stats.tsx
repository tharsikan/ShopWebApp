import { cn } from "../../../../helpers/utils";

export default function Stats({
  stat,
  className,
}: {
  stat: any;
  className?: string;
}) {
  return (
    <section className={cn("flex justify-between", className)}>
      {stat.map((_: any) => (
        <div key={_.head}>
          <p className="text-xl font-semibold text-center">{_.value}</p>
          <p className="text-xs font-medium text-center text-neutral-400">
            {_.head}
          </p>
        </div>
      ))}
    </section>
  );
}
