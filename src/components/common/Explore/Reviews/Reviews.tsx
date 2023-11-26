const reviews = [
  {
    img: "/assets/imgs/home/review/nord.png",
    title: "Nord Stage 4",
    subTitle: "Keyboard",
    user: "KeyLover203",
    userImg: "/assets/imgs/home/user-img-6.png",
  },
  {
    img: "/assets/imgs/home/review/fender.png",
    title: "Fender Am. Ultra Stratocaster",
    subTitle: "Electric Guitar",
    user: "6GearHead",
    userImg: "/assets/imgs/home/user-img-6.png",
  },
  {
    img: "/assets/imgs/home/review/prs.png",
    title: "Ernie Ball Music Man ",
    subTitle: "Electric Guitar",
    user: "MMsoundz11",
    userImg: "/assets/imgs/home/user-img-7.png",
  },
  {
    img: "/assets/imgs/home/review/ibanez.png",
    title: "PRS Paul Reed Smith",
    subTitle: "Electric Guitar",
    user: "MonoStringz",
    userImg: "/assets/imgs/home/user-img-6.png",
  },
  {
    img: "/assets/imgs/home/review/fender2.png",
    title: "Fender Jim Root Stratocaster",
    subTitle: "Electric Guitar",
    user: "MuzLuver33",
    userImg: "/assets/imgs/home/user-img-7.png",
  },
];

const Reviews = () => {
  return (
    <div>
      <h4 className="mb-[18px] text-base underline">Gear Reviews</h4>

      <div>
        {reviews.map((el, idx) => {
          return (
            <div
              className="flex items-start gap-[14px] mb-[18px] cursor-pointer border-b-2 border-r-2 pr-1 pb-1 rounded-md border-gray-300"
              key={"home-top-gear" + idx}
            >
              <img
                className="w-[54px] h-[54px] rounded-[50%] flex-shrink-0"
                src={el.img}
                // @ts-ignore
                alt={el.name}
              />
              <div className="mt-[2px] flex-grow flex justify-between items-center">
                <div className="w-full">
                  <div className="text-base font-semibold">{el.title}</div>
                  <div className="text-sm font-medium text-accentBlue-500">
                    {el.subTitle}
                  </div>
                  <div className="flex items-center justify-end w-full gap-2">
                    <div>by {el.user}</div>
                    <img
                      className="w-8 h-8 rounded-[50%]"
                      src={el.userImg}
                      alt={el.user}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
