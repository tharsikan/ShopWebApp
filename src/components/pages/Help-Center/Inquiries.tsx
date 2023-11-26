import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../helpers/utils";

type InquiriesProps = ComponentProps<"div"> & {};

export default function Inquiries({ className, ...props }: InquiriesProps) {
  return (
    <div className={cn("", className)} {...props}>
      <p className="text-xl mt-10 mb-5 font-semibold text-center">
        Frequently Asked Questions
      </p>
      <div className="bg-white rounded-lg divide-y">
        {links.map((el) => (
          <Link to="" className="underline p-5 block">
            {el.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const links = [
  { label: "Tips for using Muzfi safely" },
  { label: "How do I qualify for buyer or seller protection?" },
  { label: "Why is my account under review?" },
  { label: "What do I do if I’m asked to pay outside the Muzfi website?" },
  { label: "How do I reset my password?" },
];
