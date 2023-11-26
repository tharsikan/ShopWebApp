import { HtmlHTMLAttributes, forwardRef } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { cn } from '../helpers/utils';
import { Icon } from '@iconify/react';

interface TextFieldProps extends HtmlHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'overflow-hidden mb-5 bg-stone-50 rounded-md border border-slate-400/20 ',
          {},
          className
        )}
      >
        <div className='flex items-center p-3 border-b border-slate-400/20 gap-7'>
          <Toggle.Root className='aria-pressed:font-bold aria-pressed:text-neutral-700 text-neutral-400'>
            B
          </Toggle.Root>
          <Toggle.Root className='italic aria-pressed:font-semibold aria-pressed:text-neutral-700 text-neutral-400'>
            I
          </Toggle.Root>
          <Toggle.Root className='italic aria-pressed:text-neutral-700 text-neutral-400'>
            <Icon icon={'fa6-solid:list'} />
          </Toggle.Root>
        </div>
        <textarea
          placeholder='Text (optional)'
          rows={5}
          className='w-full p-2.5 -mb-2 outline-none'
        />
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export { TextField };
