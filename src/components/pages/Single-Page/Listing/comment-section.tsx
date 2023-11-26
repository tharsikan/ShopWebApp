import { HTMLAttributes } from 'react';
import { cn } from '../../../../helpers/utils';
import NotifyButton from '../../../common/Notification/NotifyButton';
import Comment from './comment';
import CommentBox from './comment-box';

export default function CommentSection({
  className,
  ...props
}: { className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'mt-4 sm:bg-white sm:p-5 sm:rounded-xl sm:border-slate-400/40',
        {},
        className
      )}
      {...props}
    >
      <NotifyButton/>
      <h4 className='font-semibold'>Comments</h4>
      <CommentBox />
      <div className='max-sm:divide-y'>
        {new Array(5).fill('').map((el) => (
          <Comment key={el} />
        ))}
      </div>
    </section>
  );
}
