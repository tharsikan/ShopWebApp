
import React, { useEffect, useState } from "react";
import GradientBtn from "../../buttons/GradientBtn";
import Forums from "./Forums";
import Marketplace from "./Marketplace";
import Muzfi from "./Muzfi";
import Reverb from "./Reverb";



const Us = () => {
 
 

  return (
    <div className="mt-7">
      <h4 className="text-center font-semibold text-black text-[20px] sm:leading-[1.3] sm:text-[30px] xl:text-[35px] 2xl:text-[35px] drop-shadow-xl">
        Us vs Them?
      </h4>
      <h4 className="text-center font-semibold text-slate-500 text-[15px] sm:leading-[1.3] sm:text-[20px] xl:text-[25px] 2xl:text-[25px] drop-shadow-xl">
        The Only Platform for Musical Fanatics
      </h4>
      <div className="mt-7 grid sm:grid-cols-3 gap-1 max-w-[882px] mx-auto">
        <Reverb/>
        {/* <Marketplace/> */}
        <Forums />
        <Muzfi/>
       
      </div>
    </div>
  );
};

export default Us;
