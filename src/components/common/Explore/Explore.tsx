import TopGearRooms from "./TopGearRooms";
import SubCommunities from "./SubCommunities/SubCommunities";
import Reviews from "./Reviews";
import Reviews2 from "./Reviews2";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Ruler } from "../ruler";
import ExploreMenu from "../../pages/Community/Community-Page/explore-menu";
import Card from "../Card";
import Profile from "../../pages/Create-Post/profile";
import { useMemo } from "react";

const links = [
  "About Us",
  "Accessibility",
  "Help Center",
  "Privacy and Terms",
  "Advertising",
  "Business Services",
];

const Explore = () => {
  const { pathname } = useLocation();
  const content = useMemo(() => {
    switch (true) {
      case pathname.includes("create"):
        return <Profile />;
      default:
        return extra;
    }
  }, [pathname]);
  const Comp = pathname.includes("create") ? "div" : Card;
  return (
    <Comp className="rounded-b-none lg:h-full lg:mt-0">
      {pathname.includes("browse/single") && <ExploreMenu />}
      {content}
    </Comp>
  );
};

export default Explore;

const extra = (
  <>
    <TopGearRooms />
    <Ruler />
    <SubCommunities />
    <Ruler />
    <Reviews2 />
    <img className="w-full mt-4" src="/assets/imgs/home/ad-3.png" alt="ad" />
    <Ruler />
    <Reviews />
    <Ruler />
    <img className="mx-auto" src="/assets/imgs/home/users.png" alt="users" />
    <div className="mt-[18px] flex items-center justify-center gap-2">
      <div className="text-[26px] text-[#1D1929] font-bold">184.3K</div>
      <div className="font-medium text-accentGray-700">Followers</div>
    </div>
    <div className="font-medium text-center">Active now on your profile</div>
    <Ruler />
    <div className="flex flex-wrap justify-center gap-6">
      {links.map((el, idx) => {
        return (
          <Link
            className="text-accentGray-700"
            to="/"
            key={"footer-link" + idx}
          >
            {el}
          </Link>
        );
      })}
    </div>
  </>
);
