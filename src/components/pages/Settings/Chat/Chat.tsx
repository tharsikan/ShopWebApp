import { Link } from "react-router-dom";
import Card from "../../../common/Card";
import Select from "../../../common/Selectors/select2";
import BlueOutlineBtn from "../../../buttons/BlueOutlineBtn";
import RedOutlineBtn from "../../../buttons/RedOutlineBtn";
import Switch from "../../../common/Switch";

const Chat = () => {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-2xl font-semibold">Chat & Messaging</h3>

        <hr className="v2 my-6" />

      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11">
          <div>
            <h4 className="text-semibold text-[20px]">
              Who can send you private messages
            </h4>
            <h5 className="text-sm text-accentGray-700">
              Heads up—Muzfi admins and moderators of communities you’ve joined
              can message you even if they’re not approved.
            </h5>
          </div>
          <Select
            long
            light
            placeholder="Everyone"
            uniqueKey="gender-select"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 mt-6">
          <div>
            <h4 className="text-semibold text-[20px]">Mark all as read</h4>
            <h5 className="text-sm text-accentGray-700">
              Mark all conversations and invites as read.
            </h5>
          </div>
          <Switch />
        </div>
      </Card>
    </>
  );
};

export default Chat;
