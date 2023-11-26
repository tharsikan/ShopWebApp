import { Icon } from "@iconify/react";
import { useState } from "react";
import { cn } from "../../../helpers/utils";
import { useMediaQuery } from "../../../hooks/useMediaQueries";
import GreyBtn from "../../buttons/GreyBtn/GreyBtn";
import SortbySelect from "../../common/Selectors/sortbyselect";
import Select from "../../common/select";
import { instrumentOptions } from "../Gear-Catalog/gearData";
export const SearchCategories = () => {
  const isMd = useMediaQuery("md");
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(
    null
  );
  return (
    <Select
      uniqueKey="instrument-selector"
      label="Instrument"
      className="p-0 md:w-36 w-fit max-md:[&_.absolute]:w-36"
      defaultValue={selectedInstrument as string}
      options={instrumentOptions}
      onOptionSelect={(val) => setSelectedInstrument(val)}
    >
      <GreyBtn
        className="text-black pointer-events-none text-sm max-md:p-3 font-medium capitalize"
        label={
          <>
            <Icon icon="pajamas:hamburger" />
            {isMd && (selectedInstrument || "Categories")}
          </>
        }
      />
    </Select>
  );
};

export const SortSearch = () => {
  const options = [
    { label: "Recent" },
    { label: "Best Match" },
    { label: "Most Recent First" },
    { label: "Price Low to High" },
    { label: "Price High to Low" },
  ];

  return (
    <SortbySelect
      options={options}
      wrapperClass={cn("max-md:grow mx-2")}
      placeholder="Recent"
      className="w-full"
    />
  );
};
