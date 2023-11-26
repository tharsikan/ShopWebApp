import React from "react";
import ForSaleTopBar from "../../Market/for-sale-topbar";
import SimilarProduct from "../../Market/similar-product";
import GearRoomProfile from "../../My-Gear-Room/profile";
import Posts from "../../Home/Posts";

const UserThreads = () => {
  // Add 13. User Threads Page (History of all user threads) Here
  return (
    <div>
      <GearRoomProfile store thread />
      <ForSaleTopBar store className="mt-6" />
      <Posts />
    </div>
  );
};

export default UserThreads;
