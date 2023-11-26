import { Link } from "react-router-dom";
import Card from "../../../common/Card";
import Select from "../../../common/Selectors/select2";
import BlueOutlineBtn from "../../../buttons/BlueOutlineBtn";
import Switch from "../../../common/Switch";

const Account = () => {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-2xl font-semibold">Safety & Privacy</h3>
        <h5 className="text-sm text-accentGray-700">
          Manage how we use data to personalize your Muzfi experience, and
          control how other redditors interact with you. To learn more, visit
          our{" "}
          <Link to="/" className="text-accentBlue-400 underline">
            Privacy & Security FAQs .
          </Link>
        </h5>
        <hr className="v2 my-6" />
        <div className="">
          <div>
            <h5 className="text-base text-accentGray-700">SAFETY</h5>
            <h4 className="text-semibold text-[20px]">People You’ve Blocked</h4>
            <h5 className="text-sm text-accentGray-700">
              Blocked people can’t send you chat requests or private messages.
            </h5>
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row gap-[10px] items-center">
          <input
            className="rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 h-12 outline-none w-full p-3 my-1 flex-grow"
            type="text"
            placeholder="Block new user"
          />
          <BlueOutlineBtn noMinW icon="/assets/vectors/settings/add.svg">
            Add User
          </BlueOutlineBtn>
        </div>

        <div className="mt-4">
          <div>
            <h4 className="text-semibold text-[20px]">
              Communities You've Muted
            </h4>
            <h5 className="text-sm text-accentGray-700">
              Posts from muted communities won't show up in your feeds or
              recommendations.
            </h5>
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row gap-[10px] items-center">
          <input
            className="rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 h-12 outline-none w-full p-3 my-1 flex-grow"
            type="text"
            placeholder="Mute new community"
          />
          <BlueOutlineBtn noMinW icon="/assets/vectors/settings/add.svg">
            Add User
          </BlueOutlineBtn>
        </div>

        <hr className="v2 my-6" />

        <div className="">
          <div>
            <h5 className="text-base text-accentGray-700">PRIVACY</h5>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 mt-3">
              <div>
                <h4 className="text-semibold text-[20px]">
                  Show up in search results
                </h4>
                <h5 className="text-sm text-accentGray-700">
                  Allow search engines like Google to link to your profile in
                  their search results.
                </h5>
              </div>
              <Switch />
            </div>
           
          </div>
        </div>

        <hr className="v2 my-6" />

        <div className="">
          <div>
            <h5 className="text-base text-accentGray-700">PRIVACY</h5>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
              <div>
                <h4 className="text-semibold text-[20px]">
                  Use two-factor authentication
                </h4>
                <h5 className="text-sm text-accentGray-700">
                  Help protect your account (even if someone gets your password)
                  by requiring a verification code and a password to log in.
                </h5>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <hr className="v2 my-6" />

        <Link
          to="/"
          className="flex gap-2 underline text-accentBlue-500 font-semibold"
        >
          <img src="/assets/vectors/settings/explore.svg" alt="explore" />
          Manage third-party app authorization
        </Link>
      </Card>
    </>
  );
};

export default Account;
