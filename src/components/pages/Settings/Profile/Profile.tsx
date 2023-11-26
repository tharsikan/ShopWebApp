import { Link } from "react-router-dom";
import Card from "../../../common/Card";
import Select from "../../../common/Selectors/select2";//
import BlueOutlineBtn from "../../../buttons/BlueOutlineBtn";
import RedOutlineBtn from "../../../buttons/RedOutlineBtn";
import Switch from "../../../common/Switch";
import AddFile from "../../../common/AddFiIe";
import GradientBtn from "../../../buttons/GradientBtn";

const Profile = () => {
  return (
    <>
      <Card className="p-6">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">Customize profile</h3>
          <GradientBtn label="Save Changes" icon="" />
        </div>
        <hr className="v2 my-6" />
        <div className="max-w-[880px]">
          <div>
            <h5 className="text-base text-accentGray-700">
              PROFILE INFORMATION
            </h5>
            <h4 className="text-semibold text-[20px]">
              Display name (optional)
            </h4>
            <h5 className="text-md text-accentGray-700">Pierre Augustin</h5>
            <h5 className="text-xs underline text-accentGray-700">
              Set a display name. This does not change your username.
            </h5>
            <textarea
              rows={3}
              className="mt-3 rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 outline-none w-full p-3 my-1 flex-grow"
              placeholder="Display name (optional)"
            />
            <h5 className="text-[10px] text-accentGray-700">
              30 Characters remaining
            </h5>
          </div>
        </div>

        <hr className="v2 my-6" />

        <div className="max-w-[880px]">
          <div>
            <h4 className="text-semibold text-[20px]">About (optional)</h4>
            <h5 className="text-sm text-accentGray-700">
              A brief description of yourself shown on your profile.
            </h5>
            <textarea
              rows={7}
              className="mt-3 rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 outline-none w-full p-3 my-1 flex-grow"
              placeholder="About (optional)"
            />
            <h5 className="text-[10px] text-accentGray-700">
              200 Characters remaining
            </h5>
          </div>
        </div>

        <hr className="v2 my-6" />

        <div className="max-w-[880px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">Social links (5 max)</h4>
            <h5 className="text-sm text-accentGray-700">
              People who visit your profile will see your social links.
            </h5>
          </div>
          <BlueOutlineBtn icon="/assets/vectors/settings/add.svg">
            Add social link
          </BlueOutlineBtn>
        </div>

        <hr className="v2 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 w-full">
          <div className="max-w-[880px] w-full">
            <h5 className="text-base text-accentGray-700">IMAGES</h5>
            <h4 className="text-semibold text-[20px]">
              Avatar and banner image
            </h4>
            <h5 className="text-sm text-accentGray-700">
              Images must be .png or .jpg format
            </h5>

            <div className="mt-[20px]">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:max-w-[212px]">
                  <AddFile id="file-1" />
                </div>
                <div className="flex-grow">
                  <AddFile id="file-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="v2 my-6" />

        <div className="max-w-[880px]">
          <div>
            <h4 className="text-semibold text-[20px]">Background</h4>
            <h5 className="text-sm text-accentGray-700">
              Let everyone know your domain{" "}
              <Link to="/" className="text-accentBlue-400 underline">
                Learn more
              </Link>
            </h5>
          </div>
          <Select
            
            light
            placeholder="Producer"
            uniqueKey="bckgd-select"
            options={[
              { label: "Musician", value: "mus" },
              { label: "Producer", value: "prod" },
              { label: "Retail Store", value: "rtil" },
              { label: "Vintage Collector", value: "vint" },
              { label: "Student", value: "stud" },
              { label: "Artist", value: "art" },
              { label: "Engineer", value: "eng" },
              { label: "Hobbiest", value: "hob" },
            ]}
          />
        </div>

        <hr className="v2 my-6" />

        <GradientBtn label="Save Changes" icon="" />
      </Card>
    </>
  );
};

export default Profile;
