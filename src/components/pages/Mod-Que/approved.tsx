import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import { DestroyBtn } from "../../buttons/destroy-btn";
import DialogWrapper from "../../common/dialog-wrapper";
import { ApprovedUserModal } from "./approved-user-modal";

type BannedProps = ComponentProps<"div">;

export function Approved({ className, ...props }: BannedProps) {
  return (
    <div className={cn(className)} {...props}>
      <DialogWrapper
        wrapperClassName="md:min-w-[500px]"
        className="w-fit ml-auto"
        content={<ApprovedUserModal />}
      >
        <GradientBtn className="mt-10 mb-3" label={"Approve User"} />
      </DialogWrapper>
      <div className="overflow-auto scrollbar-hidden">
        <table className="min-w-full rounded-md overflow-hidden  divide-y border shadow-xl [box-shadow:0_-5px_10px_#eeeeee] divide-gray-200">
          <thead className="bg-[#f5f5f5]">
            <tr>
              {["Name", "Time"].map((el) => (
                <th
                  key={el}
                  className="px-4 py-2 text-left text-neutral-900 text-[13px]  "
                >
                  {el}
                </th>
              ))}
              <th className="" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  g-gray-900">
            <tr>
              <td className="px-4 py-4 text-sm text-gray-500 ext-gray-300 whitespace-nowrap">
                MikeJazz
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 ext-gray-300 whitespace-nowrap">
                Permanent
              </td>
              <td className="flex px-4 py-1.5">
                <GradientBtn
                  label={"Send Message"}
                  className={"px-8 ml-auto mr-5 whitespace-nowrap"}
                />
                <DialogWrapper
                  wrapperClassName="md:min-w-[500px]"
                  className="w-fit"
                  content={<ApprovedUserModal confirm />}
                >
                  <DestroyBtn className="h-full">Remove</DestroyBtn>
                </DialogWrapper>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
