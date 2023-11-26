import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Gallery from "./gallery";

export default function About({ store }: { store?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mt-4">
      {!store && (
        <>
          <p className="text-lg font-semibold text-black">About us</p>
          <div className="mt-3 text-base font-normal">
            {isExpanded ? (
              <>
                {text}
                {text.length > 220 && (
                  <span
                    className="cursor-pointer text-accentYellow-500"
                    onClick={() => setIsExpanded(false)}
                  >
                    {" "}
                    Read less
                  </span>
                )}
              </>
            ) : (
              <>
                {text.slice(0, 220)}
                {text.length > 220 && (
                  <>
                    ...{" "}
                    <span
                      className="cursor-pointer text-accentYellow-500"
                      onClick={() => setIsExpanded(true)}
                    >
                      Read more
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
      <div className="grid justify-center grid-cols-2 gap-5 my-3 sm:grid-cols-4">
        {action.map((_) => (
          <GradientBtn
            label={
              <Link to={_.link}>
                <span className="flex justify-center gap-1.5">
                  <Icon icon={_.icon} className="text-xl" />
                  <p className="font-bold whitespace-nowrap ">{_.label}</p>
                </span>
              </Link>
            }
            key={_.label}
          />
        ))}
      </div>
      {!store && <Gallery />}
    </section>
  );
}

const text =
  "Hi folks I'm Matthew,  matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly.";

const action = [
  {
    icon: "carbon:storage-pool",
    label: "Gear Room",
    link: "/user/gear",
  },
  {
    icon: "ri:star-line",
    label: "Reviews",
    link: "/user/reviews",
  },
  {
    icon: "mdi:cart-percent",
    label: "Listings",
    link: "/user/for-sale",
  },
  {
    icon: "tabler:needle-thread",
    label: "Threads",
    link: "/user/threads",
  },
];
