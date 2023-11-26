import { Icon } from "@iconify/react";
import React from "react";
import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import GreyBtn from "../../../buttons/GreyBtn/GreyBtn";
import DialogWrapper from "../../../common/dialog-wrapper";
import NotifyButton from "../../../common/Notification/NotifyButton";
import Vote from "../Topic/vote";
import GearLikes from "./gearlikes";
import MakeAnOffer from "./make-an-offer";
import Quantity from "./quantity";

export default function Details({ isListing }: { isListing?: boolean }) {
  return (
    <section className="max-lg:py-4">
      <div className="text-xl font-semibold ">1983 Fender Jazz Bass</div>
      <div>
        <div className="flex items-center gap-4 py-2">
          <img
            src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-12 rounded-full aspect-square"
          />
          <div>
            <div className="text-sm font-semibold ">Mr.keys121</div>
            <p className="flex items-center gap-1 text-xs font-medium text-neutral-400">
              <Icon icon={"fluent:location-12-regular"} className="text-base" />{" "}
              Damascus, OR, United States
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-zinc-500">MuzPoints</p>{" "}
            <img src="/assets/vectors/home/flower.svg" alt="flower" />
            <p className="text-xs font-medium ">1,65,201</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-medium text-zinc-500">Seller Rating</p>
            <RatingStars numberOfReviews="1000" />
          </div>
        </div>
        {!isListing && (
          <div className="flex gap-2.5 mt-2.5 items-center">
            <Icon
              icon={"uil:bolt-alt"}
              className="p-1.5 text-4xl bg-white h-fit rounded-full"
            />
            <p>
              <span className="text-sm font-semibold">Signature Gear </span>
            </p>
          </div>
        )}
        <div className="flex items-center mt-3.5 gap-2">
          <Vote />
          <p className="font-medium">
            {isListing ? "Product condition" : "Gear Status"} :-
          </p>
          <button className="w-[70px] h-10 bg-white text-red-600 font-semibold rounded-lg border border-slate-400/20">
            {isListing ? "Great" : "Current"}
          </button>
        </div>
        {isListing && (
          <div className="flex items-center gap-4">
            <p className="text-[28px] font-semibold">$ 800</p>{" "}
            <p className="text-lg line-through text-neutral-400">$ 918</p>
          </div>
        )}

        <div className="text-sm font-medium text-neutral-400 [&>b]:pl-1 [&>b]:pr-2">
          Posted: <b>1 Week Ago</b> Views: <b>213</b>
          Offers: <b>2</b>
        </div>

        {isListing && <Quantity />}

        <div className="flex flex-col gap-3 [&_*]:text-black">
          <GradientBtn
            label={isListing ? "Buy It now" : "I have this"}
            className={"w-full [&_*]:!text-white max-w-xs"}
          />
          <div className={"w-full max-w-xs flex [&_a]:w-full gap-3"}>
            <GreyBtn
              label={
                isListing ? (
                  <span className="flex gap-2">
                    <Icon icon="uil:cart" className="text-xl" />
                    Add to cart
                  </span>
                ) : (
                  "Message Seller"
                )
              }
              className={"border"}
            />
            <DialogWrapper content={<MakeAnOffer />}>
              <GreyBtn
                label={<>Make an Offer</>}
                className={"border pointer-events-none"}
              />
            </DialogWrapper>
          </div>{" "}
          <GreyBtn
            label={
              isListing ? (
                <span className="flex items-center gap-2">
                  <Icon
                    icon={"material-symbols:list-alt-add-outline"}
                    className="text-xl"
                  />
                  View More from Seller
                </span>
              ) : (
                "View User Collection"
              )
            }
            className={"w-full max-w-xs border"}
          />
          <NotifyButton/>
        </div>
      </div>
    </section>
  );
}
export function RatingStars({
  numberOfReviews,
}: {
  numberOfReviews?: string;
}) {
  return (
    <div className="flex items-center">
      {Array.from(Array(5)).map((_) => (
        <Icon
          key={_}
          className="text-accentYellow-500"
          icon={"ic:outline-star"}
        />
      ))}
      {numberOfReviews && <p className="text-xs"> {`(${numberOfReviews})`}</p>}
    </div>
  );
}
