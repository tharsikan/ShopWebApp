import { Icon } from '@iconify/react';
import { HTMLAttributes, useState } from 'react';
import { cn } from '../../../../helpers/utils';

interface VoteProps extends HTMLAttributes<HTMLDivElement> {}

export default function Vote({ className, ...props }: VoteProps) {
  const [count, setCount] = useState(Math.round(Math.random() * 10));
  return (
    <div className="max-sm:hidden min-w-[50px] my-1 ml-1">
      <div className="flex flex-col items-center p-1 font-semibold border rounded h-fit w-9 text-accentYellow-500 bg-white/80 border-accentYellow-500">
        <button onClick={() => setCount((p) => ++p)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount((p) => --p)}>-</button>
      </div>
    </div>
  );
}
