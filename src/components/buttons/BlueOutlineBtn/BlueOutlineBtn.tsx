import clsx from "clsx";

interface Props {
  noMinW?: boolean;
  icon?: string;
  className?: string;
  children: React.ReactNode;
}

const BlueOutlineBtn = ({ icon, noMinW, children, className }: Props) => {
  return (
    <button
      className={clsx(
        "border border-solid border-accentBlue-500 rounded-md h-11 px-5 text-accentBlue-500 text-sm font-bold hover:-translate-y-1 transition-transform flex justify-center items-center gap-2 flex-shrink-0",
        !noMinW && "min-w-[150px]",
        className
      )}
    >
      {icon && <img src={icon} alt="twitter" />} {children}
    </button>
  );
};

export default BlueOutlineBtn;
