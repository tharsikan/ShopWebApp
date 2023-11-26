import Card from "../../../common/Card";

import Chart from "./Chart";

const Trend = () => {
  return (
    <div className="max-w-[850px] mx-auto mt-6">
      <Card className="p-0" noMt>
        <div className="p-5 flex justify-between items-start">
          <div>
            <div className="text-accentGray-700">Trend</div>
            <div className="text-4xl">Vintage Item</div>
            <div className="text-accentGray-700">1950's P-Bass</div>
          </div>
          <img
            className="cursor-pointer"
            src="/assets/vectors/single-catalog/info.svg"
            alt="info"
          />
        </div>
        <div className="p-5 border-t border-solid border-accentGray-80">
          <Chart />
        </div>
      </Card>
    </div>
  );
};

export default Trend;
