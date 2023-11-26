import Card from "../../../common/Card";

const pros = [
  {
    likes: 329,
    dislikes: 12,
    label: "Simplicity at its finest",
  },
  {
    likes: 101,
    dislikes: 18,
    label: "Iconic Passive Sound",
  },
  {
    likes: 122,
    dislikes: 29,
    label: "Verstile Tone",
  },
  {
    likes: 233,
    dislikes: 26,
    label: "Most recorded and recognized Bass",
  },
  {
    likes: 129,
    dislikes: 32,
    label: "Highly Reccommened for recording",
  },
];

const cons = [
  {
    likes: 329,
    dislikes: 26,
    label: "Non Modern Tone",
  },
  {
    likes: 329,
    dislikes: 2,
    label: "Doesn't work for all genre's",
  },
  {
    likes: 329,
    dislikes: 2,
    label: "Passive Bass",
  },
  {
    likes: 329,
    dislikes: 2,
    label: "Only 2 Knobs",
  },
  {
    likes: 329,
    dislikes: 2,
    label: "Few Tonal Variations",
  },

];

const ProsCons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 max-w-[850px] mx-auto mt-6">
      <Card className="pt-5 pb-[10px] px-[10px]" noMt>
        <div className="flex justify-center items-center gap-4 mb-5">
          <img src="/assets/vectors/single-catalog/tick.svg" alt="tick" />
          <div className="text-accentGreen-700 text-2xl">Pros</div>
        </div>

        {pros.map((el, idx) => {
          return (
            <div key={"pro-" + idx} className="flex items-center gap-2 mb-2">
              <div className="bg-accentGray-400 rounded-[2px] py-1 p-2 flex items-center gap-1 text-xs flex-shrink-0">
                <img
                  src="/assets/vectors/single-catalog/thumb-up.svg"
                  alt="thumb"
                />
                <div className="">{el.likes}</div>
              </div>
              <div className="bg-accentGray-400 rounded-[2px] py-1 p-2 flex items-center gap-1 text-xs flex-shrink-0">
                <img
                  src="/assets/vectors/single-catalog/thumb-down.svg"
                  alt="thumb"
                />
                <div className="">{el.dislikes}</div>
              </div>
              <div className="text-xs font-medium">{el.label}</div>
            </div>
          );
        })}
      </Card>

      <Card className="pt-5 pb-[10px] px-[10px]" noMt>
        <div className="flex justify-center items-center gap-4 mb-5">
          <img src="/assets/vectors/single-catalog/cross.svg" alt="cross" />
          <div className="text-red-600 text-2xl">Cons</div>
        </div>

        {cons.map((el, idx) => {
          return (
            <div key={"con-" + idx} className="flex items-center gap-2 mb-2">
              <div className="bg-accentGray-400 rounded-[2px] py-1 p-2 flex items-center gap-1 text-xs flex-shrink-0">
                <img
                  src="/assets/vectors/single-catalog/thumb-up.svg"
                  alt="thumb"
                />
                <div className="">{el.likes}</div>
              </div>
              <div className="bg-accentGray-400 rounded-[2px] py-1 p-2 flex items-center gap-1 text-xs flex-shrink-0">
                <img
                  src="/assets/vectors/single-catalog/thumb-down.svg"
                  alt="thumb"
                />
                <div className="">{el.dislikes}</div>
              </div>
              <div className="text-xs font-medium">{el.label}</div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default ProsCons;
