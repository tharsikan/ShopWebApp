import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


export default function ContactCard() {
  return (
    <div className="grid w-full gap-5 grid-cols-3 ">
      {action.map((el) => (
        <div className="flex flex-col items-center gap-3 px-4 py-5 bg-white rounded-xl shadow-main">
          <span>
            <Icon icon={el.icon} className="h-8 w-8 text-orange-400" />
          </span>
          <p className="text-xl font-extrabold text-dark-grey-900">
            {el.label}
          </p>
          <p className="text-sm leading-7 text-dark-grey-600">{el.title}</p>
          <Link className="text-md font-bold text-purple-blue-500" to={el.to}>
            {el.des}
          </Link>
          <p className="text-sm text-dark-grey-700">{el.location}</p>
        </div>
      ))}
    </div>
  );
}

const action = [
  {
    label: "Email",
    title: "Contact us at",
    des: "support@muzfi.com",
    icon: "line-md:email-twotone",
    to: "mailto: hello@loopple.com",
    location: "24/7",
  },
  {
    label: "Phone",
    title: "Reach out to us by phone",
    des: "860-288-9122",
    icon: "solar:phone-bold-duotone",
    to: "tel:+516-486-5135",
    location: "10AM-8PM EST",
  },
  {
    label: "Location",
    title: "Find us at our office",
    des: "P.O. 855322 Hartford, CT 06106",
    icon: "fluent:box-16-filled",
    to: "https://goo.gl/maps/QcWzYETAh4FS3KTD7",
    location: "Anytime",
  },
];