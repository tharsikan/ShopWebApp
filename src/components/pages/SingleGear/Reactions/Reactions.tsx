import { useState } from "react";
import Card from "../../../common/Card";
import clsx from "clsx";
import { Icon } from "@iconify/react";

const reactions = [
  {
    icon: "mdi:bible",
    label: "Gospel",
    percent: 0,
  },
  {
    icon: "zondicons:music-artist",
    label: "R&B",
    percent: 80,
  },
  {
    icon: "fluent-emoji-high-contrast:goggles",
    label: "Punk",
    percent: 50,
  },
  {
    icon: "fa-solid:hat-cowboy",
    label: "Country",
    percent: 80,
  },
  {
    icon: "bx:cool",
    label: "Hip-Hop",
    percent: 70,
  },
  {
    icon: "mdi:file-music",
    label: "Jazz",
    percent: 60,
  },
  {
    icon: "akar-icons:music-album-fill",
    label: "Soul",
    percent: 60,
  },
  {
    icon: "mingcute:light-fill",
    label: "Funk",
    percent: 30,
  },
  {
    icon: "bi:music-player-fill",
    label: "Pop",
    percent: 80,
  },
  {
    icon: "akar-icons:rock-on",
    label: "Rock",
    percent: 50,
  },
  {
    icon: "fluent-emoji-high-contrast:musical-score",
    label: "Classical",
    percent: 60,
  },
];

const Reactions = () => {
  const [selector, setSelector] = useState("");
  return (
    <div className="overflow-auto horizontal-scrollbar">
      <div className="mt-4 min-w-[700px]">
        <Card className="flex justify-between items-center gap-[10px] md:gap-7 flex-wrap py-4 px-6 ">
          {reactions.map((el, idx) => {
            return (
              <div
                className="cursor-pointer flex flex-col justify-center items-center gap-1 "
                key={el.label}
                onClick={() => setSelector(el.label)}
              >
                <Icon
                  className={clsx(
                    selector === el.label
                      ? " w-6 h-6 text-orange-500"
                      : " w-6 h-6"
                  )}
                  icon={el.icon}
                />
                <div
                  className={clsx(
                    selector === el.label
                      ? "text-orange-500 text-[10px] md:text-xs xl:text-xs"
                      : "text-accentGray-700 text-[10px] md:text-xs xl:text-xs"
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

export default Reactions;
