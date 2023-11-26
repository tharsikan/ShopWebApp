import { Icon } from "@iconify/react";

import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../../helpers/utils";
import SortbySelect from "../../common/Selectors/sortbyselect";

import { instrumentOptions } from "../Gear-Catalog/gearData";

import { useState } from "react";
import Select from "../../common/select";

export default function ForSaleTopBar({
  market,
  store,
  communities,
  className,
}: {
  market?: boolean;
  className?: string;
  communities?: boolean;
  store?: boolean;
}) {
  const [selectedInstrument, setSelectedInstrument] = useState("Bass");
  return (
    <section className={className!}>
      <div
        className={cn(
          "flex gap-4 p-2 bg-white border rounded-lg border-slate-400/20",
          { "max-md:hidden": communities }
        )}
      >
        <div className="md:w-[25%]">
          <Select
            uniqueKey="instrument-selector"
            label="Instrument"
            defaultValue={selectedInstrument}
            options={instrumentOptions}
            onOptionSelect={(val) => setSelectedInstrument(val)}
          />
        </div>
        <div className="text-sm flex items-center font-semibold max-md:hidden text-zinc-600 [&>button]:px-3">
          <Actions communities={communities} store={store} />
        </div>
        {!communities ||
          (!market && (
            <SortbySelect
              options={options}
              wrapperClass={cn("max-md:grow", { "md:grow": store })}
              placeholder="Best Match"
              className="w-full bg-zinc-100 mt-2"
            />
          ))}
        {!store && (
          <div className="flex items-center md:grow max-md:px-4 border rounded-md bg-zinc-100 p-2.5 gap-3  border-slate-400/20">
            <Icon icon={"iconamoon:search"} />
            <input
              placeholder="Search all 75 items"
              className="w-full max-md:hidden bg-transparent outline-none"
            />
          </div>
        )}
      </div>
      <div className="text-sm flex items-center mt-2 font-semibold md:hidden text-zinc-600 [&>button]:px-3">
        <Actions communities={communities} store={store} />
      </div>
    </section>
  );
}

const options = [
  { label: "Best Match" },
  { label: "Most Recent First" },
  { label: "Price Low to High" },
  { label: "Price High to Low" },
];

function Actions({
  communities,
  store,
}: {
  communities?: boolean;
  store?: boolean;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const communitiesOwn = pathname.includes("/communities/own");
  return (
    <>
      <button
        onClick={() => navigate("/user/communities/own")}
        className={cn("rounded-md h-11 from-red-500 to-yellow-500", {
          "bg-gradient-to-l text-white": !communities || communitiesOwn,
        })}
      >
        {store ? (communities ? "My Communities" : "Hot") : "Shop"}
      </button>
      <button
        onClick={() => navigate("/user/communities")}
        className={cn("rounded-md h-11  from-red-500 to-yellow-500", {
          "bg-gradient-to-l text-white": communities && !communitiesOwn,
        })}
      >
        {store ? (communities ? "Comm. Owned" : "New") : "My Store"}
      </button>
      {!communities && (
        <button className="inline-flex gap-2">
          <Icon icon={"mdi:edit-outline"} className="text-lg" />
          <span>Edit Listing</span>
        </button>
      )}
    </>
  );
}
