import { HTMLAttributes } from 'react';
import { cn } from '../../../../helpers/utils';
import { Icon } from '@iconify/react';

interface AuthorProps extends HTMLAttributes<HTMLDivElement> {
  isPromoted?: boolean;
}

export default function Author({ className, ...props }: AuthorProps) {
  return (
    <section
      className={cn(
        'flex items-center gap-1 max-sm:border-b border-zinc-100',
        className,
        {}
      )}
      {...props}
    >
      <img
        src='/assets/imgs/common/user2.png'
        alt=''
        height={26}
        width={26}
        className='rounded-full'
      />
      <div className='flex gap-1 max-sm:-space-y-1 sm:items-center grow max-sm:flex-col'>
        <div className='flex items-center gap-2.5'>
          <p className='text-sm font-semibold leading-tight'>r/buybass</p>
        </div>
        <div className='flex items-center gap-1 text-xs font-medium text-neutral-400'>
          <Icon icon='lucide:dot' className='max-sm:hidden' />
          <p>{props.isPromoted ? 'Promoted' : 'Posted by u/BgRobFox12'}</p>
          {props.isPromoted ? null : (
            <>
              <Icon icon='lucide:dot' />
              <p>7 hours ago</p>
            </>
          )}
        </div>
      </div>
      {props.isPromoted ? null : (
        <Icon
          role='button'
          icon={'iconamoon:notification'}
          className='text-lg text-neutral-400 '
        />
      )}
    </section>
  );
}
