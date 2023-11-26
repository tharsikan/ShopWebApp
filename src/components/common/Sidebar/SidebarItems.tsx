import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectLogin } from '../../../redux/features/auth/authLoginSlice';

const SidebarItems = () => {
  const isLoggedIn = useSelector(selectLogin);
  const navItems = useMemo(() => {
    if (isLoggedIn)
      return [
        { to: "/", icon: "/assets/imgs/home/home.png", label: "Home" },
        {
          to: "/user/gear",
          icon: "/assets/imgs/home/gear.png",
          label: "My GearRoom",
        },
        {
          to: "/browse",
          icon: "/assets/imgs/home/singers.png",
          label: "Communities",
        },

        {
          to: "/for-sale",
          icon: "/assets/imgs/home/market.png",
          label: "Shop",
        },
        {
          to: "/gear-catalog",
          icon: "/assets/imgs/home/setting.png",
          label: "Gear Catalog",
        },
        {
          to: "/premium",
          icon: "/assets/imgs/home/subscription-2.png",
          label: "Muzfi Premium",
        },
        {
          to: "/newsletter",
          icon: "/assets/imgs/home/newsletter.png",
          label: "Articles",
        },
        {
          to: "/why",
          icon: "/assets/imgs/home/career-growth-2.png",
          label: "Why Us?", //Until We grow will be "Releases"
        },
      ];
    return [
      { to: "/", icon: "/assets/imgs/home/home.png", label: "Home" },
      {
        to: "/browse",
        icon: "/assets/imgs/home/singers.png",
        label: "Communities",
      },
      {
        to: "/for-sale",
        icon: "/assets/imgs/home/market.png",
        label: "Shop",
      },
      {
        to: "/gear-catalog",
        icon: "/assets/imgs/home/setting.png",
        label: "Gear Catalog",
      },
      {
        to: "/premium",
        icon: "/assets/imgs/home/subscription-2.png",
        label: "Muzfi Premium",
      },

      {
        to: "/newsletter",
        icon: "/assets/imgs/home/newsletter.png",
        label: "Articles",
      },
      {
        to: "/why",
        icon: "/assets/imgs/home/career-growth-2.png",
        label: "Why Us?", //Until We grow will be "Releases"
      },
    ];
  }, [isLoggedIn]);
  return (
    <div>
      {navItems.map((el, idx) => {
        return (
          <NavLink
            className='flex items-center gap-5 mb-[10px] p-2 relative transition-colors rounded-lg hover:bg-primary-700'
            to={el.to}
            key={'sidebar-nav-item' + idx}
          >
           
            <div className=''>
              <img className='w-6 h-6 ' src={el.icon} alt={el.label} />
            </div>
            <div className='font-semibold text-white transition-colors'>
              {el.label}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarItems;
