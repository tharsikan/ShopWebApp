import { Icon } from "@iconify/react";

import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import {
  categoriesData,
  subCategoriesData,
} from "../Home/Categories/categoriesData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "../../common/select";
import DialogWrapper from "../../common/dialog-wrapper";
import CreateCommunityModal from "./create-community-modal";

export default function Filter() {
  const [selectedInstrument, setSelectedInstrument] = useState("Guitar");
  const [selectedSubCmm, setSubCmm] = useState("Gigging");
  const [selectedType, setSelectedType] = useState("Public");
  return (
    <section className="grid grid-cols-2 gap-3 my-8 md:grid-cols-4">
      <Select
        uniqueKey="instrument-selector"
        label="Category"
        defaultValue={selectedInstrument}
        options={data[0].options}
        onOptionSelect={(val) => setSelectedInstrument(val)}
      />
      <Select
        uniqueKey="instrument-selector"
        label="Sub-Categories"
        defaultValue={selectedSubCmm}
        options={data[1].options}
        onOptionSelect={(val) => setSubCmm(val)}
      />
      <Select
        uniqueKey="instrument-selector"
        label="Type"
        defaultValue={selectedType}
        options={data[2].options}
        onOptionSelect={(val) => setSelectedType(val)}
      />

      <DialogWrapper content={<CreateCommunityModal />}>
        <GradientBtn
          label={
            <p className="flex items-center gap-2.5 hover:opacity-75">
              {" "}
              <Icon
                icon="uit:create-dashboard"
                className="text-xl text-white"
              />
              <span className="text-gray-100 text-md  capitalize">
                Create Community
              </span>
            </p>
          }
          className="flex items-center h-full gap-1 w-full"
        />
      </DialogWrapper>
    </section>
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
      { label: "Private", icon: "/assets/imgs/home/lock.png" },
      { label: "public", icon: "/assets/imgs/home/singers.png" },
    ],
  },
];
