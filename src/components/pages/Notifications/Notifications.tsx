import Header from "./Header";
import Search from "../../common/Search/Search";

import ChatPeople from "./ChatPeople";
import clsx from "clsx";

import "./Notifications.css";
import Jumbo from "../../common/Jumbotron/Jumbo";

const notifications = [
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    highlited: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
    reply: true,
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
    reply: true,
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    icon: "/assets/vectors/notifications/stocks.svg",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    icon: "/assets/vectors/notifications/arrows.svg",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    icon: "/assets/vectors/notifications/arrows.svg",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    icon: "/assets/vectors/notifications/msg.svg",
    time: "14h",
    name: "Jessica Alba",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been,",
  },
];

const Notifications = () => {
  return (
    <div className="font-monterrat">
      <Jumbo title={"My Notifications"} des={"Find your activities"} />

      <Header />

      <div className="bg-white border border-solid border-accentGray-600 rounded-lg p-[10px] sm:p-[18px]">
        <div className="justify-between items-center pb-[18px] sm:flex hidden">
          <h3 className="text-[22px] font-semibold">Earlier</h3>
        </div>

        <div>
          {notifications.map((el, idx) => {
            console.log(el.icon);
            return (
              <div
                key={"notification" + idx}
                className={clsx(
                  "flex items-start justify-between gap-3 border-solid border-accentGray-400 transtion-all bg-transparent notification-item",
                  idx === 0
                    ? "sm:border-t pt-0 px-0 sm:px-[14px] p-[14px] sm:pt-[14px]"
                    : "border-t py-[14px] px-0 sm:px-[14px]"
                )}
              >
                <div className="flex-shrink-0 relative">
                  <img
                    className="w-11 h-11 rounded-[50%]"
                    src={el.img}
                    alt={el.name}
                  />
                  {el.icon && (
                    <div className="absolute right-0 bottom-0 bg-white rounded-[50%] w-4 h-4 flex items-center justify-center">
                      <img className="w-[70%]" src={el.icon} alt="icon" />
                    </div>
                  )}
                </div>
                <div className="flex-grow pt-1">
                  <h4 className="text-sm font-semibold flex items-center gap-3">
                    {el.name} <div className="text-accentGray-700"> · </div>{" "}
                    <div className="text-accentGray-700 font-normal text-xs">
                      {el.time}
                    </div>
                  </h4>
                  <p className="text-accentGray-700 text-xs">
                    {el.description}
                  </p>
                  {el.reply && (
                    <button className="rounded-md inline-flex gap-2 font-semibold text-sm text-accentBlue-500 bg-[#0038FF] bg-opacity-10 py-2 px-3 mt-3">
                      <img
                        src="/assets/vectors/notifications/return.svg"
                        alt="return"
                      />
                      Reply
                    </button>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <img src="/assets/vectors/messages/menu.svg" alt="menu" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
