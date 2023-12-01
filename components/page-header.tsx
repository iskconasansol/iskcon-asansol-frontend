'use client';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

const PageHeader: React.FC<Props> = ({ className, title, children }) => {
  return (
    <section
      className={cn(
        'h-40 md:h-[200px] bg-teal-300 flex justify-center items-center',
        className
      )}
    >
      {title && (
        <h1 className="text-lg md:text-2xl lg:text-5xl font-bold">{title}</h1>
      )}

      {children}
    </section>
  );
};

export default PageHeader;
