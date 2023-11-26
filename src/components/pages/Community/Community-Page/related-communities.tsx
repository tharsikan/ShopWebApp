
import { Link} from "react-router-dom";

export default function RelatedCommunities({
  label = "Related Communuities",
}: {
  label?: string;
}) {
  return (
    <section>
      <p className="text-lg font-semibold pb-1">{label}</p>
      <div className="">
        {Array.from(Array(3)).map((_) => {
          return (
            <Link to="/browse/single/page">
              <div
                key={_}
                className="flex my-1 items-center gap-2 border-b-2  p-1 rounded-md border-gray-200 cursor-pointer hover:border-t-1 hover:border-orange-300"
              >
                <img
                  src="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-10 h-10 rounded-full ring-1 ring-white"
                />
                <div className="grow">
                  <p className="text-xs font-semibold hover:text-orange-300">
                    NordGang
                  </p>
                  <p className="text-yellow-500 text-[10px]">
                    Bass Guitar
                  </p>
                </div>
                <p className="text-neutral-800 text-[10px] font-medium">
                  2.3k Members
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
