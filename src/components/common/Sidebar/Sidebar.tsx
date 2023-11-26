import clsx from "clsx";

import Resources from "./Resources";
import "./Sidebar.css";

import { useSelector } from "react-redux";
import { selectLogin } from "../../../redux/features/auth/authLoginSlice";
import SidebarPanel from "./SidebarPanel";
import SidebarCommunities from "./my-communities";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  const isLoggedIn = useSelector(selectLogin);
  return (
    <div
      className={clsx(
        "fixed lg:sticky lg:top-0 lg:self-start  lg:h-full scrollbar-hide bg-accentGray-500 top-[70px] xl:static xl:h-[unset] z-10 min-w-[210px] max-md:!pb-0 lg:min-w-[280px]  flex-shrink-0 ",
        isSidebarOpen ? "left-0" : "-left-[300px]"
      )}
      id="main-layout-sidebar"
    >
      <div className="max-md:h-full max-md:flex flex-col md:bg-transparent bg-slate-700">
        {/* <div
          className='absolute block text-5xl text-white pb-9 xl:hidden top-2 right-3'
          onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
        >
          &times;
        </div> */}
        <SidebarPanel />

        <div className="px-3 flex-1 py-3 md:mt-4 md:rounded-lg bg-slate-700">
          {isLoggedIn ? <SidebarCommunities /> : <Resources />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
