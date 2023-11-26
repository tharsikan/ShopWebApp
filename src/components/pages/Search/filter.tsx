import * as Popover from "@radix-ui/react-popover";
import { cn } from "../../../helpers/utils";
import GreyBtn from "../../buttons/GreyBtn/GreyBtn";
import { Checkbox } from "../Create-Post/Listing/shipping";
export const SearchFilter = () => {
  return (
    <>
      {tags.map((_) => (
        <Popover.Root>
          <Popover.Trigger>
            <GreyBtn
              className={
                "text-black pointer-events-none text-[10px] max-md:h-8 gap-1 max-md:p-2 md:text-sm font-medium capitalize"
              }
              label={
                <>
                  {_.label}{" "}
                  <svg
                    className="md:ml-3 origin-right max-sm:scale-75"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </>
              }
            />
          </Popover.Trigger>
          <Popover.Anchor />
          <Popover.Portal>
            <Popover.Content
              align="center"
              className="rounded-md shadow-lg p-3 -translate-x-1/2 translate-y-6 bg-white"
            >
              <Popover.Arrow className="fill-white" />
              <h5 className="text-neutral-800 text-[10px] font-bold leading-3">
                {_.label}
              </h5>
              <div>
                {_.label === "Price" ? (
                  <div className="border mt-1 flex border-neutral-500/50 rounded-md overflow-hidden divide-x divide-neutral-500/50">
                    <input
                      placeholder="Min"
                      type="text"
                      className="w-20 text-[10px] outline-none px-2"
                    />
                    <input
                      placeholder="Max"
                      type="text"
                      className="w-20 text-[10px] outline-none px-2"
                    />
                    <img
                      src="/assets/vectors/common/search-alt.svg"
                      className="p-1"
                      alt=" "
                    />
                  </div>
                ) : _.label === "Location" ? (
                  <div className="border max-w-[100px] h-6 my-1 flex border-neutral-500/50 ">
                    <input
                      placeholder="Zip code"
                      type="text"
                      className="w-full text-[10px] outline-none px-4"
                    />
                    <img
                      src="/assets/vectors/common/search-alt.svg"
                      className="scale-75"
                      alt=" "
                    />
                  </div>
                ) : null}
                {_.options?.map((__) => (
                  <Checkbox
                    label={
                      <>
                        <span className="text-neutral-800 text-xs  ">
                          {__.replace("%zip%", "").split("%")[0]}{" "}
                        </span>
                        <span className="text-neutral-600 text-[9px]  ">
                          {__.replace("%zip%", "").split("%")[1]}
                        </span>
                      </>
                    }
                    key={__}
                  />
                ))}
              </div>
              <div
                className={cn(
                  "text-neutral-600 text-[11px] font-normal flex items-center gap-2 mt-1",
                  { hidden: !_.showMore }
                )}
              >
                Show More
                <svg
                  width="7"
                  height="4"
                  viewBox="0 0 7 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.32715 0.737583C6.36313 0.773571 6.38113 0.814958 6.38113 0.861743C6.38113 0.908528 6.36313 0.949915 6.32715 0.985903L3.81155 3.5015C3.77556 3.53749 3.73418 3.55548 3.68739 3.55548C3.64061 3.55548 3.59922 3.53749 3.56323 3.5015L1.04764 0.985903C1.01165 0.949915 0.993652 0.908528 0.993652 0.861743C0.993652 0.814958 1.01165 0.773571 1.04764 0.737583L1.31755 0.467669C1.35354 0.431681 1.39492 0.413686 1.44171 0.413686C1.48849 0.413686 1.52988 0.431681 1.56587 0.467669L3.68739 2.58919L5.80891 0.467669C5.8449 0.431681 5.88629 0.413686 5.93307 0.413686C5.97986 0.413686 6.02124 0.431681 6.05723 0.467669L6.32715 0.737583Z"
                    fill="#545454"
                  />
                </svg>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ))}
    </>
  );
};

export const tags = [
  {
    label: "Brands",
    showMore: true,
    options: [
      "All Brands%(42,751)",
      "Fender%(16,156)",
      "Ibanez%(25,929)",
      "Squier%(623)",
      "Spector%(3,970)",
      "Schector%(4,405)",
      "Yahama%(5,110)",
    ],
  },
  {
    label: "Condition",
    showMore: true,
    options: [
      "New & Used%(42,751)",
      "Used%(16,156)",
      "Brand New%(25,929)",
      "B-Stock%(623)",
      "Mint%(3,970)",
      "Excellent%(4,405)",
      "Very Good%(5,110)",
      "Good%(3,988)",
      "Fair%(2,654)",
      "Poor%(2,564)",
      "Not Working%(2,345)",
    ],
  },
  {
    label: "Price",
  },
  {
    label: "Location",
    options: [
      "Within 50 Miles",
      "Within 100 Miles",
      "Local Pickup",
      "Hide Local Pickup",
    ],
  },
];
