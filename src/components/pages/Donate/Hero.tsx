import React from 'react'
import GradientBtn from '../../buttons/GradientBtn';
import GreyBtn from '../../buttons/GreyBtn';

const Hero = () => {
  return (
    <div className="mt-4 mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className=" pb-12  md:pb-5">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Help Us grow{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-700 ">
              Today!
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              We are currently self funded and growing rapidly, with your help
              and aid we can build this platform to its full potential. As the
              founder and CEO, I wear alot of hats while operating this ship
              including the techincal and customer relations. I absoultly love
              it and wouldnt have it any other way, I would love to chance to
              contiue to dedicate my time for you all.
            </p>
            <div
              className="max-w-xs mx-auto gap-4 sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <GradientBtn
                  className={"h-12 w-full p-6"}
                  label={"Donate Here"}
                />
              </div>
              <div>
                <GreyBtn className={"h-12 w-full p-6 text-black"} label={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero