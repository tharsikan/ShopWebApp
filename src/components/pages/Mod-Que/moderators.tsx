import { ComponentProps, Fragment } from "react";
import { cn } from "../../../helpers/utils";
import { useMediaQuery } from "../../../hooks/useMediaQueries";
import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Card from "../../common/Card/Card";
import DialogWrapper from "../../common/dialog-wrapper";
import { InviteMod } from "./invite-mod";
import { RemoveMod } from "./remove-mod";

type ModeratorsProps = ComponentProps<"div">;

export function Moderators({ className, ...props }: ModeratorsProps) {
  return (
    <div className={cn(className)} {...props}>
      <DialogWrapper
        wrapperClassName="md:min-w-[500px]"
        content={<InviteMod />}
      >
        <GradientBtn label={"Invite user as mod"} className={"ml-auto my-3"} />
      </DialogWrapper>
      <section className=" mt-6 space-y-5 ">
        {Array.from(Array(3)).map((_, idx) => (
          <ModeratorCard {..._} idx={idx + 1} />
        ))}
      </section>
    </div>
  );
}

export const ModeratorCard = ({
  idx,
  minimal,
}: {
  idx: number;
  minimal?: boolean;
}) => {
  const md = useMediaQuery("md");
  const Wrapper = md ? Fragment : "div";
  return (
    <Card className="border  px-4  py-6 rounded-lg">
      <div className="md:flex items-center gap-2.5 text-black ">
        <Wrapper className="flex items-center gap-2.5">
          <p className="w-5 text-sm font-medium">0{idx}</p>
          <img
            alt=""
            className="w-[54px] h-[54px] rounded-[108.49px] shadow"
            src="https://www.figma.com/file/mVoqAWE5gPKDvmyKTivM9M/image/eb54265057706ba3001e3a56472a468dd2bf8f0b"
          />
          <div className="flex-1">
            <p className="text-base font-semibold ">justpete003</p>
            <p className=" text-xs font-semibold">Admin</p>
            <div className="flex items-center gap-1 mt-1">
              <img src="/assets/vectors/common/flower.svg" alt="" />
              <div className="text-[11px] font-medium ">1,65,201</div>
            </div>
          </div>
        </Wrapper>
        {!minimal && (
          <Wrapper className="flex items-center flex-wrap gap-1 ml-8 mt-3">
            <DialogWrapper
              wrapperClassName="md:min-w-[500px]"
              className="w-fit"
              content={<RemoveMod />}
            >
              <button className=" h-8 min-w-[114px] border-current px-4 border rounded-md inline-flex gap-1 md:text-sm font-semibold leading-tight text-white capitalizew-full bg-red-600 items-center text-xs">
                Remove as Mod
              </button>
            </DialogWrapper>
            <br />
            <DialogWrapper
              wrapperClassName="md:min-w-[500px]"
              className="w-fit"
              content={<InviteMod edit />}
            >
              <GradientBtn label={"Edit"} className={"h-8 min-w-[114px]"} />
            </DialogWrapper>
          </Wrapper>
        )}
      </div>
    </Card>
  );
};
