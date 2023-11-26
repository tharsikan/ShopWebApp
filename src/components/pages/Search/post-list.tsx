import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";

export const SearchPostList = () => {
  return (
    <Card className="p-0 max-md:bg-transparent max-md:space-y-4 max-md:border-0">
      {data.map(
        ({ author, comments, label, time, type, upvotes, username }) => (
          <div
            key={label}
            className="font-semibold items-center gap-4 max-md:bg-white  max-md:rounded-md p-2 md:p-5 sm:flex-nowrap border"
          >
            <div className="flex items-center gap-2">
              <img
                className="md:w-[25px] w-4 h-4 md:h-[25px] rounded-full"
                src="/assets/imgs/common/claps.png"
                alt="user"
              />
              <div className="flex text-[9px] md:items-center gap-1">
                <div className="md:text-sm">{username}</div>
                <div className="flex  text-accentGray-700 md:text-xs items-center gap-1 ">
                  <div className="max-md:hidden scale-50">•</div>
                  <p>Posted by {author}</p>
                  <p>{time}</p>
                </div>
              </div>
            </div>
            <h4 className="text-neutral-800 max-md:my-1 text-sm md:text-xl leading-relaxed">
              {label}{" "}
              <div
                className={cn(
                  " inline-grid px-2 pt-px md:px-3 md:py-0.5 bg-zinc-300 md:text-base rounded-full  text-[10.15px] font-medium",
                  { "bg-violet-950 text-white": type === "Poll" }
                )}
              >
                {type}
              </div>
            </h4>
            <div className="text-neutral-500 md:gap-4 gap-2 max-md:text-2xs  flex items-center font-normal leading-tight">
              <p>{upvotes} upvotes</p>
              <p>{comments} comments</p>
            </div>
          </div>
        )
      )}
    </Card>
  );
};

const data = [
  {
    label: "How do you setup a Fender?",
    username: "r/Unexpected",
    author: "u/Nathaniel-hahahaha",
    time: "6 months ago",
    upvotes: "69.3k",
    comments: "2.9k",
    type: "Topic",
  },
  {
    label: "Finding the right fender for my Gig?",
    username: "r/languagelearning",
    author: "u/[deleted]",
    time: "3 years ago",
    upvotes: "129",
    comments: "33",
    type: "Topic",
  },
  {
    label: "Which One Nord or Korg?",
    username: "r/ToolBand",
    author: "u/alternativemeta",
    time: "5 months ago",
    upvotes: "30",
    comments: "35",
    type: "Poll",
  },
  {
    label: "8-letter boy’s name that starts with an H?",
    username: "r/namenerds",
    author: "u/happyvalleyraised",
    time: "3 years ago",
    upvotes: "11",
    comments: "13",
    type: "Fun and Games",
  },
  {
    label: "How do you setup a Fender?",
    username: "r/Unexpected",
    author: "u/Nathaniel-hahahaha",
    time: "6 months ago",
    upvotes: "69.3k",
    comments: "2.9k",
    type: "Topic",
  },
  {
    label: "Which One Nord or Korg?",
    username: "r/ToolBand",
    author: "u/alternativemeta",
    time: "5 months ago",
    upvotes: "30",
    comments: "35",
    type: "Poll",
  },
  {
    label: "Finding the right fender for my Gig?",
    username: "r/languagelearning",
    author: "u/[deleted]",
    time: "3 years ago",
    upvotes: "129",
    comments: "33",
    type: "Topic",
  },
  {
    label: "8-letter boy’s name that starts with an H?",
    username: "r/namenerds",
    author: "u/happyvalleyraised",
    time: "3 years ago",
    upvotes: "11",
    comments: "13",
    type: "Fun and Games",
  },
];
