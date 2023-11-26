import React from "react";
import { Link} from "react-router-dom";

const SidebarCommunities = () => {
  return (
    <div>
      {" "}
      <Link to="/user/communities/own">
        <h5 className="mb-3 text-lg font-semibold text-white underline">
          My Communities
        </h5>
      </Link>
      <div className="space-y-3">
        {Array.from(Array(3)).map((_) => {
          return (
            <Link to="/browse/single/page">
              <div
                key={_}
                className="flex  items-center my-1 gap-2 border-b-2  pb-2 rounded-md border-gray-300 cursor-pointer hover:border-t-1 hover:border-orange-300"
              >
                <img
                  src="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-10 h-10 rounded-full ring-1 ring-white"
                />
                <div className="grow">
                  <p className="text-xs font-semibold text-white hover:text-orange-300">
                    NordGang
                  </p>
                  <p className="text-yellow-500 text-[10px]">
                    Latest activity 20m ago
                  </p>
                </div>
                <p className="text-neutral-200 text-[10px] font-medium">
                  2.3k Members
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarCommunities;
