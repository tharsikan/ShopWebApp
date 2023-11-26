import { Icon } from "@iconify/react";
import * as Popover from "@radix-ui/react-popover";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { authLogout } from "../../../redux/features/auth/authLoginSlice";
import { notifySelect } from "../../../redux/features/notify/notifySlice";
import { useAppDispatch } from "../../../redux/hooks";
function User() {
  return (
    <div className="relative w-10 bg-white rounded-full aspect-square ">
      <img
        src="/assets/imgs/home/pete.png"
        alt=""
        className="object-cover w-full h-full rounded-full ring-1 ring-zinc-300"
      />{" "}
      <img
        src="/assets/vectors/common/flower.svg"
        alt=""
        className="absolute w-3.5 h-3.5 p-0.5 right-0 bottom-0 bg-white rounded-full"
      />
    </div>
  );
}

export function UserMenu() {
  const dispatch = useAppDispatch();
  const userLogin = () => {
    dispatch(
      notifySelect({ title: "Bye soldier, come back soon!", type: 3, open: true })
    );
    dispatch(authLogout());

    // dispatch(authClose());
  };
  return (
    <Popover.Root>
      <Popover.Trigger>
        <User />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="relative z-10 [--profile-x:200px] md:[--profile-y:-200px] [--profile-y:-0px] md:[--profile-x:0px]">
          <motion.div
            initial={{
              x: "var(--profile-x)",
              y: "var(--profile-y)",
            }}
            transition={{ type: "keyframes" }}
            animate={{ x: 0, y: 0 }}
            className="p-5 shadow-lg bg-slate-700 mt-4 w-72 mx-px md:mx-4 rounded-2xl  "
          >
            <div className="flex items-center gap-3 border-b pb-5">
              <User />
              <div>
                <div className="flex gap-3">
                  <p className="text-white text-lg font-medium">Pbass03</p>
                  <button className="w-[35px] h-[21px] bg-indigo-50 rounded-md text-blue-600 text-[11px] font-bold border border-indigo-200 ">
                    PRO
                  </button>
                </div>
                <p className="text-neutral-400 text-base font-medium">
                  sardor@mail.com
                </p>
              </div>
            </div>
            <div className="space-y-8 mt-8">
              {menus.map((_) =>
                _.label === "Sign Out" ? (
                  <div
                    className="mb-6 flex cursor-pointer px-3 items-center gap-3 hover:opacity-75"
                    onClick={() => {
                      userLogin();
                    }}
                  >
                    <Icon icon={_.icon} className="text-xl text-orange-400" />
                    <div className="text-white text-md font-medium">
                      {_.label}
                    </div>
                  </div>
                ) : (
                  <Link to={_.link}>
                    <div className="mb-6 flex cursor-pointer px-3 items-center gap-3 hover:opacity-75">
                      <Icon icon={_.icon} className="text-xl text-orange-400" />
                      <div className="text-white text-md font-medium">
                        {_.label}
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const menus = [
  { label: "My Shop", icon: "tdesign:shop", link: "/user/for-sale" },
  {
    label: "Manage Listings",
    icon: "icon-park-outline:list",
    link: "/transactions/manage-listings",
  },
  {
    label: "Purchases",
    icon: "arcticons:bestbuy",
    link: "/transactions/purchases",
  },
  {
    label: "Orders",
    icon: "icon-park-twotone:order",
    link: "/transactions/orders",
  },
  {
    label: "Threads",
    icon: "quill:list",
    link: "/user/threads",
  },
  {
    label: "Communities",
    icon: "fluent:people-community-16-filled",
    link: "/user/communities/own",
  },
  {
    label: "Offers",
    icon: "tdesign:undertake-transaction",
    link: "/transactions/offers",
  },
  {
    label: "Profile Settings",
    icon: "ic:twotone-settings",
    link: "/settings/account",
  },
  {
    label: "Messages",
    icon: "iconoir:privacy-policy",
    link: "/messages",
  },
  { label: "Help Center", icon: "material-symbols:help", link: "/help" },
  { label: "Sign Out", icon: "tabler:logout", link: "" },
];
