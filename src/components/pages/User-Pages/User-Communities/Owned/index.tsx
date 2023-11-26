import ForSaleTopBar from "../../../Market/for-sale-topbar";
import GearRoomProfile from "../../../My-Gear-Room/profile";
import { CommunityCard } from "../Communities";

const OwnedCommunities = () => {
  // Add 12. User Communities Page (user owned communities)
  return (
    <div>
      {" "}
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

export default OwnedCommunities;
