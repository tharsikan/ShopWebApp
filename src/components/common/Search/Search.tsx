import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import {
  ChangeEvent,
  ElementRef,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import GradientBtn from "../../buttons/GradientBtn";
import CreatePost from "./create-post-popover";
import { SearchBox } from "./search-box";

interface Props {
  fullWidth?: boolean;
  noPost?: boolean;
  placeholder?: string;
  extraComp?: React.ReactNode;
}

const Search = ({ fullWidth, placeholder, noPost, extraComp }: Props) => {
  return (
    <div className="flex gap-[10px] w-full ">
      <SearchBar fullWidth={fullWidth} placeholder={placeholder} />
      {!noPost && (
        <CreatePost>
          <GradientBtn
            iconClassName="w-10 h-5"
            textClassName="text-sm font-extrabold"
            className="flex-shrink-0 h-[40px] "
            icon="/assets/vectors/common/add-white.svg"
            label="Post"
          />
        </CreatePost>
      )}
      {extraComp && extraComp}
    </div>
  );
};

export default Search;

export function SearchBar({ fullWidth, placeholder }: any) {
  const [typing, setTyping] = useState(false);
  const searchRef = useRef<ElementRef<"div">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const navigate = useNavigate();
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value) return setTyping(true);
    setTyping(false);
  }
  useOnClickOutside(searchRef, () => setTyping(false));

  function handleAction(e: KeyboardEvent<HTMLInputElement>) {
    e.key === "Enter" &&
      navigate(
        `/search/shop?q=${inputRef.current?.value.replaceAll(" ", "-")}`
      );
    setTyping(false);
  }

  return (
    <div
      ref={searchRef}
      className="relative border-solid border-[1px] border-accentGray-600 h-[40px] flex-grow"
    >
      <img
        className="absolute left-4 top-2/4 -translate-y-2/4"
        src="/assets/vectors/common/search.svg"
        alt="search"
      />
      <input
        ref={inputRef}
        onFocus={handleInput}
        onChange={handleInput}
        onKeyDown={handleAction}
        className={clsx(
          "h-full block outline-none rounded-lg pl-14 pr-4",
          fullWidth ? "w-full" : "w-[30rem]"
        )}
        type="search"
        placeholder={placeholder || "Search..."}
      />
      <AnimatePresence>
        {typing && <SearchBox className="absolute rounded-lg top-full mt-2" />}
      </AnimatePresence>
    </div>
  );
}
