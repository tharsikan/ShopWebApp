import { Fade } from "react-awesome-reveal";
import { Orbit } from "@uiball/loaders";

const Marketplace = () => {
  return (
    <section className="wrapper mt-10 lg:mt-[80px]">
      <div className="containBig flex-col  justify-center items-center gap-8">
        <div className="justify-center lg:flex-row flex-col items-center gap-4 w-full flex">
          <Fade
            triggerOnce
            direction="left"
            className=" max-w-[550px] w-full xl:max-w-[640px] 2xl:max-w-[730px]"
          >
            <img
              src="/assets/imgs/about/marketplace.png"
              className=" object-contain w-full"
              alt=""
            />
          </Fade>
          <div className="flex justify-start items-start flex-col gap-3 ml-3">
            <Fade direction="right" triggerOnce cascade className="w-full">
              <h4 className="text-black font-medium text-2xl sm:leading-[1.4] sm:text-[30px] xl:text-[35px] 2xl:text-[30px]">
                Trusted Marketplace for Finding Gear
              </h4>
              <p className="text-slate-700 font-medium text-base 2xl:leading-[1.4] sm:text-lg xl:text-2xl 2xl:text-[16px]">
                Making the finding the right piece of gear online easy, safe,
                secure and most importantly finding the right equipment.{" "}
              </p>{" "}
            </Fade>
          </div>
        </div>
        <Fade direction="up" triggerOnce className="w-full">
          <div className="flex lg:flex-row flex-col justify-center w-full items-start mt-14">
            <div className="flex justify-start items-start lg:items-center flex-col gap-1 text-left lg:text-center py-4 w-full lg:w-auto lg:px-8">
              <img
                src="/assets/imgs/about/community.gif"
                className="w-full max-h-[200px] mb-1 object-contain self-center"
                alt=""
              />
              <h4 className="primaryGrText text-2xl xl:text-[20px] font-bold">
                Build Communities
              </h4>
              <p className="text-slate-700 font-medium text-base xl:text-xl max-w-[380px]">
                Showcase Your Current Gear Rooms with your musically friends.
              </p>
            </div>
            <div className="flex border-y lg:border-x border-solid border-[#0000001F] justify-start items-start lg:items-center flex-col gap-1 text-left lg:text-center py-4 lg:border-y-0 w-full lg:w-auto lg:px-8">
              <img
                src="/assets/imgs/about/marketplace.gif"
                className="w-full max-h-[200px] mb-1 object-contain self-center"
                alt=""
              />
              <h4 className="primaryGrText text-2xl xl:text-[20px] font-bold">
                Marketplace
              </h4>
              <p className="text-slate-700 font-medium text-base xl:text-xl max-w-[380px]">
                Buy and Sell gear with confidence.
              </p>
            </div>
            <div className="flex justify-start items-start lg:items-center flex-col gap-1 text-left lg:text-center py-4 w-full lg:w-auto lg:px-8">
              <img
                src="/assets/imgs/about/review.gif"
                className="w-full max-h-[200px] mb-1 object-contain self-center"
                alt=""
              />
              <h4 className="primaryGrText text-2xl xl:text-[20px] font-bold">
                Reviews / Ratings
              </h4>
              <p className="text-slate-700 font-medium text-base xl:text-xl max-w-[380px]">
                Real Time reactions to gear from those that matter.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Marketplace;