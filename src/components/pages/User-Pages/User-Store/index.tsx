import ForSaleTopBar from "../../Market/for-sale-topbar";
import SimilarProduct from "../../Market/similar-product";
import GearRoomProfile from "../../My-Gear-Room/profile";

const UserStore = () => {
  // Add 11. User Store Page (Threads of User listings)
  return (
    <div>
      <GearRoomProfile store />
      <ForSaleTopBar store className="mt-6" />
      <SimilarProduct className="sm:grid-cols-1 md:grid-cols-3" />
    </div>
  );
};

export default UserStore;
