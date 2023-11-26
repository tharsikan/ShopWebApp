import Card from '../../../common/Card';
import Author from './author';
import Vote from './vote';

export default function PromotedPost() {
  return (
    <Card className="flex gap-2 ">
      <Vote />
      <div className="grow p-3 " >
        <Author isPromoted />
        <div className="flex gap-3.5 mt-2">
          <img
            className="w-24"
            src="/assets/imgs/common/video-play.png"
            alt=""
          />
          <div className="text-xs font-medium grow">
            <p>
              Just say yes! Switch to Frontier and get the fastest upload speeds
              in America.
            </p>
            <div className="flex items-center justify-between">
              <p className=" text-neutral-400">Posted by u/BgRobFox12</p>
              <button className="max-sm:hidden px-5 h-8 bg-zinc-100 rounded-[10px] text-blue-700 text-[10px] font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>{" "}
        <button className="px-5 h-8 sm:hidden ml-auto block mt-2.5 bg-zinc-100 rounded-[10px] text-blue-700 text-[10px] font-semibold">
          Learn More
        </button>
      </div>
    </Card>
  );
}
