import { Outlet } from "react-router-dom";
import Jumbo from "../../../common/Jumbotron/Jumbo";
import Tabs from "../../../common/Tabs/Tabs";


const tabs = [
  {
    to: "/settings/account",
    icon: "/assets/imgs/settings/account.png",
    label: "Account",
  },
  {
    to: "/settings/profile",
    icon: "/assets/vectors/settings/profile.svg",
    label: "Profile",
  },
  {
    to: "/settings/subscriptions",
    icon: "/assets/vectors/settings/subscription.svg",
    label: "Subscriptions",
  },
  {
    to: "/settings/notifications",
    icon: "/assets/vectors/settings/notifications.svg",
    label: "Notifications",
  },
  {
    to: "/settings/chat",
    icon: "/assets/vectors/settings/chat.svg",
    label: "Chat & Messaging",
  },
  {
    to: "/settings/safety",
    icon: "/assets/vectors/settings/safety.svg",
    label: "Safety & Privacy",
  },
];

const SettingsLayout = () => {
  return (
    <>
     <Jumbo title={"Settings"} des={"Find your settings"}/>
      <Tabs tabsData={tabs} />

      <Outlet />
    </>
  );
};

export default SettingsLayout;
