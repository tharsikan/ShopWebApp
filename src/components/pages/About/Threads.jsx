import { Fade } from "react-awesome-reveal";

const Threads = () => {
  return (
    <section className="w-full flex justify-start items-center flex-col mt-16 sm:mt-[80px] lg:mt-[120px]">
      <div className="w-[90%] max-w-[1300px] flex justify-start items-center sm:items-start flex-col">
        <Fade triggerOnce direction="down">
          <div className="sm:text-left text-center ">
            <h2 className="text-black  font-semibold text-2xl sm:leading-[1.4] sm:text-[30px] xl:text-[35px]">
              Threads
            </h2>
            <p className="text-base md:text-xl font-normal text-slate-800">
              Start sharing with like minded friends with your first post!
            </p>
          </div>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-7 mt-8">
          <Fade triggerOnce cascade damping={0.1}>
            <ThreadBox
              step={1}
              title="Post Questions and Topics"
              desc="Sign up with your email, verify your account by taking a photo
            of your KTP, SIM, or passport."
              img="/assets/imgs/about/thread1.png"
              stepColor="bg-[#206CD6]"
              gif="/assets/imgs/about/thread1.gif"
            />
            <ThreadBox
              gif="/assets/imgs/about/thread2.gif"
              step={2}
              stepColor="bg-[#85C4FF]"
              title="Create Listings"
              desc="Sign up with your email, verify your account by taking a photo of your KTP, SIM, or passport."
              img="/assets/imgs/about/thread2.png"
              order
            />
            <ThreadBox
              step={3}
              stepColor="bg-[#6547A5]"
              title="Post Polls"
              desc="Deposit your Rupiah balance by transferring funds from banks or your preferred e-wallets."
              img="/assets/imgs/about/thread3.png"
              gif="/assets/imgs/about/thread3.gif"
            />
            <ThreadBox
              gif="/assets/imgs/about/thread4.gif"
              order
              step={4}
              stepColor="bg-[#CE10BB]"
              title="Add Gear to Inventory "
              desc="Experience the easiest way to buy and sell crypto assets."
              img="/assets/imgs/about/thread4.png"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Threads;

const ThreadBox = ({ img, title, gif, step, desc, order, stepColor }) => {
  return (
    <div
      className={`${
        order ? "flex-col-reverse" : "flex-col"
      } sm:min-h-[600px] h-full xl:min-h-[800px] flex justify-between items-start  gap-10 sm:gap-20 bg-gradient-to-r from-orange-400 to-red-700 rounded-3xl p-5 sm:p-10`}
    >
      <div
        className={`flex justify-start w-full items-start ${
          order ? "flex-col" : "flex-col-reverse"
        } gap-4`}
      >
        {/* <h5 className="text-[#0B2238] text-base sm:text-lg xl:text-xl font-bold">
          Step.{" "}
          <span
            className={`rounded-full inline-grid ml-2 place-items-center w-8 sm:w-10 xl:w-[50px] aspect-square ${stepColor} text-white `}
          >
            {step}
          </span>
        </h5> */}
        <h3 className="text-slate-100 text-2xl sm:text-[28px] xl:text-[35px] font-bold">
          {title}
        </h3>
        <img
          src={gif}
          className="self-center max-w-[250px] sm:max-w-[300px] object-contain w-full"
          alt=""
        />
        {/* <p className="text-black text-base xl:text-lg">{desc}</p> */}
      </div>
      <img
        src={img}
        className="lg:max-w-none max-w-[500px] self-center w-full object-contain"
        alt=""
      />
    </div>
  );
};