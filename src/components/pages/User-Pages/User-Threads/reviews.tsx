import Card from "../../../common/Card/Card";
import { RatingStars } from "../../Single-Page/Listing/details";

const UserReview = () => {
  return (
    <Card className="p-5">
      <h4 className=" text-lg">User Reviews</h4>

      <div className="divide-y divide-zinc-100">
        {reviews.map((el, idx) => {
          return (
            <div className="py-5" key={"home-top-gear" + idx}>
              <div className="flex items-center gap-[14px]">
                <img
                  className="w-[46px] h-[46px] rounded-[50%] flex-shrink-0"
                  src={el.img}
                  alt={el.name}
                />
                <div className="mt-[2px] flex-grow flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{el.name}</div>
                    <RatingStars numberOfReviews="2344"/>
                  </div>
                  <div className="text-accentGray-700 font-sm">{el.time}</div>
                </div>
              </div>
              <div className="mt-1 text-sm">{el.review}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UserReview;

const reviews = [
  {
    img: "/assets/imgs/gear/bass/fender/pbass70.png",
    name: "Fender Jazz 80s",
    time: "1 day ago",
    review:
      "My all-time favorite bass, best years make for all fenders. Factory was well a oiled machine and inspectations were top notch. No Regrets.",
  },
  {
    img: "/assets/imgs/gear/bass/fender/pbass60.png",
    name: "Fender P-Bass 60s",
    time: "11 days ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/assets/imgs/gear/bass/fender/amdeluxe.png",
    name: "Fender American Deluxe",
    time: "17 days ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/assets/imgs/gear/bass/fender/pbass70.png",
    name: "Fender P-Bass 70",
    time: "18 days ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
