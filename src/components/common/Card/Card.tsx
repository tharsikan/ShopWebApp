import clsx from "clsx";

const Card = ({
  noMt,
  className,
  children,
}: {
  noMt?: any;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "border-[1px] border-solid w-full border-accentGray-600 rounded-lg bg-white",
        !className?.includes("p-") && "p-[10px]",
        !noMt && "mt-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
