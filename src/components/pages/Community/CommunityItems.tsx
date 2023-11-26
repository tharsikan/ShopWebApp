import { useNavigate } from "react-router-dom";

export default function CommunityItems() {
  return (
    <section className="grid grid-cols-1 gap-5 p-4 bg-white border rounded-lg border-slate-200 lg:grid-cols-2">
      {Array.from(Array(8)).map((_, idx) => (
        <Card {..._} idx={idx + 1} />
      ))}
    </section>
  );
}

const Card = ({ idx }: { idx: number }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/browse/single/page")}
      className="cursor-pointer border-orange-300 border-b border-r-2 hover:border-t-4 hover:border-orange-300 rounded-md"
    >
      <div className="flex items-center gap-2.5 text-black ">
        <p className="w-5 text-sm font-medium">0{idx}</p>
        <img
          alt=""
          className="w-[54px] h-[54px] rounded-[108.49px] shadow"
          src="/assets/imgs/home/prod.png"
        />
        <div>
          <p className="text-base font-semibold ">r/news</p>
          <p className="w-[229px]  text-sm font-medium">
            Learning and Education
          </p>
          <p className="text-sm font-medium text-neutral-400 ">41M members</p>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="basis-[5.5rem] " />
        <div className="flex justify-between grow"></div>
      </div>
    </div>
  );
};
