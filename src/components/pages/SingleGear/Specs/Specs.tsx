import Card from "../../../common/Card";

const Specs = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row mt-6 gap-6 xl:gap-6">
      <div>
        <div className="text-xs font-semibold">
          Perfume rating 4.80 out of 5 with 8,557 votes
        </div>
        <div className="mt-2">
          The Precision Bass has a deep, warm tone with a strong mid-range
          presence. It offers players a strong “In Your Face” tone plus
          simplicity and directness. Most Precision Basses only have a volume
          and tone knob; however, the tone knob alone has an enormous effect on
          the sound of the bass.
        </div>
      </div>

      <Card className="p-2 w-full sm:min-w-[466px]" noMt>
        <div className="bg-accentGray-400 px-2 py-1 rounded-lg mb-2 text-xl">
          Product Specs
        </div>

        <div className="flex py-1">
          <div className="font-medium min-w-[120px]">Brand</div>
          <div className="text-accentBlue-500 underline">Fender</div>
        </div>
        <div className="flex py-1">
          <div className="font-medium min-w-[120px]">Model</div>
          <div className="text-accentGray-200">Precision Bass 1950's</div>
        </div>
        <div className="flex py-1">
          <div className="font-medium min-w-[120px]">Categories</div>
          <div className="text-accentBlue-500 underline">Bass</div>
        </div>
        <div className="flex py-1">
          <div className="font-medium min-w-[120px]">Type</div>
          <div className="text-accentGray-200">P-Bass</div>
        </div>
      </Card>
    </div>
  );
};

export default Specs;
