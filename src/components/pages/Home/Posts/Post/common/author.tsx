import { cn } from "../../../../../../helpers/utils";

export function Author({
  el,
  idx,
  topic,
}: {
  el: any;
  idx: number;
  topic?: boolean;
}) {
  return (
    <>
      <div className="flex flex-wrap my-2 items-center justify-between gap-4">
        <div className="flex gap-1 sm:gap-3 max-sm:flex-col">
          <img
            className="w-[40px] h-[40px] rounded-[50%]"
            src={el.authorImg}
            alt={el.authorName}
          />
          <div>
            <div className="font-semibold">{el.authorName}</div>
            <div className="flex items-center ">
              <img src="/assets/vectors/home/flower.svg" alt="flower" />
              <div className="ml-1 text-[10px] font-medium">
                ({el.authorReviewsCount})
              </div>
            </div>

            <div className="text-accentGray-700 text-[10px] font-medium">
              {el.location}
            </div>
          </div>
        </div>
        <div
          className={cn("flex flex-col items-end justify-center", {
            hidden: topic,
          })}
        >
          {el.type === "prod-gear" || el.type === "prod-sale"
            ? el.type !== "prod-sale" && (
                <div className="flex max-sm:flex-col max-sm:[&_*]:text-right items-end sm:items-center gap-1 sm:gap-3">
                  <img
                    className="w-9 h-9"
                    src={`/assets/vectors/home/lock-2.svg`}
                    alt="lock"
                  />
                  <div>
                    <div className="text-xs font-semibold">{el.prodTitle}</div>
                    <div className="text-xs font-semibold text-[#F58960]">
                      {el.prodSubtitle}
                    </div>
                    {el.goodCondition && (
                      <div className="text-xs font-semibold">
                        Good condition
                      </div>
                    )}
                  </div>
                </div>
              )
            : null}
        </div>
      </div>
    </>
  );
}
