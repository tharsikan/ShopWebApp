import { Icon } from "@iconify/react";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import GreyBtn from "../../buttons/GreyBtn/GreyBtn";
import { SearchBar } from "../../common/Search/Search";
import Inquiries from "./Inquiries";
import FaqAccordion from "./help-accordion";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import JumboHeader from "../../common/JumboHeader";

const Help = () => {
  const [helpSelection, setHelpSelection] = useState("buy");
  const action = () => {
    switch (helpSelection) {
      case "buy":
        return actionBuy;
        break;
      case "sell":
        return actionSell
        break;
      case "comm":
        return actionComm;
        break;
      default:
        return actionBuy;
    }
  }

  return (
    <Tabs.Root value={helpSelection} onValueChange={setHelpSelection}>
      <div>
        <JumboHeader
          title="Muzfi Help Center"
          des="Find solution and answers"
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-4 text-2xl font-semibold">
            How Can We Help You?
          </p>
          {/* <SearchBar fullWidth placeholder="Search" /> */}
          <Tabs.List
            className="flex flex-wrap gap-3 my-5 w-full  justify-center"
            aria-label="Help Center"
          >
            <Tabs.Trigger className="btn-user" value="buy">
              <button className="p-2 w-56 h-16 font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]">
                <span
                  className="flex items-center gap-2"
                  onClick={() => setHelpSelection("buy")}
                >
                  <Icon icon="icon-park-outline:buy" className="text-xl" />
                  <p className="font-bold ">Buying</p>
                </span>
              </button>
            </Tabs.Trigger>
            <Tabs.Trigger className="btn-user" value="sell">
              <button className="p-2 w-56 h-16 font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]">
                <span
                  className="flex items-center gap-2"
                  onClick={() => setHelpSelection("sell")}
                >
                  <Icon icon="ic:outline-sell" className="text-xl" />
                  <p className="font-bold ">Selling</p>
                </span>
              </button>
            </Tabs.Trigger>
            <Tabs.Trigger className="btn-user" value="comm">
              <button className="p-2 w-56 h-16 font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]">
                <span
                  className="flex items-center gap-2"
                  onClick={() => setHelpSelection("comm")}
                >
                  <Icon
                    icon="fluent:people-community-24-regular"
                    className="text-xl"
                  />
                  <p className="font-bold ">Communities</p>
                </span>
              </button>
            </Tabs.Trigger>
          </Tabs.List>
          <FaqAccordion type={helpSelection} />
          <div className="grid grid-cols-2 grid-rows-2 gap-9 mb-4">
            {action().map((el) => (
              <Link
                className="border border-current rounded-lg justify-center bg-amber-400/5 font-semibold text-accentYellow-500 hover:bg-orange-100 "
                to={el.link}
              >
                <button className="flex items-center  gap-2 p-7 text-sm md:text-lg ">
                  <Icon className="text-2xl min-w-fit" icon={el.icon} />{" "}
                  {el.label}
                </button>
              </Link>
            ))}
          </div>
          {/* <Inquiries /> */}
          {/* <div className="grid grid-cols-2 gap-9 my-6 ">
            {actions2.map((el) => (
              <button className="inline-flex gap-2 border border-current rounded-lg justify-center p-3   bg-amber-400/5 items-center text-sm md:text-lg font-semibold text-accentYellow-500">
                <Icon className="text-2xl min-w-fit" icon={el.icon} />{" "}
                {el.label}
              </button>
            ))}
          </div> */}
          <div className="bg-white rounded-lg border py-5 border-slate-400/20">
            <p className="text-center mb-3  text-2xl font-semibold">
              Additional Resources
            </p>{" "}
            <div className="gap-5 grid grid-cols-2 lg:grid-cols-4 px-12">
              {actions3.map((el) => (
                <GreyBtn
                  label={el.label}
                  to={el.link}
                  className={
                    "text-sm font-semibold text-neutral-800 p-2 text-center"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Tabs.Root>
  );
};

export default Help;

const actionBuy = [
  {
    label: "Purchases",
    icon: "icon-park-outline:buy",
    link: "/transactions/purchases",
  },
  {
    label: "Checkout",
    icon: "carbon:wireless-checkout",
    link: "/checkout/shipping",
  },
  { label: "Contact Us", icon: "bxs:contact", link: "/contact" },
  {
    label: "Offers",
    icon: "ic:baseline-local-offer",
    link: "/transactions/offers",
  },
];
const actionSell = [
  {
    label: "Listings",
    icon: "icon-park-outline:buy",
    link: "/transactions/manage-listings",
  },
  {
    label: "Getting Paid",
    icon: "wpf:paid",
    link: "/transactions/earnings",
  },
  { label: "Contact Us", icon: "bxs:contact", link: "/contact" },
  {
    label: "Manage Orders",
    icon: "material-symbols:draft-orders-sharp",
    link: "/transactions/orders",
  },
];
const actionComm = [
  { label: "Mod Que", icon: "tabler:http-que", link: "/que/settings" },
  {
    label: "Account Status",
    icon: "pajamas:status",
    link: "/settings/accounts",
  },
  { label: "Contact Us", icon: "bxs:contact", link: "/contact" },
  {
    label: "Communities",
    icon: "fluent:people-community-20-filled",
    link: "/browse",
  },
];

const actions3 = [
  { label: "Terms & Policies", link: "/policy/terms" },
  { label: "Premium Services", link: "/premium" },
  { label: "Why Us?", link: "/why" },
  { label: "Contact Us", link: "/contact" },
];
