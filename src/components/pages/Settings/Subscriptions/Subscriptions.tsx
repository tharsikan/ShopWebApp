import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { selectLoginModalState, startSignup } from "../../../../redux/features/modal.store";
import RegisterForm from "../../../auth/RegisterForm";
import DialogWrapper from "../../../common/dialog-wrapper";
import { useSelector } from "react-redux";
import LoginForm from "../../../auth/LoginForm";
import { inputAssets } from "../../../auth/inputs";
import SubModal from "./Sub-Modal";

type Props = {
  type: boolean
}


const Subscriptions = (props: Props) => {
  const dispatch = useAppDispatch();
  const login = useSelector(selectLoginModalState);
  const year = { time: "Yearly", price: "$3.99", price2: "/($47.90+tax)" };
  const month = { time: "Monthly", price: "$4.99", price2: "/monthly" };
  const [info, setInfo] = useState(year);
  useEffect(() => {
     if (props.type === true) {
       setInfo(year);
     } else {
       setInfo(month);
     }
   });
  return (
    <div className="mt-7">
      <div className="mt-7 grid grid-cols-3 sm:gap-4 max-w-[882px] mx-auto">
        <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Rookie</div>
          <div className="text-xs">Best For Overall Browsing </div>
          <div className="mt-6 sm:text-5xl text-2xl font-bold text-primary-gradient">
            Guest
          </div>
          <div className="text-accentGray-700 font-semibold">
            Limited Access
          </div>
          <div className="my-6 flex justify-center">
            <DialogWrapper
              content={
                login ? (
                  <LoginForm inputAssets={inputAssets} />
                ) : (
                  <RegisterForm />
                )
              }
            >
              <GradientBtn
                className="w-full"
                label="Signup Today"
                onClick={() => dispatch(startSignup())}
              />
            </DialogWrapper>
          </div>
          <div className="font-semibold text-sm">Limited Community Access</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">View All Postings</div>
            <div className="font-semibold my-2">Pays Processing Fee</div>
            <div className="font-semibold my-2">View All Listings</div>
            <div className="font-semibold my-2">Find Users</div>
            <div className="font-semibold my-2">Find Threads</div>
            <div className="font-semibold my-2">Access Gear Catalog</div>
            <div className="font-semibold my-2">Access LIMITED Reviews</div>
            <div className="font-semibold my-2">Find Communities</div>
            <div className="font-semibold my-2">
              View LIMITED Gear Collections
            </div>
          </div>
        </div>
        <div className="bg-amber-100 border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Elite</div>
          <div className="text-xs">Best For Everyday Use</div>
          <div className="mt-6 sm:text-5xl text-2xl font-bold text-primary-gradient">
            {info.price}
            <span className="text-sm">{info.price2}</span>
          </div>
          <div className="text-accentGray-700 font-semibold">All Access</div>
          <div className="my-6 flex justify-center">
            <DialogWrapper
              content={
                <SubModal/>
              }
            >
              <GradientBtn className="w-full" label={`Renews ${info.time}`} />
            </DialogWrapper>
          </div>
          <div className="font-semibold text-sm">Premium Muzfi Member</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">Access everything</div>
            <div className="font-semibold my-2">Ad Free Feed</div>
            <div className="font-semibold my-2">Boost on ALL Listings</div>
            <div className="font-semibold my-2">Community Mods get Paid</div>
            <div className="font-semibold my-2">Access Unlimited Reviews</div>
            <div className="font-semibold my-2">Unlimited Gear Items</div>
            <div className="font-semibold my-2">
              (5%) Fee for Item Sold Under $1000
            </div>
            <div className="font-semibold my-2">
              (4%) Fee for Item Sold Over $1000
            </div>
            <div className="font-semibold my-2">24/7 Support</div>
          </div>
        </div>
        <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
          <div className="text-2xl font-semibold">Pro</div>
          <div className="text-xs">Best For Personal Experience</div>
          <div className="mt-6 sm:text-5xl text-2xl font-bold text-primary-gradient">
            Free
          </div>
          <div className="text-accentGray-700 font-semibold">Pro Access</div>
          <div className="my-6 flex justify-center">
            <DialogWrapper
              content={
                login ? (
                  <LoginForm inputAssets={inputAssets} />
                ) : (
                  <RegisterForm />
                )
              }
            >
              <GradientBtn
                className="w-full"
                label="Signup Today"
                onClick={() => dispatch(startSignup())}
              />
            </DialogWrapper>
          </div>
          <div className="font-semibold text-sm">True Muzfi Experience</div>

          <div className="mt-3 font-semibold text-xs">
            <div className="font-semibold my-2">Unlimited Listings</div>
            <div className="font-semibold my-2">Join Unlimited Communities</div>
            <div className="font-semibold my-2">Build Communities</div>
            <div className="font-semibold my-2">Start Your OWN Threads</div>
            <div className="font-semibold my-2">
              Pays Fee (6%) for All Sold Items
            </div>
            <div className="font-semibold my-2">Comment/Like and Interact</div>
            <div className="font-semibold my-2">
              Build Your Virtual Gear Collection
            </div>
            <div className="font-semibold my-2">Leave Reviews and Ratings</div>

            <div className="font-semibold my-2">24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
