import React from 'react';
import { cn } from '../../helpers/utils';

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('gap-6 mt-4 lg:flex', className)}>
      <div className='w-full '>{children}</div>
    </div>
  );
}
