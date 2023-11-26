import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import GreyBtn from '../../buttons/GreyBtn/GreyBtn';

export default function Profile() {
  return (
    <div className="overflow-hidden bg-white border rounded-lg shadow-md border-slate-400/20">
      <img
        src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover w-full h-28"
      />
      <div className="flex gap-3 p-4">
        <img
          alt="user"
          src="/assets/imgs/home/pete.png"
          className="w-28 h-24 border-2 border-white rounded-lg shadow-md"
        />
        <div className="grid grid-cols-2 gap-1">
          <p className="col-span-2 text-xs font-semibold">Pierre Augustin</p>
          <div className="text-xs font-medium text-zinc-500">MuzPoints</div>
          <div className="text-xs font-medium text-zinc-500">Cake day</div>
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/flower.svg" alt="" />
            <div className="text-[11px] font-medium ">1,65,201</div>
          </div>
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/calendar.svg" alt="" />
            <div className="text-[11px] font-medium ">October 23, 2017</div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <Link to="/settings/profile">
          <button className="flex items-center justify-center w-full h-10 font-semibold text-white rounded-lg bg-gradient-to-l from-red-500 to-yellow-500">
            Edit Profile
            <Icon className="w-10 text-2xl" icon={"mingcute:right-line"} />
          </button>
        </Link>
        {/* <GreyBtn label={'+ Edit Avatar'} className={'text-blue-700 mt-2.5'} /> */}
        <br />
      </div>
    </div>
  );
}
