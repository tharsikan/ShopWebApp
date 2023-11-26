import { ComponentProps } from "react";
import { cn } from "../../../helpers/utils";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import { DestroyBtn } from "../../buttons/destroy-btn";
import DialogWrapper from "../../common/dialog-wrapper";
import { BanUser } from "./ban-user";

type BannedProps = ComponentProps<"div">;

export function Banned({ className, ...props }: BannedProps) {
  return (
    <div className={cn(className)} {...props}>
      <DialogWrapper
        className="w-fit ml-auto"
        wrapperClassName="md:min-w-[500px]"
        content={<BanUser />}
      >
        <DestroyBtn className="mt-10 mb-3">Ban User</DestroyBtn>
      </DialogWrapper>
      <div className="overflow-auto scrollbar-hidden">
        <table className="min-w-full rounded-md table-auto  divide-y border shadow-xl [box-shadow:0_-5px_10px_#eeeeee] divide-gray-200">
          <thead className="bg-[#f5f5f5]">
            <tr>
              {["Name", "Duration", "Reason"].map((el) => (
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
              <td className="px-4 py-4 text-sm text-gray-500 ext-gray-300 whitespace-nowrap">
                Your Friend Buzz
              </td>
              <td>
                <DialogWrapper
                  className="w-fit ml-auto"
                  wrapperClassName="md:min-w-[500px]"
                  content={<BanUser editMode />}
                >
                  <GradientBtn label={"Edit"} className={"px-8 ml-auto mr-5"} />
                </DialogWrapper>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
