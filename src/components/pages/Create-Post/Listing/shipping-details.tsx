import { Input } from "../../../common/input";
import { Ruler } from "../../../common/ruler";
import Select from "../../../common/Selectors/select";
import { Checkbox } from "./shipping";
import { ShippingTable } from "./shipping-table";

export default function ShippingDetails() {
  return (
    <section>
      <Ruler />
      <div className="text-sm font-bold ">
        How will you deliver the item to the buyer?{" "}
        <span className="text-red-600 ">*</span>
      </div>
      <ShippingTable />
      
      {/* <Checkbox label="Offer a Combine & Save shipping rate" /> */}
    </section>
  );
}
const options = [{ label: "hello" }, { label: "world" }];
