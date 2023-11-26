export const searchFilterData = [
  {
    label: "Sort By",
    options: [
      "Best Match",
      "Most Recent",
      "Price: Low to High",
      "Price: High to Low",
    ],
  },
  {
    label: "Instrument",
    options: [
      "Keys/Synths/Piano  ( 11,833 )",
      "Guitars  ( 24,094 )",
      "Bass Guitar  ( 15,234 )",
      "Drums  ( 29,378 )",
      "Guitars 24,094",
      "Pedals  ( 16,254 )",
      "Amps  ( 2,562 )",
      "Band/Wind  ( 2,453 )",
      "DJ / Audio  ( 12,564 )",
      "Recording Gear  ( 17,652 )",
      "Live Sound  ( 12,342 )",
      "More  ( 28,232 )",
    ],
  },
  {
    label: "Type",
    options: [
      "Synths ( 11,833 )",
      "MIDI ( 11,833 )",
      "Beat Production ( 11,833 )",
      "Electric Paino ( 11,833 )",
      "Acoustic Paino ( 11,833 ) ",
      "Key’s Accessories ( 11,833 )",
      "Organs ( 11,833 )",
      "Workstations ( 11,833 )",
      "More ( 11,833 )",
    ],
  },
  {
    label: "Brands",
    options: [
      "All Brands (42,751)",
      "Fender (16,156)",
      "Ibanez (25,929)",
      "Squier (623)",
      "Spector (3,970)",
      "Schector (4,405)",
      "Yahama (5,110)",
    ],
  },
  {
    label: "Condition",
    options: [
      "New and Used ( 21,833 )",
      "Used ( 11,833 )",
      "Brand New ( 11,833 )",
      "B-Stock ( 11,833 )",
      "Mint ( 11,833 ) ",
      "Excellent  ( 11,833 )",
      "Very Good  ( 11,833 )",
      "Good ( 11,833 )",
      "Fair ( 11,833 )",
      "Poor ( 11,833 )",
      "Non-Functioning ( 11,833 )",
    ],
  },
  {
    label: "Price",
    options: [],
    extra: (
      <div className="border mt-1 flex h-7 pr-1 border-neutral-500/50 rounded-md overflow-hidden divide-x divide-neutral-500/50">
        <input
          placeholder="Min"
          type="text"
          className="grow text-xs w-full outline-none px-2"
        />
        <input
          placeholder="Max"
          type="text"
          className="grow text-xs w-full outline-none px-2"
        />
        <img
          src="/assets/vectors/common/search-alt.svg"
          className="p-1"
          alt=" "
        />
      </div>
    ),
  },
  {
    label: "Location",
    options: ["Less Than 50 Miles", "Less Than 100 Miles", "Local Pickup"],
    extra: (
      <div className="border max-w-[120px] rounded h-6 my-1 flex border-neutral-500/50 overflow-hidden">
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
    ),
  },
];
