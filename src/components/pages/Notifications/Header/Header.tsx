import GradientBtn from "../../../buttons/GradientBtn/GradientBtn";
import GreyBtn from "../../../buttons/GreyBtn/GreyBtn";

const Header = () => {
  return (
    <div className="my-[18px] sm:my-6 flex justify-between items-center">
      <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto">
        <GradientBtn
          className="w-full flex-grow sm:flex-grow-0 sm:min-w-[120px]"
          lg
          label="Notifications"
        />
        <GreyBtn
          className="w-full flex-grow sm:flex-grow-0 sm:min-w-[120px] fs-[14px]"
          label="Messages"
          to="/messages"
        />
      </div>
      <div className="hidden sm:flex items-center gap-7">
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
