import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../helpers/utils";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Option {
  label: string;
  icon?: string;
  value?: string;
}

interface SelectProps {
  uniqueKey: string;
  label: string;
  defaultValue: string;
  options: Option[];
  onOptionSelect: (val: string) => void;
  required?: boolean;
  optional?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Select = ({
  uniqueKey,
  label,
  defaultValue,
  options,
  onOptionSelect,
  required,
  optional,
  children,
  className,
}: SelectProps) => {
  const [value, setValue] = useState("");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsMenuActive(false));

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={cn(
        "bg-white p-3 w-full text-sm border border-solid border-accentGray-600 rounded-lg cursor-pointer relative",
        className
      )}
      onClick={() => setIsMenuActive(!isMenuActive)}
      ref={menuRef}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="rounded-lg flex items-center md:gap-2 text-accentGray-200">
            <img src="/assets/vectors/common/location.svg" alt="location" />
            {label}{" "}
            {required && <span className="text-red-600">(Required)</span>}
            {optional && <span className="text-gray-600">(Optional)</span>}
          </div>
          {value}
        </>
      )}

      <AnimatePresence>
        {isMenuActive && (
          <motion.div
            className="absolute top-full min-w-fit bg-white left-0 right-0 z-10 shadow-lg rounded-lg overflow-hidden"
            key={uniqueKey}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {options.map((el, idx) => {
              return (
                <div
                  key={uniqueKey + "-" + idx}
                  onClick={() =>
                    onOptionSelect ? onOptionSelect(el.label) : null
                  }
                  className="flex md:gap-2 gap-1 items-center p-3 border-b border-solid border-accentGray-600 hover:bg-accentGray-30 transition-colors"
                >
                  {el.icon && <img src={el.icon} alt="" className="h-6" />}

                  <div className=" md:text-sm text-xs">{el.label}</div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
