import { motion } from "framer-motion";
import Tab, { TabProps } from "./Tab";

interface Props {
  tabsData: TabProps[];
}

const Tabs = ({ tabsData}: Props) => {
  return (
    <>
      <div className="overflow-x-auto overflow-y-hidden hidden-scrollbar">
        <div className="flex gap-[14px] mt-3">
          {tabsData.map((el, idx) => {
            return <Tab key={"setting-tab" + idx} {...el} />
          })}
        
        </div>
      </div>
      <div className="border-t border-solid border-accentGray-600 w-full h-1 mt-4"></div>
    </>
  );
};

export default Tabs;

