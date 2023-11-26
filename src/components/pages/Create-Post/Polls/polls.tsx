import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Input } from '../../../common/input';

export default function Polls() {
  const [polls, setPolls] = useState(2);
  return (
    <>
      <section className="grid grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 space-y-2">
          {Array.from(Array(polls)).map((_) => (
            <PollIndividual />
          ))}
          <div className="flex justify-between mt-1">
            <div>
              {polls > 2 && <button
                onClick={() => setPolls((p) => --p)}
                className="font-medium tracking-tight text-red-600 mr-2"
              >
                Remove Option
              </button>}
              {polls < 4 && <button
                onClick={() => setPolls((p) => ++p)}
                className="font-medium tracking-tight text-blue-700 "
              >
                Add Option
              </button>}
            </div>
            <p className="text-sm font-medium text-neutral-400">
              Voting length: <span className="text-black ">3 days</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Icon
            icon="material-symbols:info-outline"
            className="w-20 text-2xl"
          />
          <div className="space-y-3">
            <p className="text-sm font-semibold ">Tips on Better Polls</p>
            <p className="text-xs font-medium ">
              Add 2-4 Options for voting. For best results keep Options simple and direct. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
const PollIndividual = () => {
  return (
    <div className='flex items-center gap-1.5'>
      <Icon
        icon='icon-park-outline:drag'
        className='text-[#9B9B9B] cursor-pointer'
        
      />
      <Input noLabel placeholder='Option' wrapperClassName='w-full' />
    </div>
  );
};
