import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CardFooter({ el, idx }: { el: any; idx: number }) {
  const [value, setValue] = useState(el.likes);
   const [likePressed, setLikePressed] = useState(false);
  const [dislikePressed, setDislikePressed] = useState(false);
  
   const onLikeTap = () => {
     setLikePressed(!likePressed);
     setDislikePressed(false);
     setValue(value + 1);
   };

   const onDisLikeTap = () => {
     setDislikePressed(!dislikePressed);
     setLikePressed(false);
     setValue(value - 1);
   };
  return (
    <div className="flex justify-between items-center mt-[18px]">
      <div className="flex text-zinc-600 items-center sm:gap-[50px] gap-4">
        <div className="flex gap-1 md:gap-1.5 items-center cursor-pointer">
          {likePressed ? (
            <Icon
              icon="icon-park-twotone:up-two"
              className="text-sm sm:text-2xl text-orange-500"
            />
          ) : (
            <Icon
              icon="icon-park-outline:up-two"
              className="text-sm sm:text-2xl hover:text-orange-500"
              onClick={onLikeTap}
            />
          )}

          <div className=" md:text-xs text-[9px] md:font-semibold">{value}</div>
          {dislikePressed ? (
            <Icon
              icon="icon-park-twotone:down-two"
              className="text-sm sm:text-2xl text-orange-500"
            />
          ) : (
            <Icon
              icon="icon-park-outline:down-two"
              className="text-sm sm:text-2xl hover:text-orange-500"
              onClick={onDisLikeTap}
            />
          )}
        </div>
        <Link to={el.link}>
          <div className="flex gap-1 md:gap-1.5 items-center cursor-pointer">
            <Icon
              icon="fluent:comment-16-regular"
              className="text-sm sm:text-2xl"
            />
            <div className="md:text-xs text-[9px] md:font-semibold">
              {" "}
              {el.comments}
            </div>
          </div>
        </Link>
        <div className="flex gap-1 md:gap-1.5 items-center cursor-pointer">
          <Icon icon="quill:share" className="text-sm sm:text-2xl" />
          <div className="md:text-xs text-[9px] md:font-semibold"> Share</div>
        </div>
      </div>
      <div className="flex gap-1 md:gap-[14px]">
        {el.tags.map((el2: any, idx2: any) => {
          return (
            <div
              key={"home-post-tags-star" + idx + "-" + idx2}
              className="md:px-2 whitespace-nowrap  px-1.5 py-0.5 md:py-1 text-[8px] sm:text-sm font-medium bg-accentGray-400 rounded-3xl"
            >
              {el2}
            </div>
          );
        })}
      </div>
    </div>
  );
}
