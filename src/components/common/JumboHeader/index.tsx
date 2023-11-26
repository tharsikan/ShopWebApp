import React from 'react'

const JumboHeader = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className="h-32 relative rounded-lg bg-gradient-to-l overflow-hidden mb-6 from-[#EA4335]/20 flex flex-col justify-center p-5 to-[#FBBC05]/20 shadow-xl">
      <p className="text-lg font-semibold text-black">{title}</p>
      <p className="w-[222px] text-zinc-600 text-xs font-normal leading-[13.92px]">
       {des}
      </p>
      <img
        className="absolute top-0 right-0"
        src="/assets/vectors/browse/hands.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 rotate-180 translate-x-10"
        src="/assets/vectors/browse/hands.svg"
        alt=""
      />
    </div>
  );
};

export default JumboHeader