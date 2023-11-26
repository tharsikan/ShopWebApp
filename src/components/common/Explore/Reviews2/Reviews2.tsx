import LightBlueBtn from "../../../buttons/LightBlueBtn";

const reviews = [
  {
    img: "/assets/imgs/home/marcus.png",
    name: "Fender Mikey Way Jazz Bass: A Tribute to an Iconic Era",
    time: "October 23, 2023 ",
   
  },
  {
    img: "/assets/imgs/home/corey.png",
    name: "Fender Release Troy Sanders Precision Bass",
    time: "October 22, 2023",
   
  },
  {
    img: "/assets/imgs/home/mark.png",
    name: "Nordstrand Unveil The V2 Acinonyx Bass",
    time: "June 19, 2023",
   
  },
];

const Reviews2 = () => {
  return (
    <div>
      <h4 className="mb-5 text-base underline">Articles</h4>

      <div>
        {reviews.map((el, idx) => {
          return (
            <div
              className="mb-[8px] flex border-gray-300 border-b-2 border-r-2 cursor-pointer pr-1 pb-1 rounded-md"
              key={"home-top-gear" + idx}
            >
              <div className="items-start flex-none w-[25%] mr-1">
                <img
                  className="w-full h-[85px] rounded-[10%] flex-shrink-0"
                  src={el.img}
                  alt={el.name}
                />
              </div>
              <div className="flex-none w-[70%]">
                <div>
                  <div className="text-md font-semibold">{el.name}</div>
                </div>
                <div className="text-accentGray-700 text-xs font-sm ">
                  {el.time}
                </div>
              </div>

              {/* <div className="mt-1 text-sm">{el.review}</div> */}
            </div>
          );
        })}
        <LightBlueBtn label="View All" />
      </div>
    </div>
  );
};

export default Reviews2;
