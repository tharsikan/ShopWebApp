import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";
import Select from "../../../common/Selectors/select";
import Uploader from "../../../common/uploader";
import { TextField } from "../../../text-field";

export default function Description() {
  return (
    <section>
      <p>
        <span className="font-bold ">Upload photos of your gear </span>
        <span className="font-semibold text-red-600 ">*</span>
      </p>
      <ul className="list-disc list-inside font-semibold ">
        <li> Use original photos for used gear.</li>
        <li>
          Screenshots or pictures from other sites, sellers or manufacturers are
          not allowed.
        </li>
        <li>Square photos are best, and they should be 620x620px or bigger.</li>
      </ul>
      <Uploader className="my-5" />
      <p className="font-semibold ">Select a condition and describe the item</p>
      <p className=" text-[11px] font-semibold my-1">
        Condition
        <span className="text-red-600">*</span>
      </p>
      <Select
        options={options}
        placeholder="Condition"
        className="w-[35%] bg-zinc-100 mb-2"
      />
      <p className="font-semibold ">Item Description</p>
      <p className=" text-[11px] font-semibold my-1">
        Description
        <span className="text-red-600">*</span>
      </p>
      <TextField />

      {/* <p className="py-3 font-semibold">
        Embed a YouTube video on your listing
      </p>
      <p className=" text-[11px] font-semibold my-1">
        Paste a link to a YouTube video
      </p>
      <Select
        options={options}
        placeholder="Brand"
        className="w-full bg-zinc-100"
      /> */}
    </section>
  );
}
const options = [
  { label: "Used" },
  { label: "Brand New" },
  { label: "B-Stock" },
  { label: "Mint" },
  { label: "Excellent" },
  { label: "Very Good" },
  { label: "Good" },
  { label: "Fair" },
  { label: "Poor" },
  { label: "Not Working" },
];
