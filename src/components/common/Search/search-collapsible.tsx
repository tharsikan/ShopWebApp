import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";
import {
  ChangeEvent,
  ElementRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { SearchBox } from "./search-box";

const SearchCollapsible = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [typing, setTyping] = useState(false);
  const searchRef = useRef<ElementRef<"div">>(null);
  const navigate = useNavigate();

  useOnClickOutside(searchRef, () => setTyping(false));

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!(e.target as HTMLElement).closest(".search")) {
        setIsSearching(false);
      }
    });
  }, []);
  function handleAction(e: KeyboardEvent<HTMLInputElement>) {
    e.key === "Enter" &&
      navigate(
        `/search/shop?q=${inputRef.current?.value.replaceAll(" ", "-")}`
      );
    setTyping(false);
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value) return setTyping(true);
    setTyping(false);
  }

  const inputRef = useRef<ElementRef<"input">>(null);

  return (
    <div ref={inputRef} className="flex relative items-center shrink-0">
      <div
        className={cn(
          "h-10 search mr-2 lg:hidden flex w-full  items-center rounded-lg overflow-hidden flex-grow",
          {
            "bg-white px-3.5": isSearching,
          }
        )}
      >
        <Icon
          onClick={(e) => {
            e.stopPropagation();
            setIsSearching((p) => !p);
          }}
          icon={"iconamoon:search"}
          className={cn("text-2xl ", {
            "text-white cursor-pointer": !isSearching,
          })}
        />
        {isSearching && (
          <input
            ref={inputRef}
            onFocus={handleInput}
            onChange={handleInput}
            onKeyDown={handleAction}
            className={cn("h-full w-full px-4 block outline-none ")}
            type="search"
            placeholder={"Search..."}
          />
        )}
        <AnimatePresence>
          {isSearching && typing && (
            <SearchBox className="absolute w-[calc(100%-8px)] left-0 rounded-lg top-full mt-2" />
          )}
        </AnimatePresence>
      </div>
      {!typing && (
        <Link className="" to={"/"}>
          {" "}
          <img
            className="h-full w-full mx-2 lg:hidden"
            src="/assets/imgs/common/logo.png"
            alt="logo"
          />
        </Link>
      )}
    </div>
  );
};

export default SearchCollapsible;
