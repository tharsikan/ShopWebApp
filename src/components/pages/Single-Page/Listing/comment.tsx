import { Icon } from '@iconify/react';
import { HTMLAttributes, useState } from 'react';
import CommentBox from './comment-box';
import { cn } from '../../../../helpers/utils';

interface CommentProps extends HTMLAttributes<HTMLDivElement> {}

export default function Comment({ className, ...props }: CommentProps) {
  const [count, setCount] = useState(Math.round(Math.random() * 10));
  const [reply, setReply] = useState(false);
  return (
    <div
      className={cn(
        "[&_aside]:flex py-3 [&_aside]:justify-center flex [&_aside]:min-w-[50px] space-y-2",
        {}
      )}
      {...props}
    >
      <div className="max-sm:hidden min-w-[50px]">
        <div className="flex flex-col items-center p-1 font-semibold border rounded h-fit w-9 text-accentYellow-500 bg-white/80 border-accentYellow-500">
          <button onClick={() => setCount((p) => ++p)}>+</button>
          <span>{count}</span>
          <button onClick={() => setCount((p) => --p)}>-</button>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-">
          <aside>
            <img
              src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-8 rounded-full max-sm:w-14 aspect-square"
            />
          </aside>
          <p className="text-sm font-semibold grow">
            ramsesmiron{" "}
            <div className="flex justify-start items-center gap-[3px]">
              <img src="/assets/vectors/home/flower.svg" alt="flower" />
              <div className="text-[9px] font-medium">({"8,988"})</div>
            </div>
          </p>

          <p
            onClick={() => setReply(true)}
            role="button"
            className="flex items-center gap-2 text-xs font-medium text-blue-700"
          >
            <Icon icon="material-symbols:reply" />
            Reply
          </p>
        </div>

        <div className="flex">
          <aside className="sm:!hidden mt-2">
            <div className="flex flex-col items-center p-1 font-semibold border rounded h-fit w-9 text-accentYellow-500 bg-white/80 border-accentYellow-500">
              <button onClick={() => setCount((p) => ++p)}>+</button>
              <span>{count}</span>
              <button onClick={() => setCount((p) => --p)}>-</button>
            </div>
          </aside>
          <div className="pl-3 text-[11.12px]">
            <span className="text-blue-700">@maxblagun </span>
            Awesome! I am a big fan of uke bass! I have never owned one, but
            they really have great low end! That’s on my wishlist for sure!
            {reply && (
              <CommentBox reply closeInputBox={() => setReply(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
