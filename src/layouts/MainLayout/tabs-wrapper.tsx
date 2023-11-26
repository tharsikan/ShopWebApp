import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Select from "../../components/common/select";
import Tabs from "../../components/common/tabs";
import { Checkbox } from "../../components/pages/Create-Post/Listing/shipping";
import { categoriesData, subCategoriesData } from "../../components/pages/Home/Categories/categoriesData";

export default function TabsWrapper() {
  const [selectedInstrument, setSelectedInstrument] = useState("General");
  const [selectedSubCmm, setSubCmm] = useState("None");
  const [selectedType, setSelectedType] = useState("None");
 

  return (
    <div>
      <p className="text-black text-[22px] font-semibold">Create a post</p>
      <div className="grid grid-cols-3 md:gap-3 my-3 ">
        <Select
          uniqueKey="instrument-selector"
          label="Category"
          defaultValue={selectedInstrument}
          options={data[0].options}
          onOptionSelect={(val) => setSelectedInstrument(val)}
          required
        />
        <Select
          uniqueKey="instrument-selector1"
          label="Type"
          defaultValue={selectedSubCmm}
          options={categoriesData[categoriesData.findIndex(x => x.label === selectedInstrument)].types}
          onOptionSelect={(val) => setSubCmm(val)}
          required
        />
        <Select
          uniqueKey="instrument-selector2"
          label="Community"
          defaultValue={selectedType}
          options={data[2].options}
          onOptionSelect={(val) => setSelectedType(val)}
          optional
        />
      </div>
      <div className="bg-white border rounded-lg  border-slate-400 border-opacity-20 p-2.5">
        <Tabs />
        <Outlet />
        <div className=" flex items-center p-2.5 bg-zinc-100 rounded-lg justify-between">
          <Checkbox label="Send me post reply notifications" />
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-right text-blue-700"
          >
            Connect accounts to share your post{" "}
            <img src="/assets/vectors/common/info.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
const data = [
  {
    label: "Categories",
    desc: "Keys/Painos/Synths",
    options: categoriesData,
    
  },
  {
    label: "Sub-Communities",
    desc: "Gigging/Live",
    options: subCategoriesData,
  },
  {
    label: "Type",
    desc: "Public",
    options: [
      { label: "TeamNord", icon: "/assets/imgs/home/lock.png" },
      { label: "KorgFam", icon: "/assets/imgs/home/singers.png" },
    ],
  },
];