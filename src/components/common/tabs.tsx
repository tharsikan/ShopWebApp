import * as RadixTabs from "@radix-ui/react-tabs";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Tabs = () => (
  <RadixTabs.Root>
    <RadixTabs.List className="grid flex flex-wrap grid-cols-4 pb-3 mb-3 border-b border-slate-400/20">
      {tabs.map((_, idx) => (
        <RadixTabs.Trigger
          asChild
          key={_.label}
          value={_.label}
          className="flex items-center gap-1 lg:gap-3  lg:px-6 px-3 max-lg:rounded-md md:whitespace-nowrap md:py-3 py-1 lg:py-4 text-xs font-semibold group aria-selected:bg-gradient-to-l rounded-xl aria-selected:text-white from-red-500 to-yellow-500 text-neutral-400"
        >
          <NavLink to={_.link}>
            <ReactSVG
              src={`/assets/vectors/common/tab${idx}.svg`}
              className=""
            />
            {_.label}
          </NavLink>
        </RadixTabs.Trigger>
      ))}
    </RadixTabs.List>
  </RadixTabs.Root>
);

export default Tabs;

const tabs = [
  { label: "Sell Gear", link: "/create/listing" },
  { label: "Topic", link: "/create/topic" },
  { label: "Add Gear", link: "/create/new-gear" },
  { label: "Poll", link: "/create/polls" },
];
