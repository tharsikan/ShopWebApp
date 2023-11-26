import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function GearLikes() {
  const [value, setValue] = useState(58);
  return (
    <section className="flex my-4 select-none w-fit">
      <div
        onClick={() => setValue((p) => ++p)}
        className="grid text-lg font-semibold rounded-tl rounded-bl cursor-pointer place-content-center bg-accentYellow-500 w-11 h-11"
      >
        <img
          className="w-4 md:w-6"
          src="/assets/vectors/home/arrow.svg"
          alt="arrow"
        />
      </div>
      <div className="grid text-lg font-semibold bg-white place-content-center w-11 h-11">
        {value}
      </div>
      <div
        onClick={() => setValue((p) => --p)}
        className="grid text-lg font-semibold border rounded-tr rounded-br cursor-pointer bg-zinc-100 place-content-center w-11 h-11"
      >
        <img
          src="/assets/vectors/home/arrow.svg"
          className="scale-y-[-1] w-4 md:w-6"
          alt="arrow"
        />
      </div>
     
    </section>
  );
}
