import { useSelector } from "react-redux";
import { selectLogin } from "../../../redux/features/auth/authLoginSlice";
import Card from "../../common/Card/Card";

export default function User() {
  const isLogin = useSelector(selectLogin);
  if (!isLogin) return;
  return (
    <Card className="relative !mt-0 mb-3">
      <img
        src="https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover w-full h-16 md:h-20 rounded-lg"
      />

      <div className="flex items-baseline justify-around px-3 lg:-mt-20 -mt-8 max-lg:items-center  lg:px-4">
        <div className="flex flex-col items-center lg:-translate-x-4">
          <div className="p-2 bg-white rounded-xl w-20 lg:w-24 aspect-square mt-2">
            <img
              src="/assets/imgs/home/pete.png"
              alt=""
              className="object-cover w-full  h-full rounded-lg ring-4 ring-zinc-300"
            />
          </div>
          <p className="font-semibold text-xs">PBass03</p>
          <div className="flex items-center gap-1">
            <img src="/assets/vectors/common/flower.svg" alt="" />
            <div className="text-[11px] font-medium ">1,65,201</div>
          </div>
        </div>
        {data.map((_) => (
          <div key={_.label} className="w-20">
            <p className="text-center  text-[15px] font-semibold">{_.value}</p>
            <p className="font-medium text-[12px] text-center text-neutral-400">
              {_.label}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

const data = [
  {
    label: "# of Gear",
    value: 68,
  },
  {
    label: "Reviews",
    value: "2.1K",
  },
  {
    label: "Sales",
    value: "19.2K",
  },
];
