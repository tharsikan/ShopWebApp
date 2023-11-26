import { Icon } from "@iconify/react";
import { useState } from "react";
import Card from "../../../common/Card";
import clsx from "clsx";

const reactions = [
  {
    icon: "icomoon-free:happy",
    label: "Love",
    percent: 100,
  },
  {
    icon: "wpf:happy",
    label: "Like",
    percent: 30,
  },
  {
    icon: "fa6-regular:face-meh",
    label: "OK",
    percent: 10,
  },
  {
    icon: "fluent-mdl2:sad",
    label: "Dislike",
    percent: 10,
  },
  {
    icon: "pajamas:face-unhappy",
    label: "Hate",
    percent: 10,
  },
];

const Ratings = () => {
  const [selector, setSelector] = useState("");
  return (
    <div className="overflow-auto horizontal-scrollbar">
      <div className="mt-4 ">
        <Card className="flex justify-between items-center flex-wrap py-4 px-6 w-[80%]">
          {reactions.map((el, idx) => {
            return (
              <div
                className="cursor-pointer flex flex-col justify-center items-center gap-0.5"
                key={el.label}
                onClick={() => setSelector(el.label)}
              >
                <Icon
                  icon={el.icon}
                  className={clsx(
                    selector === el.label
                      ? " w-6 h-6 text-orange-500"
                      : " w-6 h-6"
                  )}
                />
                <div
                  className={clsx(
                    selector === el.label
                      ? "text-orange-500 text-[10px]"
                      : "text-accentGray-700 text-[10px]"
                  )}
                >
                  {el.label}
                </div>

                <div className="w-full h-[3px] rounded bg-accentGray-400">
                  <div
                    className="h-full rounded bg-accentRed-500"
                    style={{
                      width: `${el.percent}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Ratings;
