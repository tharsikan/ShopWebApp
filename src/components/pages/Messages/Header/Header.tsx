import { Link } from "react-router-dom";
import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import GreyBtn from "../../../buttons/GreyBtn/GreyBtn";

const Header = () => {
  return (
    <div className="my-[18px] sm:my-6 flex justify-between items-center">
      <div className="flex items-center gap-3 sm:gap-5 lg:gap-3 xl:gap-5 w-full sm:w-auto lg:w-full xl:w-auto">
        <GreyBtn
          className="w-full flex-grow sm:flex-grow-0 sm:min-w-[120px] fs-[14px]"
          label="Activity"
          to="/notifications"
        />{" "}
       
          <GradientBtn
            className="w-full flex-grow sm:flex-grow-0 lg:flex-grow xl:flex-grow-0 sm:min-w-[120px] lg:min-w-[full] xl:sm:min-w-[120px]"
            lg
            label="Messages"
          />
      </div>
      <div className="hidden sm:flex lg:hidden xl:flex items-center gap-7">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/assets/vectors/messages/mark-read.svg" alt="mark read" />
          <div className="text-accentGray-700">Mark as read</div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/assets/vectors/messages/settings.svg" alt="settings" />
          <div className="text-accentGray-700">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
