import { Icon } from "@iconify/react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Approved } from "./approved";
import { Banned } from "./banned";
import { Insights } from "./insights";
import { Moderators } from "./moderators";
import { Posts } from "./posts";
import { Rules } from "./rules";
import { Setting } from "./setting";
const ModQue = () => {
  //MOD QUE LAYOUT ADDED HERE

  const [selectedNav, setSelectedNav] = useState(nav[0].label);
  console.log("🛑 ~ ModQue ~ selectedNav:", selectedNav);

  return (
    <div>
      <div className="h-[180px] relative rounded-lg bg-gradient-to-l overflow-hidden mb-6 from-[#EA4335]/20 flex flex-col justify-center p-5 to-[#FBBC05]/20">
        <p className="text-[22px] font-semibold">
          Mod Que:
          <span className="font-medium">C/TalkBass</span>
        </p>
        <p className="text-zinc-600 text-xs font-normal leading-[13.92px]">
          Your one stop place for adjusting your community.
        </p>
        <img
          className="absolute top-0 right-0 w-36 -translate-x-10"
          src="/assets/vectors/browse/hands.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 w-36 rotate-180 "
          src="/assets/vectors/browse/hands.svg"
          alt=""
        />
      </div>
      <Tabs.Root defaultValue={nav[0].label} onValueChange={setSelectedNav}>
        <Tabs.List className="flex gap-5 max-md:overflow-auto justify-between hidden-scrollbar">
          {nav.map((el) => (
            <div className="relative">
              <Tabs.Trigger
                key={el.label}
                value={el.label}
                className="group p-2.5 min-w-[100px] peer rounded-md gap-2 w-full justify-center bg-white aria-selected:bg-gradient-to-l from-red-500 transition-all to-yellow-500 items-center aria-selected:text-white flex"
              >
                <Icon icon={el.icon} className="text-xl" />
                {el.label}
              </Tabs.Trigger>
              {selectedNav === el.label && (
                <motion.div
                  layoutId="underline"
                  className="bg-gradient-to-l -bottom-[18px] absolute from-red-500 to-yellow-500 w-full h-1"
                />
              )}
            </div>
          ))}
        </Tabs.List>
        <hr className="border-slate-400/20 mt-4" />
        {nav.map((el) => (
          <Tabs.Content key={el.label} asChild value={el.label}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={el.label}
            >
              {el.element}
            </motion.div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default ModQue;

const nav = [
  { label: "Settings", icon: "icons8:buy", element: <Setting /> },
  { label: "Rules", icon: "ic:outline-dashboard", element: <Rules /> },
  { label: "Posts", icon: "ic:outline-local-offer", element: <Posts /> },
  { label: "Insights", icon: "fluent:money-24-regular", element: <Insights /> },
  { label: "Moderators", icon: "mdi:graph-line", element: <Moderators /> },
  { label: "Banned", icon: "mdi:graph-line", element: <Banned /> },
  { label: "Approved", icon: "mdi:graph-line", element: <Approved /> },
];
