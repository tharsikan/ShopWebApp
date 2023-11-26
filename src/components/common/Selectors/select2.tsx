"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import useOnClickOutside from "../../../hooks/useOnClickOutside";

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  uniqueKey: string;
  label?: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  ref?: any;
  description?: string;
  long?: boolean;
  light?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
}

const Select = ({
  uniqueKey,
  label,
  options,
  defaultValue = "",
  onChange,
  disabled,
  ref,
  description,
  long,
  light,
  placeholder,
  fullWidth,
}: SelectProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const selectRef = useRef(null);

  const onSelect = (value: string) => {
    setIsMenuOpen(false);
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
    if (ref && ref.onChange) {
      ref.onChange(value);
    }
  };

  useOnClickOutside(selectRef, () => setIsMenuOpen(false));

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={clsx(
        "flex flex-col",
        long ? "min-w-[210px]" : "min-w-[90px]",
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none"
      )}
    >
      {label && (
        <div className="font-inter text-base block mb-4 relative">{label}</div>
      )}

      <div className="relative" ref={selectRef}>
        <img
          className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none"
          src="/assets/vectors/common/chevron-down.svg"
          alt="chevron"
        />
        <div
          className={clsx(
            "cursor-pointer flex items-center px-3 border-accentGray-400 border border-solid rounded-md font-gothic h-12 outline-none w-full transition-colors focus:border-primary-400",
            light ? "bg-accentGray-40" : "bg-accentGray-50"
          )}
          onClick={() => {
            setIsMenuOpen((prevState) => !prevState);
          }}
          ref={ref}
        >
          {options?.find((el) => el.value === selectedValue)?.label || (
            <span className="text-accentGray-700">{placeholder}</span>
          )}
          &nbsp;
        </div>

        {isMenuOpen && (
          <div
            className={clsx(
              "absolute  border border-solid border-accentGray-400 w-full p-1 top-[calc(100%+4px)] rounded-md max-h-[200px] overflow-auto z-10",
              light ? "bg-accentGray-40" : "bg-accentGray-400"
            )}
          >
            {options?.map((el, idx) => {
              return (
                <div
                  key={uniqueKey + idx}
                  className="font-league hover:bg-gray-100 p-3 cursor-pointer rounded-md"
                  onClick={() => onSelect(el.value)}
                >
                  {el.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="text-accentGray-200 text-xs">{description}</div>
    </div>
  );
};

export default Select;
