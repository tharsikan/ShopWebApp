import { Icon } from "@iconify/react";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../../hooks/useMediaQueries";
import { selectLogin } from "../../../redux/features/auth/authLoginSlice";
import {
  selectLoginModalState,
  startLogin,
  startSignup,
} from "../../../redux/features/modal.store";
import { useAppDispatch } from "../../../redux/hooks";
import LoginForm from "../../auth/LoginForm";
import RegisterForm from "../../auth/RegisterForm";
import { inputAssets } from "../../auth/inputs";
import GradientBtn from "../../buttons/GradientBtn";
import YellowBtn from "../../buttons/YellowBtn/YellowBtn";
import Search from "../Search/Search";
import SearchCollapsible from "../Search/search-collapsible";
import DialogWrapper from "../dialog-wrapper";
import { UserMenu } from "./user-menu";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: Partial<{
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}>) => {
  const dispatch = useAppDispatch();
  const login = useSelector(selectLoginModalState);

  console.log("🛑 ~ login:", login);

  const isMd = useMediaQuery("md");
  const isLogin = useSelector(selectLogin);
  const navItems = useMemo(() => {
    if (isLogin)
      return [
        {
          icon: "/assets/imgs/home/messages.png",
          href: "/messages",
          tip: "Messages",
        },

        ...(isMd
          ? [
              {
                icon: "/assets/imgs/home/likes.png",
                href: "/user/watchlist",
                tip: "Watchlist",
              },
              // { icon: "/assets/imgs/home/singers.png", href: "/browse" },
            ]
          : []),
        {
          icon: "/assets/imgs/home/notification.png",
          href: "/notifications",
          tip: "Notifications",
        },
      ];
    return [
      {
        icon: "/assets/imgs/home/market.png",
        href: "/for-sale",
        tip: "Marketplace",
      },
    ];
  }, [isLogin, isMd]);


  return (
    <nav className="fixed inset-x-0 top-0 z-50 shadow-lg bg-slate-700">
      <div className="   container   h-[70px] flex justify-between items-center py-4 sm:px-[24px] px-[12px] z-20">
        <div className="flex items-center flex-grow h-5 gap-3 xl:w-1/3 ">
          <div
            className="flex flex-col gap-1 lg:hidden"
            onClick={() => setIsSidebarOpen((prevState: any) => !prevState)}
          >
            {isSidebarOpen ? (
              <Icon
                icon="ph:x"
                className="text-white text-2xl cursor-pointer"
              />
            ) : (
              <Icon
                icon="ri:menu-2-fill"
                className="text-white text-2xl cursor-pointer"
              />
            )}
          </div>
          <SearchCollapsible />

          <Link
            className="hidden min-w-[120px] min-[1185px]:block ml-14"
            to={"/"}
          >
            <img
              className="h-12 mx-auto"
              src="/assets/imgs/common/logo.png"
              alt="logo"
            />
          </Link>
          <Link className="hidden min-[1185px]:hidden lg:block ml-6" to={"/"}>
            <img
              className="h-12 mx-auto"
              src="/assets/imgs/common/logo-1.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="justify-center flex-grow hidden lg:flex">
          <Search />
        </div>
        <div className="flex items-center justify-end xl:w-1/3 ">
          <div className="flex items-center sm:gap-[22px] gap-2 ">
            {navItems.map((_: any) => (
              <Link
                className="transition-transform shrink-0 hover:scale-105 hidden min-[1185px]:block"
                to={_?.href}
                key={_?.href}
              >
                <div className="group relative flex justify-center">
                  <img className="h-6 mx-auto" src={_?.icon} alt="logo" />
                  <span className="absolute top-10 scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100">
                    {_.tip}
                  </span>
                </div>
              </Link>
            ))}
            <div className="w-[1px] h-[22px] bg-white bg-opacity-50 sm:block hidden"></div>{" "}
            <Link
              className="transition-transform shrink-0 hover:scale-105 "
              to={"/create/listing"}
            >
              <img
                className="w-8 h-8 mx-auto sm:hidden"
                src="/assets/imgs/home/add.png"
                alt="logo"
              />
            </Link>
            <Link
              className="transition-transform shrink-0 hover:scale-105"
              to={"/cart"}
            >
              <div className="group relative flex justify-center">
                {" "}
                <img
                  className="h-5 mx-auto"
                  src="/assets/imgs/home/cart.png"
                  alt="logo"
                />
                <span className="absolute top-10 scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100">
                  Cart
                </span>
              </div>
            </Link>
            {isLogin ? (
              <>
                <YellowBtn
                  className="flex max-lg:hidden items-center gap-2.5 font-semibold px-3"
                  label={
                    <>
                      <Icon className="text-xl" icon={"nimbus:marketing"} />{" "}
                      Sell Gear
                    </>
                  }
                />
                <UserMenu />
              </>
            ) : (
              <>
                <DialogWrapper
                  className="text-base font-medium text-white transition-colors hover:text-opacity-75"
                  content={
                    !login ? (
                      <RegisterForm />
                    ) : (
                      <LoginForm inputAssets={inputAssets} />
                    )
                  }
                >
                  <span onClick={() => dispatch(startLogin())}>Login</span>
                </DialogWrapper>

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
                    onClick={() => dispatch(startSignup())}
                    label="Register"
                    className="max-md:hidden"
                  />
                </DialogWrapper>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
