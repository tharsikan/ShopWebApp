import GradientBtn from "../../../buttons/GradientBtn";
import Card from "../../../common/Card/Card";

const Feeds = () => {
  return (
    <Card>
      <div className="flex overflow-auto hidden-scrollbar gap-[8px] mt-[px]">
        {feedTypes.map((el: any, idx: any) => {
          return (
            <GradientBtn
              key={"home-feed-type" + idx}
              {...el}
              textMd
              iconClassName="w-[30px]"
              veryShort
              className="h-9 font-bold"
            />
          );
        })}
      </div>
    </Card>
  );
};

const feedTypes = [
  {
    icon: "/assets/vectors/home/add.svg",
    label: "New",
  },
  {
    icon: "/assets/vectors/home/hot.svg",
    label: "Hot",
  },
  {
    icon: "/assets/vectors/home/topics.svg",
    label: "Latest",
  },
  {
    icon: "/assets/vectors/home/topics.svg",
    label: "Topics",
  },
  // {
  //   icon: "/assets/vectors/home/add.svg",
  //   label: "New Gear",
  // },
  {
    icon: "/assets/vectors/home/hot.svg",
    label: "Trending",
  },
];

export default Feeds;
