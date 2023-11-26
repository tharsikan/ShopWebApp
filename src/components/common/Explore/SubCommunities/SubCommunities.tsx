import LightBlueBtn from "../../../buttons/LightBlueBtn";
import YellowBtn from "../../../buttons/YellowBtn";

const subCommunities = [
  {
    img: "/assets/imgs/brands/fender.png",
    name: "TeamFender",
    memNum: "2.3k",
  },
  {
    img: "/assets/imgs/brands/tama.png",
    name: "IPlayTama",
    memNum: "1.6k",
  },
  {
    img: "/assets/imgs/brands/korg.png",
    name: "KorgGang",
    memNum: "2.3k",
  },
  {
    img: "/assets/imgs/brands/pearl.png",
    name: "PearlsFam",
    memNum: "1.6k",
  },
];

const SubCommunities = () => {
  return (
    <div>
      <h4 className="mb-5 text-base underline">Popular Communities</h4>

      <div>
        {subCommunities.map((el, idx) => {
          return (
            <div
              className="flex items-start gap-[16px] mb-[18px] cursor-pointer border-b-2 pr-1 pb-1 border-gray-200"
              key={"home-popular-sub-communicaties" + idx}
            >
              <img
                className="w-[36px] h-[36px] rounded-[70%] flex-shrink-0"
                src={el.img}
                alt={el.name}
              />
              <div className="mt-[2px] flex-grow flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold">{el.name}</div>
                  <div className="text-xs text-accentGray-700">
                    {el.memNum} members
                  </div>
                </div>
                <YellowBtn label={"Join"} className="w-12 text-xs mr-6" />
              </div>
            </div>
          );
        })}

        <LightBlueBtn label="View All" />
      </div>
    </div>
  );
};

export default SubCommunities;
