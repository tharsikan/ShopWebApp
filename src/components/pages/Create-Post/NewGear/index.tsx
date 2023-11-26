import React from "react";
import GreyBtn from "../../../buttons/GreyBtn/GreyBtn";
import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";
import Select from "../../../common/Selectors/select";
import Uploader from "../../../common/uploader";
import { TextField } from "../../../text-field";
import clsx from "clsx";
import GearRatings from "./GearRatings";

const NewGear = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <div className="flex text-sm font-medium border rounded-md bg-stone-50 px-3.5  items-center border-slate-400 ">
        <input
          placeholder="Search for Gear "
          className={
            "w-full pt-3 pb-[13px] outline-none placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md  h-10"
          }
        />
        <div className="ml-4 text-sm font-semibold text-right text-neutral-400">
          0/300
        </div>
      </div>
      <p className="text-[10px] py-0.5">
        Cant find your gear Add yours and help grow our database for others{" "}
      </p>
      <button
        className={clsx(
          "cursor-pointer w-max p-2 my-3 border border-solid font-medium flex items-center justify-center rounded-md  text-accentGray-700 gap-1.5",
          open
            ? "border-orange-400 bg-orange-200"
            : "bg-accentGray-400 hover:bg-accentGray-500"
        )}
        onClick={() => setOpen(!open)}
      >
        + Add Personal Gear
      </button>
      {open && (
        <div className="flex gap-3">
          <div>
            {" "}
            <p className="text-[11px] font-semibold ml-1">Brand Name</p>
            <input
              placeholder={`"Fender"`}
              className={
                "w-full border pl-2 placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md h-8 mb-2"
              }
            />
          </div>
          <div className="">
            {" "}
            <p className="text-[11px] font-semibold ml-1">Model</p>
            <input
              placeholder={`"Nord 3"`}
              className={
                "w-full border pl-2 placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md h-8 mb-2"
              }
            />
          </div>
        </div>
      )}
      <Uploader />

      <br />
      <h5>Description</h5>
      <TextField />
      <div className="flex gap-4 flex-wrap">
        {data.map((_) => (
          <div key={_.label}>
            <p className=" text-[11px] font-semibold mb-1">{_.label}</p>
            <Select sm options={_.options} placeholder={_.placeholder} />
          </div>
        ))}
      </div>
      <GearRatings />
      <p className="text-black text-[11px] font-semibold">
        Add to Feed? Or Only Gear Room
      </p>
      <div className="flex items-center gap-2.5 cursor-pointer">
        <input type="checkbox" id="check" className="checked:accent-zinc-100" />
        <label
          htmlFor="check"
          className="text-sm font-normal text-black cursor-pointer"
        >
          Yes, add to Feed
        </label>
      </div>
      <div className="flex gap-4 my-8">
        <GreyBtn label={"Cancel"} />
        <YellowBtn label={"Post"} className="px-6" />
      </div>
    </div>
  );
};

export default NewGear;

const data = [
  {
    label: "How’d you receive it?",
    placeholder: "Select",
    options: [
      { label: "Bought" },
      { label: "Traded" },
      { label: "Past On" },
      { label: "Found" },
    ],
  },
  {
    label: "Duration Owned",
    placeholder: "When",
    options: [
      { label: "0-1 Years" },
      { label: "1-5 Years" },
      { label: "5-10 Years" },
      { label: "10-20 Years" },
      { label: "20-30 Years" },
      { label: "30+ Years" },
    ],
  },
  {
    label: "Release",
    placeholder: "Time",
    options: [
      { label: "2020s" },
      { label: "2010s" },
      { label: "2000s" },
      { label: "1990s" },
      { label: "1980s" },
      { label: "1970s" },
      { label: "1960s" },
      { label: "1950s" },
    ],
  },
  {
    label: "Gear Room Status",
    placeholder: "Status",
    options: [
      { label: "Current Gear" },
      { label: "Past Gear" },
      { label: "Tested Gear" },
      { label: "Wanted Gear" },
    ],
  },
  {
    label: "Gear Room Location",
    placeholder: "Location",
    options: [
      { label: "Signature Gear" },
      { label: "Main Gear" },
      { label: "Regular Gear" },
      { label: "Exclusive Gear" },
    ],
  },
];

