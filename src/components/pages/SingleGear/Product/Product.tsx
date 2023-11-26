import { useState } from "react";

import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import Card from "../../../common/Card";
import clsx from "clsx";
import Carousel from "../../Single-Page/Listing/carousel";
import Reactions from "../Reactions";
import Rating from "../Rating";



const Product = () => {
  

  return (
    <div className="grid md:grid-cols-2 gap-3 md:gap-6 ">
      <Carousel />
      <div>
        <div className="text-lg md:text-2xl font-semibold">
          Fender 1950's Precision Bass
        </div>

        <div className="mt-1 flex items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/single-catalog/star.svg" alt="star" />
            <img src="/assets/vectors/single-catalog/star.svg" alt="star" />
            <img src="/assets/vectors/single-catalog/star.svg" alt="star" />
            <img src="/assets/vectors/single-catalog/star.svg" alt="star" />
            <img src="/assets/vectors/single-catalog/star.svg" alt="star" />
          </div>
          <div className="text-sm mt-1">4.8 | 3,557 Votes</div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="text-xl sm:text-3xl font-semibold">
            $ 3,800 - 5,500
          </div>
          <div className="text-accentGray-700 text-base sm:text-lg">
            Market Price
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-[10px] md:gap-3 max-w-[380px]">
          <div className="text-xs bg-[#B7A7D7] py-1 px-2 rounded-md">
            Bass Players
          </div>
          <div className="text-xs bg-[#774414] text-white py-1 px-2 rounded-md">
            Guitar Players
          </div>
          {/* <div className="text-xs bg-[#EDC] py-1 px-2 rounded-md">
            Keys Players
          </div> */}
          <div className="text-xs bg-[#544838] text-white py-1 px-2 rounded-md">
            Studio
          </div>
          {/* <div className="text-xs bg-[#9C1DFF] text-white py-1 px-2 rounded-md">
            DJ’s
          </div> */}
          <div className="text-xs bg-[#FF5F8D] py-1 px-2 rounded-md">
            Audio Engineer
          </div>
        </div>

        <div className="mt-[10px] md:mt-4 grid grid-cols-3 gap-[10px] md:gap-3 max-w-[380px]">
          <div className="bg-accentYellow rounded-lg text-xs py-1 px-2 text-center">
            <div className="text-accentGray-200 text-xs">Guitar Center</div>
            <div className="text-xs">$3,810.99</div>
          </div>
          <div className="bg-accentYellow rounded-lg text-xs py-1 px-2 text-center">
            <div className="text-accentGray-200 text-xs">Sweetwater</div>
            <div className="text-xs">$3,811</div>
          </div>
          <div className="bg-accentYellow rounded-lg text-xs py-1 px-2 text-center">
            <div className="text-accentGray-200 text-xs">Fender.com</div>
            <div className="text-xs">$3,811</div>
          </div>
        </div>
        <div className="max-w-[420px] mt-[10px]">
          <Rating />
        </div>

        <div className="max-w-[330px] mt-[10px] md:mt-4 grid grid-cols-2 gap-[10px] md:gap-4">
          <div className="col-span-2">
            <GradientBtn className="w-full" label="Add to Room" />
          </div>
          <button className="h-11 transition-transform  hover:-translate-y-1 border border-solid rounded-md border-accentGray-600 flex items-center justify-center gap-1">
            <img src="/assets/vectors/single-catalog/bag.svg" alt="bag" /> I Had
            It
          </button>
          <button className="h-11 transition-transform  hover:-translate-y-1 border border-solid rounded-md border-accentGray-600 flex items-center justify-center gap-1">
            I Want It
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
