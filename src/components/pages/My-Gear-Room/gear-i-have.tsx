import { Icon } from "@iconify/react";
import * as Tabs from "@radix-ui/react-tabs";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Card from "../../common/Card/Card";
import GreyBtn from "../../buttons/GreyBtn/GreyBtn";
import YellowBtn from "../../buttons/YellowBtn/YellowBtn";
import { useState } from "react";
import Gear from "./gear";

export default function GearIHave() {
  const [gearSelection, setGearSelection] = useState("current");

 
  return (
    <Tabs.Root value={gearSelection} onValueChange={setGearSelection}>
      <Card>
        <div className="border flex flex-wrap rounded-lg bg-yellow-50 items-center justify-center gap-5 border-amber-100 p-2.5">
          <Tabs.List
            className="flex flex-wrap justify-center gap-5"
            aria-label="Manage your account"
          >
            {action.map((_) => (
              <Tabs.Trigger className="btn-user" value={_.name}>
                <button className="p-2 font-medium flex items-center justify-center rounded-md bg-accentGray-400 hover:bg-accentGray-500 text-accentGray-700 gap-1.5 transition-colors text-sm border border-solid border-[rgba(134, 145, 168, 0.20)]">
                  <span
                    className="flex items-center gap-2"
                    onClick={() => setGearSelection(_.name)}
                  >
                    <Icon icon={_.icon} className="text-xl" />
                    <p className="font-bold ">{_.label}</p>
                  </span>
                </button>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
        {/* after button */}
        <div className="mt-2.5 flex items-center justify-between ">
          {/* <p className="text-[22px] font-semibold">My Collection</p> */}
          <YellowBtn label={"Edit Gear Room"} short />
        </div>
        <Tabs.Content className="TabsContent" value="current">
          <Gear type="current" />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="past">
          <Gear type="past" />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="want">
          <Gear type="want" />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tested">
          <Gear type="tested" />
        </Tabs.Content>
      </Card>
    </Tabs.Root>
  );
}

const action = [
  {
    icon: "pajamas:catalog-checkmark",
    label: "Current",
    name: "current",
  },
  {
    icon: "wpf:past",
    label: "Past",
    name: "past",
  },
  {
    icon: "gg:heart",
    label: "Want",
    name: "want",
  },
  {
    icon: "carbon:test-tool",
    label: "Tested",
    name: "tested",
  },
];


