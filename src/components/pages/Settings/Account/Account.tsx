import { Link } from "react-router-dom";
import Card from "../../../common/Card";
import Select from "../../../common/Selectors/select2";
import BlueOutlineBtn from "../../../buttons/BlueOutlineBtn";
import RedOutlineBtn from "../../../buttons/RedOutlineBtn";
import Switch from "../../../common/Switch";

const Account = () => {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-2xl font-semibold">Account settings</h3>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h5 className="text-base text-accentGray-700">
              ACCOUNT PREFERENCES
            </h5>
            <h4 className="text-semibold text-[20px]">Email address</h4>
            <h5 className="text-sm text-accentGray-700">augustpi@kean.edu</h5>
          </div>
          <BlueOutlineBtn>Change</BlueOutlineBtn>
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">Gender</h4>
            <h5 className="text-sm text-accentGray-700">
              This information may be used to improve your recommendations and
              ads.
            </h5>
          </div>
          <Select
            long
            light
            placeholder="Male"
            uniqueKey="gender-select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">
              Display language{" "}
              <span className="text-red-500 text-sm">(beta)</span>
            </h4>
            <h5 className="text-sm text-accentGray-700">
              Select the language you'd like to experience the Reddit interface
              in. Note that this won't change the language of user-generated
              content and that this feature is still in development so
              translations and UI are still under review.
            </h5>
          </div>
          <Select
            long
            light
            placeholder="English"
            uniqueKey="gender-select"
            options={[
              { label: "English", value: "eng" },
              { label: "French", value: "frch" },
              { label: "Spanish", value: "spsh" },
            ]}
          />
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">Content languages</h4>
            <h5 className="text-sm text-accentGray-700">
              Add languages you’d like to see posts, community recommendations,
              and other content in
            </h5>
          </div>
          <BlueOutlineBtn>Change</BlueOutlineBtn>
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">Country</h4>
            <h5 className="text-sm text-accentGray-700">
              This is your primary location.{" "}
              <Link to="/" className="text-accentBlue-400 underline">
                Learn more
              </Link>
            </h5>
          </div>
          <Select
            long
            light
            placeholder="United States"
            uniqueKey="gender-select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">City/State</h4>
            <h5 className="text-sm text-accentGray-700">
              This is your primary location.{" "}
              <Link to="/" className="text-accentBlue-400 underline">
                Learn more
              </Link>
            </h5>
          </div>
          <Select
            long
            light
            placeholder="Hartford, Connecticut"
            uniqueKey="gender-select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        {/* <hr className="v2 my-6" /> */}

        {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h5 className="text-base text-accentGray-700">
              CONNECTED ACCOUNTS
            </h5>
            <h4 className="text-semibold text-[20px]">Connect to Twitter</h4>
            <h5 className="text-sm text-accentGray-700">
              Connect a Twitter account to enable the choice to tweet your new
              posts and display a link on your profile. We will never post to
              Twitter without your permission.
            </h5>
          </div>
          <BlueOutlineBtn icon="/assets/vectors/settings/twitter.svg">
            Connect to Twitter
          </BlueOutlineBtn>
        </div> */}

        {/* <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">Connect To Apple</h4>
            <h5 className="text-sm text-accentGray-700">
              Connect account to log in to Reddit with Apple
            </h5>
          </div>
          <BlueOutlineBtn icon="/assets/vectors/settings/apple.svg">
            Connect to Apple
          </BlueOutlineBtn>
        </div> */}

        <hr className="v2 my-6" />

      

        <hr className="v2 my-6" />

        <div className="flex justify-end">
          <RedOutlineBtn icon="/assets/vectors/settings/bin.svg">
            Delete My Account
          </RedOutlineBtn>
        </div>
      </Card>
    </>
  );
};

export default Account;
