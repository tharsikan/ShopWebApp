import { useLocation } from "react-router-dom";

export default function Ad() {
  const { pathname } = useLocation();
  const [{ head = null, caption = "" } = {}] = routes.filter(
    (_) => _.pathname === pathname
  );

  if (!head) return;

  return (
    <div className="h-32 relative rounded-lg bg-gradient-to-l overflow-hidden mb-6 from-[#EA4335]/20 flex flex-col justify-center p-5 to-[#FBBC05]/20">
      <p className="text-lg font-semibold text-black">{head}</p>
      <p className="w-[222px] text-zinc-600 text-xs font-normal leading-[13.92px]">
        {caption}
      </p>
      <img
        className="absolute top-0 right-0"
        src="/assets/vectors/browse/hands.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 rotate-180 translate-x-10"
        src="/assets/vectors/browse/hands.svg"
        alt=""
      />
    </div>
  );
}

const routes = [
  {
    pathname: "/browse",
    head: "Communities",
    caption: "Find, Build, and connect with like minded Peers",
  },
  {
    pathname: "/browse/single/page",
    head: "B/ TeamFBASS",
    caption: "Find, Build, and connect with like minded Peers",
  },
  {
    pathname: "/gear-catalog",
    head: "Gear Catalog",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/donate",
    head: "Donate",
    caption: "Help the self-funded Platform",
  },
  {
    pathname: "/premium",
    head: "Subscription",
    caption: "Get Premium for full access of Muzfi Platform",
  },
  {
    pathname: "/notifications",
    head: "Notifications",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/messages",
    head: "Messages",
    caption: "My Messaging portal",
  },
  {
    pathname: "/settings/notifications",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/settings/account",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/settings/subscriptions",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/settings/profile",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/settings/chat",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/settings/safety",
    head: "Settings",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/purchases",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/orders",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/offers",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/earnings",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/my-bill",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/transactions/manage-listings",
    head: "Busniess",
    caption: "Find, Add, and Review Gear within the Gear Catalog",
  },
  {
    pathname: "/policy/terms",
    head: "Policy",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/policy/privacy",
    head: "Policy",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/policy/payout",
    head: "Policy",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/policy/billing",
    head: "Policy",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/policy/content",
    head: "Policy",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/policy/agreement",
    head: "Mod Que:C/TalkBass",
    caption: "Checkout our the Terms and Conditions",
  },
  {
    pathname: "/que/settings",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
  {
    pathname: "/que/rules",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
  {
    pathname: "/que/posts",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
  {
    pathname: "/que/insights",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
  {
    pathname: "/que/mods",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
  {
    pathname: "/que/ban",
    head: "Mod Que:C/TalkBass",
    caption: "Control and manage your community",
  },
];
