import YellowBtn from "../../../buttons/YellowBtn/YellowBtn";
import { Input } from "../../../common/input";

export function ProductInfo() {
  return (
    <>
      <p className="font-semibold leading-tight">Tell us about your gear</p>
      <div>
        {data.map((_) => (
          <Input {..._} />
        ))}
      </div>
    </>
  );
}

const data = [
  { placeholder: "Brand", "aria-required": true },
  { placeholder: "Model", "aria-required": true },
  {
    placeholder: "Year",
    "aria-details":
      'If you don\'t know the exact year, use a fuzzy date like "mid-90s" or "1953-1957."',
  },
  { placeholder: "Finish" },
  {
    placeholder: "Title",
    "aria-label": "Listing Title",
    "aria-required": true,
  },
];
