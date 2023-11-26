import { Icon } from '@iconify/react';
import GreyBtn from '../../buttons/GreyBtn';
import { cn } from '../../../helpers/utils';

export const ProductCard = ({ alt }: { alt?: boolean }) => {
  return (
    <div className="bg-white border rounded-lg border-slate-400/20 p-1.5 ">
      <div className="h-full w-full bg-neutral-100 rounded-lg border backdrop-blur-[20px] relative">
        <Icon
          icon={"ri:heart-line"}
          className="text-lg text-[#BEBEBE] right-2 top-2 absolute cursor-pointer hover:text-accentYellow-500 "
        />
        <img
          className="object-cover object-bottom w-full h-full "
          src="/assets/imgs/gear/bass/fender/mm.png"
          alt=""
        />
      </div>
      <div>
        <p
          className={cn("mt-1 text-sm font-semibold", { "line-clamp-1": alt })}
        >
          ASAT Classic Sonic
        </p>
        {alt && (
          <p className="text-zinc-600 text-[10px] font-medium">
            Lorem Ipsum is simply dummy text of the printing and{" "}
          </p>
        )}
        <p className="text-sm font-semibold">$ 1,850</p>
        {!alt && (
          <>
            <p className="text-zinc-600 text-[10px] font-medium">
              + $115 Shipping
            </p>
            <p className="text-lime-700 text-xs font-semibold">
              Great Condition
            </p>
            <p className="mt-2 text-xs font-medium">
              Matts Personal Collection
            </p>
            <p className="text-zinc-600 text-[10px] font-medium">
              Damascus, OR, United States
            </p>
          </>
        )}

        <button className="flex items-center justify-center gap-2.5 mb-2 mt-2 w-full h-8 rounded-lg bg-gradient-to-l from-red-500 to-yellow-500">
          <Icon icon={"uil:cart"} className="text-2xl text-white" />
          <p className="text-sm font-semibold text-center text-white">
            Add to {alt ? "Room" : "Cart"}
          </p>
        </button>
        {!alt && <GreyBtn label={"Make an Offer"} short />}
      </div>
    </div>
  );
};
