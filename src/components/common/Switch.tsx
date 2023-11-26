import { cn } from "../../helpers/utils";

interface Props {
  label?: string;
  className?: string;
  wrapperClass?: string;
}

const Switch = ({ wrapperClass, className, label }: Props) => {
  return (
    <div className={cn("flex items-center justify-center", wrapperClass)}>
      <label htmlFor={label} className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id={label} className="sr-only" />
          <div className="block bg-[#DDDDDD] w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-[white] w-6 h-6 rounded-full transition"></div>
        </div>
        {label && (
          <div className={cn("ml-3 text-[#DDDDDD] font-medium", className)}>
            {label}
          </div>
        )}
      </label>
    </div>
  );
};

export default Switch;
