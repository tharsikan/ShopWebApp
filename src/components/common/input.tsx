import { type } from 'os';
import { HtmlHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '../../helpers/utils';

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  type?: string;
  noLabel?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, wrapperClassName, type, noLabel, ...props }, ref) => {
    const id = useId();
    return (
      <div className={cn('', wrapperClassName)}>
        {!noLabel && (
          <label htmlFor={id}>
            <span className='text-[11px] font-semibold mb-1'>
              {props['aria-label'] || props.placeholder}{' '}
            </span>
            {props['aria-required'] && (
              <span className='text-red-600 text-[11px] font-semibold'>*</span>
            )}
          </label>
        )}

        <div>
          <input
            id={id}
            ref={ref}
            type={type}
            {...props}
            className={cn(
              'pl-3.5 w-full pt-3 pb-[13px]  placeholder:text-neutral-400 text-sm font-medium bg-stone-50 rounded-md border border-slate-400 h-10',
              {},
              className
            )}
          />
        </div>
        <p className='text-[10px] py-0.5'>{props['aria-details']}</p>
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
