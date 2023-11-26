import { Link, useLocation } from "react-router-dom";
import YellowBtn from "../../../../buttons/YellowBtn/YellowBtn";
import DialogWrapper from "../../../../common/dialog-wrapper";
import ForSaleTopBar from "../../../Market/for-sale-topbar";
import GearRoomProfile from "../../../My-Gear-Room/profile";
import EditMod from "./edit-mod";

const MyCommunities = () => {
  // Add 12. User Communities Page (List of all user communities) Here
  return (
    <div>
      <GearRoomProfile communities store />
      <ForSaleTopBar communities store className="mt-6" />
      <section className="grid grid-cols-1 gap-5 p-4 mt-6  bg-white border rounded-lg border-slate-200 lg:grid-cols-2">
        {Array.from(Array(8)).map((_, idx) => (
          <CommunityCard {..._} idx={idx + 1} />
        ))}
      </section>
    </div>
  );
};

export default MyCommunities;

export const CommunityCard = ({ idx }: { idx: number }) => {
  const { pathname } = useLocation();
  return (
    <div className="cursor-pointer border-b border-r hover:border-t-4 hover:border-orange-300 pb-2 ">
      <div className="flex items-center gap-2.5 text-black ">
        <p className="w-5 text-sm font-medium">0{idx}</p>
        <img
          alt=""
          className="w-[54px] h-[54px] rounded-[108.49px] shadow"
          src="/assets/imgs/home/mark.png "
        />
        <div>
          <p className="text-base font-semibold ">r/news</p>
          <p className="w-[229px]  text-sm font-medium">
            Learning and Education
          </p>
          <p className="text-sm font-medium text-neutral-400 ">41M members</p>
        </div>
      </div>

      {pathname.includes("/communities/own") ? (
        <br />
      ) : (
        <div className="flex mt-2">
          <div className="basis-[5.5rem] " />
          <div className="flex gap-2.5">
            <DialogWrapper content={<EditMod />}>
              <YellowBtn label={"Edit Mod"} short />
            </DialogWrapper>
            <Link to="/que/settings">
              <YellowBtn
                className="bg-red-500 border border-current hover:opacity-50"
                label={"Que"}
                short
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
