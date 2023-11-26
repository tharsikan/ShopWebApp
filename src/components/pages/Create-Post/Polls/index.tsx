import { Icon } from '@iconify/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { TextField } from '../../../text-field';
import GreyBtn from '../../../buttons/GreyBtn';
import YellowBtn from '../../../buttons/YellowBtn';
import Polls from './polls';

const Poll = () => {
  // ADD Create Topic Post Page Sequences Here (Figma: 7. Create Thread: TOPIC)

  return (
    <>
      <div className='flex text-sm font-medium border rounded-md bg-stone-50 px-3.5  items-center border-slate-400 '>
        <input
          placeholder='Title '
          className={
            'w-full pt-3 pb-[13px] outline-none placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md  h-10'
          }
        />
        <div className='ml-4 text-sm font-semibold text-right text-neutral-400'>
          0/300
        </div>
      </div>

      <TextField className='mt-5' />
      <Polls />
      {/* <div className='flex gap-3'>
        {tags.map((_) => (
          <GreyBtn label={'+ ' + _.label} />
        ))}
      </div> */}
      <div className='flex gap-4 my-8'>
        <GreyBtn label={'Cancel'} />
        <YellowBtn label={'Post'} className='px-6' />
      </div>
    </>
  );
};

export default Poll;

const data = [
  {
    label: 'Text',
    icon: 'jam:text',
  },
  {
    label: 'Content',
    icon: 'dashicons:text',
  },
  {
    label: 'Link',
    icon: 'ph:link-bold',
  },
];

const tags = [
  {
    label: 'OC',
  },
  {
    label: 'Spoiler',
  },
  {
    label: 'OC',
  },
  {
    label: 'Spoiler',
  },
];
