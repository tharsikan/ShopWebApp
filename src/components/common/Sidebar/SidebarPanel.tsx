import { Link } from "react-router-dom";
import GradientBtn from "../../buttons/GradientBtn";
import DialogHeader from "../dialog-header";
import DialogWrapper from "../dialog-wrapper";
import SidebarItems from "./SidebarItems";
const SidebarPanel = () => {
  return (
    <div className="px-3 py-4 md:rounded-lg bg-slate-700">
      <SidebarItems />

      <div className="mt-[20px]">
        <DialogWrapper
          content={
            <>
              <DialogHeader />
              <h2 className="text-center mb-3 text-black text-3xl font-semibold">
                Invite Users
              </h2>
              <h4 className="text-center text-black text-base font-bold">
                Earn Free Muzfi Points
              </h4>
              <p className="text-center text-black text-base font-normal">
                1000 per New Member
              </p>
              <input
                type="email"
                placeholder="User@example.com"
                className="w-full md:w-[460px] h-12 px-3 mt-4 bg-zinc-100 rounded-[11px] border outline-accentYellow-500 border-slate-400/20"
              />
              <GradientBtn
                label={"Invite User"}
                className="mx-auto block mt-14 mb-10"
              />
              <p className="text-center md:w-[460px] text-zinc-600 text-sm font-medium">
                Best Offer lets you offer the seller a price you’re willing to
                pay for the item. The seller can accept, reject, or counter your
                offer by suggesting another price.
              </p>
            </>
          }
        >
          <button className="bg-transparent  rounded-lg border-2 border-solid border-accentYellow-300 hover:bg-accentYellow-100 transition-colors w-full flex justify-center items-center gap-[10px] h-[45px]">
            <img
              className="h-5"
              src="/assets/vectors/sidebar/plus.svg"
              alt="add"
            />
            <div className="text-md text-accentYellow-500">Invite Users</div>
          </button>
        </DialogWrapper>
      </div>

      <div>
        <div className="mt-[20px]">
          <Link to="/create/listing">
            <GradientBtn className="w-full" lg label="Sell Gear" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarPanel;
