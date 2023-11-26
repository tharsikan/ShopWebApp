import clsx from "clsx";

import Header from "./Header";
import Search from "../../common/Search/Search";

import ChatPeople from "./ChatPeople";
import GreyBtn from "../../buttons/GreyBtn/GreyBtn";
import Jumbo from "../../common/Jumbotron/Jumbo";

const messages = [
  {
    him: true,
    texts: ["Hey Bro", "Bro, will call you around 5.30-6pm today?"],
    time: "02:57PM",
  },
  {
    texts: [
      "Ok give me some time to make a schedule for you. https://www.youtube.com/watch?v=u6Aik--YCd4",
    ],
    time: "02:57PM",
  },
  { him: true, texts: ["Great. Thank you!"], time: "02:57PM" },
];

const Messages = () => {
  return (
    <div className="font-monterrat">
      <div className="hidden sm:block">
        <Jumbo title="My Messages" des="Find your messages"/>
      </div>

      <Header />

      <div className="flex flex-col xl:flex-row bg-white border border-solid border-accentGray-600 rounded-lg">
        <div className="flex-shrink-0 max-w-auto xl:max-w-[300px] pb-0">
          <div className="">
            <div className="p-[10px]">
              <Search
                noPost
                fullWidth
                extraComp={
                  <div className="flex sm:hidden lg:flex xl:hidden gap-[10px]">
                    <GreyBtn
                      className="w-full flex-grow sm:flex-grow-0 fs-[14px] px-2"
                      icon={
                        <img
                          src="/assets/vectors/messages/mark-read.svg"
                          alt="mark read"
                        />
                      }
                    />
                    <GreyBtn
                      className="w-full flex-grow sm:flex-grow-0 fs-[14px] px-2"
                      icon={
                        <img
                          src="/assets/vectors/messages/settings.svg"
                          alt="settings"
                        />
                      }
                    />
                  </div>
                }
              />
            </div>
          </div>

          <ChatPeople />
        </div>
        <div className="flex-grow my-[10px] border-t xl:border-t-0 border-l border-solid border-accentGray-600 flex flex-col py-[10px]">
          <div className="flex justify-between items-start mx-2 pb-2 border-b border-solid border-accentGray-600">
            <div className="flex items-center gap-2">
              <img
                className="w-[42px] h-w-[42px] rounded-[50%] flex-shrink-0"
                src="/assets/imgs/home/user-img-7.png"
                alt="ISeeNord"
              />
              <div>
                <div className="font-semibold text-sm">ISeeNord</div>
                <div className="text-accentGray-700">
                  Last seen: 12 minutes ago
                </div>
              </div>
            </div>
            <div className="flex gap-5 pt-2 pr-2">
              <img
                className="cursor-pointer"
                src="/assets/vectors/messages/star.svg"
                alt="star"
              />
              <img
                className="cursor-pointer"
                src="/assets/vectors/messages/menu.svg"
                alt="menu"
              />
            </div>
          </div>
          <div className="flex-grow flex justify-end flex-col gap-5 pt-5">
            <div className="px-[10px] flex flex-col gap-5">
              {messages.map((el, idx) => {
                return (
                  <div
                    key={"message-" + idx}
                    className={clsx(
                      "flex items-end gap-[6px]",
                      !el.him && "flex-row-reverse"
                    )}
                  >
                    <img
                      className="w-9 h-9 rounded-[50%]"
                      src="/assets/imgs/home/user-img-6.png"
                      alt="user"
                    />

                    <div className="flex flex-col gap-[10px]">
                      {el.texts?.map((el2, idx2) => {
                        return (
                          <div
                            key={"message-" + idx + "-text" + idx2}
                            className="flex"
                          >
                            <div>
                              <div
                                className={clsx(
                                  "p-[14px] border border-solid border-accentGray-100 rounded-[20px] mb-2 max-w-[284px] dont-break-out",
                                  el.him
                                    ? "rounded-bl-none"
                                    : "rounded-br-none bg-accentBlue-400 text-white"
                                )}
                              >
                                {el2}
                              </div>
                              <div
                                className={clsx(
                                  "text-[10px]",
                                  !el.him && "text-end"
                                )}
                              >
                                {el.time}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-[10px] bg-accentGray-400 rounded-lg mx-[10px]">
              <div className="bg-white rounded-lg shadow-md relative">
                <input
                  className="bg-white h-14 rounded-lg pl-[10px] outline-none w-full"
                  type="text"
                  placeholder="Type a message"
                />

                <div className="flex items-center gap-4 absolute right-1 top-1 bottom-1">
                  <img
                    className="cursor-pointer"
                    src="/assets/vectors/messages/emoji-picker.svg"
                    alt="emoji-picker"
                  />
                  <img
                    className="cursor-pointer"
                    src="/assets/vectors/messages/img-selector.svg"
                    alt="img-selector"
                  />
                  <div className="cursor-pointer w-12 h-12 rounded-md bg-accentGreen-500 flex items-center justify-center">
                    <img src="/assets/vectors/messages/send.svg" alt="send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
