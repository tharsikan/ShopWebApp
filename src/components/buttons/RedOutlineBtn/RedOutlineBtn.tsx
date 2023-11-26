import { cn } from "../../../helpers/utils";

interface Props {
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

const BlueOutlineBtn = ({ icon, children, className }: Props) => {
  return (
    <button
      className={cn(
        "border border-solid border-red-500 rounded-md h-11 min-w-[150px] px-5 text-red-500 text-sm font-bold inline-flex items-center gap-2 flex-shrink-0",
        className
      )}
    >
      {icon && <img src={icon} alt="twitter" />} {children}
    </button>
  );
};

export default BlueOutlineBtn;
