import clsx from 'clsx';
import  { useState } from 'react'
import Offers from './Offers';

const OfferSelector = () => {
  const [selector, setSelector] = useState(true);

    return (
      <div>
        <div className="mt-7">
          <div className="sm:w-[370px] mx-auto bg-white border border-solid border-accentGray-600 p-[10px] flex rounded-lg">
            <div
              className={clsx(
                selector === true
                  ? "cursor-pointer bg-gradient-to-l from-red-500 to-yellow-500 text-white font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md"
                  : "cursor-pointer text-accentGray-200 font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md"
              )}
              onClick={() => setSelector(true)}
            >
              Buying
            </div>
            <div
              className={clsx(
                selector === true
                  ? "cursor-pointer text-accentGray-200 font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md"
                  : "cursor-pointer bg-gradient-to-l from-red-500 to-yellow-500 text-white font-semibold min-h-[44px] flex items-center justify-center flex-grow rounded-md"
              )}
              onClick={() => setSelector(false)}
            >
              Selling
            </div>
          </div>
          <Offers type={selector} />
        </div>
      </div>
    );
}

export default OfferSelector