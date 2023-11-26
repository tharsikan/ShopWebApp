import { useState } from "react";
import Slider from "react-input-slider";

import Card from "../../../common/Card";

const Ranges = () => {
  const [price, setPrice] = useState({ x: 10, y: 10 });
  const [longevity, setLongevity] = useState({ x: 10, y: 10 });

  return (
    <div className="mt-6 flex gap-6">
      <Card className="p-[20px]">
        <div className="flex items-center gap-4">
          <img src="/assets/vectors/single-catalog/price.svg" alt="price" />
          <div className="text-lg font-semibold">PRICE VALUE</div>
        </div>

        <div className="mt-[10px] mb-2">
          <div className="text-sm font-semibold mb-2">No vote</div>
          <div className="relative px-3">
            <div className="absolute px-3 left-0 right-0 top-[7px] z-10 flex justify-between items-center pointer-events-none">
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%] opacity-0"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2">$$$$$</div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2">$$$$$</div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-end w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%] opacity-0"></div>
                <div className="text-accentGray-200 mt-2">$</div>
              </div>
            </div>
            <Slider
              styles={{
                track: {
                  backgroundColor: "#D9FFE9",
                  width: "100%",
                },
                active: {
                  backgroundColor: "#219653",
                },
                thumb: {
                  width: 20,
                  height: 20,
                  border: "2px solid #219653",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                },
                disabled: {
                  opacity: 0.5,
                },
              }}
              axis="x"
              x={price.x}
              onChange={({ x }) => setPrice((state) => ({ ...state, x }))}
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              way overpriced
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                198
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              overpriced
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                763
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">ok</div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                2328
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              good value
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                702
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              great value
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                172
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="p-[20px]">
        <div className="flex items-center gap-4">
          <img
            src="/assets/vectors/single-catalog/longevity.svg"
            alt="longevity"
          />
          <div className="text-lg font-semibold">PERFORMANCE</div>
        </div>

        <div className="mt-[10px] mb-2">
          <div className="text-sm font-semibold mb-2">No vote</div>
          <div className="relative px-3">
            <div className="absolute px-3 left-0 right-0 top-[7px] z-10 flex justify-between items-center pointer-events-none">
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%] opacity-0"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2">$$$$$</div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2">$$$$$</div>
              </div>
              <div className="flex flex-col items-center w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%]"></div>
                <div className="text-accentGray-200 mt-2"></div>
              </div>
              <div className="flex flex-col items-end w-11 h-[38px]">
                <div className="w-2 h-2 bg-accentGreen-800 rounded-[50%] opacity-0"></div>
                <div className="text-accentGray-200 mt-2">$</div>
              </div>
            </div>
            <Slider
              styles={{
                track: {
                  backgroundColor: "#D9FFE9",
                  width: "100%",
                },
                active: {
                  backgroundColor: "#219653",
                },
                thumb: {
                  width: 20,
                  height: 20,
                  border: "2px solid #219653",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                },
                disabled: {
                  opacity: 0.5,
                },
              }}
              axis="x"
              x={longevity.x}
              onChange={({ x }) => setLongevity((state) => ({ ...state, x }))}
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              way overpriced
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                198
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              overpriced
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                763
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">ok</div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                2328
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              good value
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                702
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <div className="text-sm font-semibold min-w-[150px]">
              great value
            </div>
            <div className="flex items-center flex-grow">
              <div className="w-[60px] text-sm font-medium flex-shrink-0">
                172
              </div>
              <div className="h-2 w-full bg-accentGreen-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Ranges;
