import { useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Auth from "../../components/auth/Auth";
import Explore from "../../components/common/Explore";
import Ad from "../../components/common/Explore/ad";
import Icons from "../../components/common/Icons/Icons";
import Navbar from "../../components/common/Navbar";
import NotifyToast from "../../components/common/Notification/NotifyToast";
import Sidebar from "../../components/common/Sidebar";
import Widget from "../../components/common/Widget";
import { cn } from "../../helpers/utils";
import { useAppSelector } from "../../redux/hooks";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const hidden = useAppSelector((state) => state.authPopup);
  const type = useAppSelector((state) => state.authType);
  const showExplorer = useMemo(() => {
    switch (true) {
      case pathname.includes("/user/for-sale"):
        return true;
      case pathname.includes("for-sale"):
        return false;

      case pathname.includes("que"):
        return false;
      case pathname.includes("cart"):
        return false;
      case pathname.includes("checkout"):
        return false;

      case pathname.includes("help"):
        return false;
      case pathname.includes("about"):
        return false;
      case pathname.includes("single-gear"):
        return false;
      case pathname.includes("search"):
        return false;
      default:
        return true;
    }
  }, [pathname]);

  return (
    <div className="">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Auth isModalActive={hidden.value} type={type.value} />
      <NotifyToast />
      <Widget />
      <Icons />
      <div className="container [&>*]:overflow-auto pb-0 md:[&>*]:h-[calc(100vh-100px)] [&>*]:h-[calc(100vh-70px)] [&>*]:pb-6 flex flex-col gap-4 md:p-6 2xl:gap-5 bg-accentGray-500 lg:flex-row pt-20 md:pt-24">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className=" flex-grow pl-0 pb-0 lg:mr-[rem] scrollbar-hide">
          <div className="gap-6 ">
            <div
              className={cn({
                "w-full  ":
                  !pathname.includes("for-sale") && !pathname.includes("about"),
              })}
            >
              {/* <div className='mb-5 lg:hidden'>
                 <Search />
               </div> */}
              <Outlet />
            </div>
          </div>
        </div>

        {showExplorer && (
          <div
            className={cn(
              "lg:min-w-[300px]  scrollbar-hide 2xl:max-w-[330px] lg:max-w-[320px]   ",
              { "!h-fit !pb-0": pathname.includes("create") }
            )}
          >
            <Ad />
            <div className="bg-white rounded-lg">
              <Explore />{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
