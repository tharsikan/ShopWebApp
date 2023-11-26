import { Icon } from "@iconify/react";
import YellowBtn from "../../../buttons/YellowBtn";
import Select from "../../../common/Selectors/select";
import { Ruler } from "../../../common/ruler";
import Moderators from "./moderators";
import RelatedCommunities from "./related-communities";
import RulesAccordion from "./rules-accordion";
import Stats from "./stats";

export default function ExploreMenu() {
  return (
    <section className="">
      <div className="flex justify-between">
        <p className="text-lg font-semibold ">About Community</p>
        <Icon
          icon="pepicons-pencil:dots-x"
          className="text-2xl"
          role="button"
        />
      </div>
      <p className="text-sm font-normal">
        We are here to appreciate the awesome majesty and incredibly cool
        aspects of nature. 🔥
      </p>
      <div className="flex items-center gap-1 py-3">
        <Icon icon="bx:calendar" className="text-rose-600" />
        <p className="text-xs font-medium text-black">Created Sep 18, 2016</p>
      </div>
      <Stats stat={stat} />
      <YellowBtn label={"Join Now"} className={"my-6 w-full"} />
      {/* <div className="flex justify-between">
        <p className="text-lg font-semibold capitalize ">preview</p>
        <Icon
          icon="pepicons-pencil:pen"
          className="text-2xl text-red-600"
          role="button"
        />
      </div> */}
      {/* <div className="flex flex-wrap items-center gap-1">
        <img
          alt=""
          className="w-10 h-10 rounded-[1px]"
          src="https://via.placeholder.com/40x40"
        />
        <p className="text-xs font-medium leading-tight text-black">
          Lauralee Quintero
        </p>
      </div>
      <Select
        options={options}
        className="mt-3 w-full"
        placeholder="Category"
      /> */}
      <Ruler />
      <RelatedCommunities />
      <Ruler />
      <RulesAccordion />
      <Ruler />
      <Moderators />
    </section>
  );
}
const stat = [
  { value: "10.4m", head: "Subscribers" },
  { value: "1.9k", head: "Currently lit" },
  { value: "#27", head: "Ranked by Size" },
];
const options = [{ label: "hello" }, { label: "world" }];
