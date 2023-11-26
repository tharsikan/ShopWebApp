import React, { useEffect } from 'react'
import * as Toast from "@radix-ui/react-toast";
import "./toaststyles.css";
import GradientBtn from '../../buttons/GradientBtn';
import { useAppSelector } from '../../../redux/hooks';

const NotifyToast = () => {
  const notify = useAppSelector((state) => state.notify);
  const [open, setOpen] = React.useState(notify.open);

  const notifyType = () => {
    switch (notify.type) {
      case 0:
        return <p className="text-green-600">Success</p>;
        break;
      case 1:
        return <p className="text-red-600">Error</p>;
        break;
      case 2:
        return <p className="text-yellow-600">Warning</p>;
        break;
      case 3:
        return <p className="text-red-600">Signout</p>;
        break;
      default:
        return <p className="text-green-600">Success</p>;
    }
  }

    useEffect(() => {
      setOpen(notify.open)
    },[notify]);

  
    return (
      <Toast.Provider swipeDirection="right">
        {/* <button
        className="Button large violet"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button> */}

        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen} duration={1000000}>
          <Toast.Title className="ToastTitle text-slate-800">
            {notify.title}
          </Toast.Title>
          <Toast.Description asChild>
                {notifyType()}
          </Toast.Description>
          <Toast.Action
            className="ToastAction"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="rounded-md p-2 bg-gradient-to-l from-red-500 to-yellow-500 text-white">
              Close
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    );
};





export default NotifyToast