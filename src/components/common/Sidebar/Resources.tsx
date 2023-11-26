import { NavLink } from "react-router-dom";

const resources = [
  // {
  //   to: "/ads",
  //   icon: "/assets/imgs/home/advertising-3.png",
  //   label: "Advertise",
  // },
  {
    to: "/about",
    icon: "/assets/imgs/home/about.png",
    label: "About Muzfi",
  },
  {
    to: "/contact",
    icon: "/assets/imgs/home/advertising-3.png",
    label: "Contact Us",
  },
  { to: "/help", icon: "/assets/imgs/home/help.png", label: "Help" },
  // {
  //   to: '/careers',
  //   icon: '/assets/imgs/home/career-growth-2.png',
  //   label: 'Careers',
  // },

  {
    to: "/policy/terms",
    icon: "/assets/imgs/home/policy.png",
    label: "Policy",
  },
  {
    to: "/donate",
    icon: "/assets/imgs/home/likes.png",
    label: "Donate",
  },
];
const Resources = () => {
  return (
    <div>
      {" "}
      <h5 className="mb-3 text-white">Resources</h5>
      {resources.map((el, idx) => {
        return (
          <NavLink
            to={el.to}
            className="flex items-center gap-[14px] p-2 rounded-lg transition-colors hover:bg-primary-700"
            key={"sidebar-nav-item" + idx}
          >
            <div>
              <img className="h-6" src={el.icon} alt={el.label} />
            </div>
            <div className="font-semibold text-white text-sm">{el.label}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Resources;
