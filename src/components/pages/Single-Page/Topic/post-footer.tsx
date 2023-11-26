import { HTMLAttributes } from 'react';
import { cn } from '../../../../helpers/utils';
import { Icon } from '@iconify/react';

interface PostFooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function PostFooter({ className, ...props }: PostFooterProps) {
  return (
    <section
      className={cn('flex items-center justify-between mt-2.5', className, {})}
      {...props}
    >
      <div className='flex items-center gap-5'>
        {data.map((icon) => (
          <div
            key={icon.label}
            className='text-xs flex items-center gap-1.5 font-medium text-neutral-400'
          >
            <Icon icon={icon.icon} className='text-xl' />
            <p className='max-sm:hidden'>{icon.label}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-2.5'>
        <p className='text-xs font-medium text-neutral-400'>5 people here</p>
        <img
          src='/assets/imgs/common/user.png'
          alt=''
          height={22}
          width={22}
          className='rounded-full'
        />
      </div>
    </section>
  );
}

const data = [
  {
    icon: 'ri:chat-4-line',
    label: '21 comments',
  },
  {
    icon: 'uil:award',
    label: 'Award',
  },
  {
    icon: 'carbon:share',
    label: 'Share',
  },
  {
    icon: 'material-symbols:bookmark-outline',
    label: 'Save',
  },
];
