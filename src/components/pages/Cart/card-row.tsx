import { Icon } from "@iconify/react";
import { ComponentProps, Fragment } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQueries";
import GradientBtn from "../../buttons/GradientBtn";
import { CartCard } from "./cart-card";
import Quantity from "./quantity";

type CardRowProps = ComponentProps<"div"> & { later?: boolean };

export function CardRow({ className, later, ...props }: CardRowProps) {
  const md = useMediaQuery("md");
  const Wrapper = md ? Fragment : "div";
  return (
    <>
      <CartCard />
      <Wrapper className="flex items-center mt-2 gap-3">
        {later ? (
          <div className="max-md:grow ">
            <GradientBtn
              className={"max-md:h-9"}
              label={
                <span className="flex !text-xs items-center gap-2">
                  <Icon icon="uil:cart" className="text-xl" />
                  Add to cart
                </span>
              }
            />
          </div>
        ) : (
          <Quantity className="max-md:grow max-md:scale-75 my-0 origin-left" />
        )}
        <div className="text-neutral-400 flex flex-col items-center text-[8px] ">
          <p className="text-xl text-black font-medium leading-loose max-md:hidden">
            100$
          </p>
          <p>FedEx Ground or</p>
          <p>FedEx Home Delivery</p>
          <div className="text-sm">+ 15 $</div>
        </div>
        <p className="md:text-xl text-lg text-black font-medium leading-loose md:hidden">
          100$
        </p>
      </Wrapper>
      <div className="flex flex-col items-center justify-between h-full">
        <div />
        <button className="grid max-md:hidden text-lg  font-semibold border rounded-tr rounded-br cursor-pointer bg-zinc-100 place-content-center w-11 h-11">
          <Icon icon="ph:x" />
        </button>
        {!later && (
          <div className=" text-indigo-600 flex max-md:text-xs max-md:ml-auto items-center text-sm gap-0.5 font-medium ">
            <Icon icon={"material-symbols:bookmark-outline"} />{" "}
            <span>Save for later</span>
          </div>
        )}
      </div>
    </>
  );
}
