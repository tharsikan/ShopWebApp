import React from 'react'
import GradientBtn from '../../buttons/GradientBtn';
import Widget from '../Widget';

const ComingSoon = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex mt-3 justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-orange-600 font-semibold">404 Error</h3>
        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
          Coming Soon
        </p>
        <p className="text-gray-600">
          Sorry, the page you are looking for is in process of being developed
          and will be delivered ASAP.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <GradientBtn label="Go Back"></GradientBtn>
          <a
            href="javascript:void(0)"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
          >
            Contact support
          </a>
        </div>
      </div>
   
    </div>
  );
}

export default ComingSoon