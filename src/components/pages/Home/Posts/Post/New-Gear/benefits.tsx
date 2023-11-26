export function Benefits({ el, idx }: { el: any; idx: number }) {
  return (
    <div className="mt-[18px] flex items-center justify-center gap-[5px]">
      {data.map((_) => (
        <div
          key={_.label}

          className="w-full py-3 px-1.5 md:px-[18px] text-center bg-gray-200 border  border-solid border-accentYellow-300 rounded-lg text-black text-[10px] md:text-[12px] tracking-wider md:font-semibold"

        >
          {_.label}
          <div className="flex justify-center items-center max-[380px]:gap-px gap-0.5 mt-[2px]">
            {Array.from(Array(5)).map((el2, idx2) => {
              return (
                <img
                  className="aspect-square max-[380px]:h-2 h-2.5 md:h-3"
                  key={"home-post-usability-star" + idx + "-" + idx2}
                  src="/assets/vectors/common/star.svg"
                  alt="star"
                  title="star"
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  { label: "Usability" },
  { label: "Expectation" },
  { label: "Performance" },
  { label: "Satisfaction" },
];
