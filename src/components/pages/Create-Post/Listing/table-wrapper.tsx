import { Icon } from '@iconify/react';
import { cn } from '../../../../helpers/utils';

export default function TableWrapper({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section className={cn('border border-slate-400/20 my-1.5')}>
      <div className='p-2.5 border-b bg-zinc-100 flex justify-between items-center border-slate-400/20'>
        <p className='text-sm font-semibold'>{label}</p>
        <Icon icon={'bx:edit'} className='text-lg' role='button' />
      </div>
      <div className={cn('p-2.5', className)}>{children}</div>
    </section>
  );
}
