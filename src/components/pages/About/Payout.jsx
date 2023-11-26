import { Fade } from "react-awesome-reveal";

const Payout = () => {
  return (
    <div className="wrapper mt-10 lg:mt-[60px]">
      <div className="containBig bg-primary-gray-100 py-10 px-5 rounded justify-start items-center flex-col">
        <div className="flex justify-start items-center flex-col text-center">
          <Fade triggerOnce cascade>
            <p className="text-orange-600 text-base md:text-xl font-medium">
              UNLIMITED <br /> FREE LISTINGS
            </p>
            <h2 className="text-black text-opacity-[0.87] font-semibold text-2xl sm:leading-[1.4] sm:text-[30px] xl:text-[35px]">
              Payout
            </h2>
          </Fade>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-14 2xl:gap-y-16 mt-10 md:mt-14">
          <Fade direction="up" triggerOnce cascade>
            <PayoutBox
              img="/assets/imgs/about/selling.png"
              title="Built for selling gear"
              desc="Discover the power of exceptional gear for limitless performance."
            />
            <PayoutBox
              img="/assets/imgs/about/fee.png"
              title="5% Sellers Fee"
              desc="Maximize your profits with our low 5% selling fee guarantee!"
            />
            <PayoutBox
              img="/assets/imgs/about/community.png"
              title="5-star buyer community"
              desc="Join our 5-star buyer community for unparalleled satisfaction!"
            />
            <PayoutBox
              img="/assets/imgs/about/safe.png"
              title=" Safe shipping"
              desc="Secure shipping ensuring your gear arrives safely, every single time."
            />
            <PayoutBox
              img="/assets/imgs/about/secure.png"
              title="Secure transactions"
              desc="Experience worry-free transactions with our robust and secure platform."
            />
            <PayoutBox
              img="/assets/imgs/about/support.png"
              title="Live musician support"
              desc="Elevate your music career with our unwavering live musician support."
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Payout;

const PayoutBox = ({ img, title, desc }) => {
  return (
    <div className="flex justify-start max-w-[360px] items-center flex-col text-center gap-2">
      <img
        src={img}
        className="object-contain max-h-[80px] xl:max-h-[110px]"
        alt=""
      />
      <h3 className="text-[#3e454b] mt-2 text-xl xl:text-[26px] 2xl:text-[30px]  font-medium">
        {title}
      </h3>
      <p className="text-[#AAAAAA] text-base xl:text-xl font-normal">{desc}</p>
    </div>
  );
};
