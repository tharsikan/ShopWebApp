import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import friendlyTime from "../../../../../../helpers/friendlyTime";
import YellowBtn from "../../../../../buttons/YellowBtn";
import DialogWrapper from "../../../../../common/dialog-wrapper";

import "../Post.css";
import ReportModal from "./report-modal";

export function User({ el }: { el: any }) {
  return (
    <div className="flex items-center justify-between mb-4 ">
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <img
            className="w-[25px] h-[25px] rounded-full"
            src={el.userImg}
            alt="user"
          />
          <div className="flex max-md:flex-col md:items-center md:gap-2">
            <div className="text-sm font-semibold">{el.username}</div>
            <div className="flex text-[10px] text-accentGray-700 md:text-xs items-center gap-1  md:gap-4">
              <p className="max-md:hidden">•</p>
              <p>Posted by {el.author}</p>
              <p>•</p>
              <p>{friendlyTime(el.time)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <YellowBtn
          short
          label="Join"
          className="max-md:scale-75 origin-right"
        />
        <Menu as="div" className="relative ">
          <Menu.Button>
            <img
              className="cursor-pointer"
              src="/assets/vectors/common/menu-vertical.svg"
              alt="menu"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <DialogWrapper content={<ReportModal className="absolute"/>}>
                      <button
                        className={`${
                          active ? "bg-orange-400 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <Icon
                            icon={"ic:baseline-report-problem"}
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <Icon
                            icon={"ic:baseline-report-problem"}
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        Report
                      </button>
                    </DialogWrapper>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
