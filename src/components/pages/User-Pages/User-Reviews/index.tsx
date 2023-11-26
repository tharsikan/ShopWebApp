import ForSaleTopBar from "../../Market/for-sale-topbar";
import GearRoomProfile from "../../My-Gear-Room/profile";
import UserReview from "../User-Threads/reviews";

const UserReviews = () => {
  // Add 14. User Reviews Here
  return (
    <div>
      <GearRoomProfile store />
      <ForSaleTopBar store className="mt-6" />
      <UserReview />
    </div>
  );
};

export default UserReviews;
