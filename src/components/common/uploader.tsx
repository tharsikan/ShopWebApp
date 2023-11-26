import { useRef } from 'react';
import { cn } from '../../helpers/utils';

export default function Uploader({ className }: { className?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className={cn(
        'flex flex-col items-center justify-center border rounded-lg border-dashed border-accentYellow-500 [&_*]:cursor-pointer cursor-pointer h-36 bg-[#FBBC0515]',
        className
      )}
    >
      <img src='/assets/vectors/common/upload.svg' alt='' />
      <p className='font-semibold text-accentYellow-500'>+ Upload Photo</p>
      <input type='file' className='hidden' ref={inputRef} />
    </div>
  );
}
