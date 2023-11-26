import { HTMLAttributes, useState } from "react";
import { Link } from "react-router-dom";
import Jumbo from "../../common/Jumbotron/Jumbo";

import ProductCard from "../../common/ProductCard";
import Select from "../../common/select";

import { cn } from "../../../helpers/utils";
import {
  brandOptions,
  catalogData,
  instrumentOptions,
  releaseOptions,
} from "./gearData";

const GearCatalog = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  // Please ADD 4. Gear Catalog Here and 5. Gear Single will be added after user clicks one of the Gear items (Muhammand )

  const [selectedInstrument, setSelectedInstrument] = useState("Keys/Synths");
  const [selectedBrand, setSelectedBrand] = useState("Fender");
  const [selectedType, setSelectedType] = useState("Select Type");
  const [selectedrelease, setSelectedRelease] = useState("Select Model");

  return (
    <div className={cn("font-montserrat", className)}>
      <Jumbo
        title="Gear Catalog"
        des="Find, Add, and Review Gear within the Gear Catalog"
      />

      <div className="mt-3">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
          <Select
            uniqueKey="instrument-selector"
            label="Instrument"
            defaultValue={selectedInstrument}
            options={instrumentOptions}
            onOptionSelect={(val) => setSelectedInstrument(val)}
          />
          <Select
            uniqueKey="brand-selector"
            label="Brand"
            defaultValue={selectedBrand}
            options={brandOptions}
            onOptionSelect={(val) => setSelectedBrand(val)}
          />
          <Select
            uniqueKey="type-selector"
            label="Type"
            defaultValue={selectedType}
            options={
              instrumentOptions[
                instrumentOptions.findIndex(
                  (x) => x.label === selectedInstrument
                )
              ].types
            }
            onOptionSelect={(val) => setSelectedType(val)}
          />

          <Select
            uniqueKey="release-selector"
            label="Release"
            defaultValue={selectedrelease}
            options={releaseOptions}
            onOptionSelect={(val) => setSelectedRelease(val)}
          />
        </div>
      </div>

      <div className="mt-[18px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {catalogData.map((el, idx) => {
          return (
            <Link to="/single-gear">
              <ProductCard key={"cataog-item-" + idx} {...el} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GearCatalog;
