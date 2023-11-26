import React from 'react';
import clsx from "clsx";

const GearRatings = () => {
    
const [useValue, setUseValue] = React.useState(4);
const [perfValue, setPerfValue] = React.useState(4);
const [value, setValue] = React.useState(4);
const [durabValue, setDurabValue] = React.useState(4);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4  gap-2 my-3">
      <div className="rounded-md bg-yellow-500/10 p-2.5 ">
        <p className="text-[13px] font-bold underline">{data2[0].label}</p>
        <p className=" text-[10px] ">{data2[0].placeholder}</p>
        <div className="flex justify-between mt-2">
          {Array.from(Array(5).keys()).map((_) => (
            <div
              className={clsx(
                useValue == _
                  ? "w-[26px] h-[26px] bg-orange-400 text-white grid place-content-center font-semibold rounded-full"
                  : "cursor-pointer w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full"
              )}
              key={_}
              onClick={() => setUseValue(_)}
            >
              {_ + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-md bg-yellow-500/10 p-2.5 ">
        <p className="text-[13px] font-bold underline">{data2[1].label}</p>
        <p className=" text-[10px] ">{data2[1].placeholder}</p>
        <div className="flex justify-between mt-2">
          {Array.from(Array(5).keys()).map((_) => (
            <div
              className={clsx(
                perfValue == _
                  ? "w-[26px] h-[26px] bg-orange-400 text-white grid place-content-center font-semibold rounded-full"
                  : "cursor-pointer w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full"
              )}
              key={_}
              onClick={() => setPerfValue(_)}
            >
              {_ + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-md bg-yellow-500/10 p-2.5 ">
        <p className="text-[13px] font-bold underline">{data2[2].label}</p>
        <p className=" text-[10px] ">{data2[2].placeholder}</p>
        <div className="flex justify-between mt-2">
          {Array.from(Array(5).keys()).map((_) => (
            <div
              className={clsx(
                value == _
                  ? "w-[26px] h-[26px] bg-orange-400 text-white grid place-content-center font-semibold rounded-full"
                  : "cursor-pointer w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full"
              )}
              key={_}
              onClick={() => setValue(_)}
            >
              {_ + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-md bg-yellow-500/10 p-2.5 ">
        <p className="text-[13px] font-bold underline">{data2[3].label}</p>
        <p className=" text-[10px] ">{data2[3].placeholder}</p>
        <div className="flex justify-between mt-2">
          {Array.from(Array(5).keys()).map((_) => (
            <div
              className={clsx(
                durabValue == _
                  ? "w-[26px] h-[26px] bg-orange-400 text-white grid place-content-center font-semibold rounded-full"
                  : "cursor-pointer w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full"
              )}
              key={_}
              onClick={() => setDurabValue(_)}
            >
              {_ + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GearRatings

const data2 = [
  {
    label: "Usability Rating",
    placeholder:
      "The efficiency and satisfaction of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Performance Rating",
    placeholder:
      "The behavior, capabilities and execution of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Value Rating",
    placeholder:
      "The importance, worth, or usefulness of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Durability Rating",
    placeholder:
      "The quality, dependability and longevity of an user's experience when interacting with Gear Item.",
  },
];
