import Card from "../../../common/Card";
import Switch from "../../../common/Switch";

const Notifications = () => {
  return (
    <>
      <Card className="p-6">
        <h3 className="text-2xl font-semibold">Notification settings</h3>

        <hr className="v2 my-6" />

        <h5 className="text-base text-accentGray-700">MESSAGES</h5>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Inbox messages</h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Chat messages</h4>
          <Switch />
        </div>

        <hr className="v2 my-6" />

        <h5 className="text-base text-accentGray-700">ACTIVITY</h5>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Mentions of u/username</h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Comments on your posts</h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Upvotes on your posts</h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">
            Upvotes on your comments
          </h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">
            Replies to your comments
          </h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">
            Activity on your comments
          </h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">
            Activity on threads you're in
          </h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">
            Activity on chat posts you're in
          </h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Offers Made/Accepted</h4>
          <Switch />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-11 my-3">
          <h4 className="text-semibold text-[20px]">Orders</h4>
          <Switch />
        </div>

     
      </Card>
    </>
  );
};

export default Notifications;
