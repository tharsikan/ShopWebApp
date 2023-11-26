import clsx from "clsx";

const chats = [
  {
    img: "/assets/imgs/home/user-img-6.png",
    name: "TeamFender",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-7.png",
    name: "ISeeNord",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-8.png",
    name: "Lauralee Quintero",
    msg: "Lorem Ipsum",
    active: true,
  },
  {
    img: "/assets/imgs/home/user-img-9.png",
    name: "Emma Watson",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-10.png",
    name: "Angelina Jolie",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-6.png",
    name: "Brie Larson",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-7.png",
    name: "Tom Hardy",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-8.png",
    name: "Matt Damon",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-9.png",
    name: "Brie Larson",
    msg: "Lorem Ipsum",
  },
  {
    img: "/assets/imgs/home/user-img-10.png",
    name: "Jessica Alba",
    msg: "Lorem Ipsum",
  },
];
interface Props {}

const ChatPeople = ({}: Props) => {
  return (
    <div className="p-[10px] pt-0">
      {chats.map((el, idx) => {
        return (
          <div
            key={"chat-" + idx}
            className={clsx(
              "flex justify-between items-start p-2 border-t border-solid border-accentGray-600 hover:bg-accentGray-400 transition-colors cursor-pointer",
              el.active && "bg-accentGray-400"
            )}
          >
            <div className="flex items-center gap-2">
              <img
                className="w-[54px] h-[54px] rounded-[50%] flex-shrink-0"
                src={el.img}
                alt={el.name}
              />
              <div>
                <div className="restrict-one-line font-semibold text-sm">
                  {el.name}
                </div>
                <div className="restrict-one-line text-accentGray-700">
                  {el.msg}
                </div>
              </div>
            </div>

            <img
              className="cursor-pointer"
              src="/assets/vectors/messages/star.svg"
              alt="star"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatPeople;
