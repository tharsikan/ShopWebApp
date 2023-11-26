import clsx from "clsx";
import Card from "../../../../../common/Card";
import "../Post.css";
import { Author } from "../common/author";
import { CardFooter } from "../common/card-footer";
import { Images } from "../common/images";
import { User } from "../common/user";

import { Link } from "react-router-dom";
import GradientBtn from "../../../../../buttons/GradientBtn";

const Listing = ({ el, idx }: { el: any; idx: number }) => {
  return (
    <Card className="h-full home-post" key={"home-post" + idx}>
      <User el={el} />
      <hr />
      <Author el={el} idx={idx} />
      <Link to={el.link}>
        <div className="">
          <div className="text-center">
            <p className="font-semibold text-lg"> 1979 Fender Jazz Bass</p>
            <p className="text-xs font-semibold text-red-400">Current Gear</p>
          </div>
        </div>
      </Link>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 my-1">
        {data.map((_) => (
          <div key={_.text} className="w-full p-px rounded-md  bg-slate-700">
            <div className="flex bg-gray-200 gap-2 md:gap-3.5 h-full items-center rounded-[5px] px-1.5 py-1">
              <div className="p-1 shrink-0 max-md:w-7 rounded-full bg-amber-500">
                <img src={_.icon} alt="" />
              </div>
              <div>
                <p className="font-semibold text-black text-xs md:text-base ">
                  {_.value}
                </p>
                <p className="text-slate-900 text-[8px] md:text-[12px] md:font-semibold ">
                  {_.text}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex md:flex-col gap-2 max-md:col-span-full items-center justify-between w-full ">
          <div className="flex gap-2 w-full">
            <button
              className={clsx(
                "border  border-solid border-slate-700 transition-transform hover:scale-105 bg-gray-800 rounded-lg w-full md:h-6 inline-flex justify-center items-center"
              )}
            >
              <img
                className="w-5 h-5 "
                src="/assets/vectors/common/heart.svg"
                alt="heart"
              />
            </button>
            <button className="md:h-6 h-9 text-white w-full transition-transform hover:scale-105 bg-gray-800  rounded-lg border border-solid border-slate-700 text-[14px] font-semibold px-4">
              Offer
            </button>
          </div>
          <GradientBtn
            iconClassName="w-6 h-5 "
            textClassName="font-semibold"
            className="w-full transition-transform hover:scale-105 md:h-6 h-9 rounded-lg font-semibold "
            icon="/assets/vectors/common/cart.svg"
            label=" Cart"
          />
        </div>
      </div>
      {el.prodDescription && (
        <div className="mt-4 text-xs font-medium text-accentGray-800">
          {el.prodDescription}
        </div>
      )}
      <Images imgs={el.imgs} length={el.imgs?.length} idx={idx} />
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default Listing;

const data = [
  {
    icon: "/assets/vectors/home/polls.svg",
    text: "Asking Price",
    value: "$ 49.65",
  },
  {
    icon: "/assets/vectors/home/hot.svg",
    text: "Offers",
    value: "4",
  },
  {
    icon: "/assets/vectors/home/new-gear.svg",
    text: "Days",
    value: "2",
  },
];
