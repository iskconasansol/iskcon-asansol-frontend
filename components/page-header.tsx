'use client';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  title: string;
};

const PageHeader: React.FC<Props> = ({ className, title }) => {
  return (
    <section
      className={cn(
        'h-40 md:h-[200px] bg-teal-300 flex justify-center items-center',
        className
      )}
    >
      <h1 className="text-lg md:text-2xl lg:text-5xl font-bold">{title}</h1>
    </section>
  );
};

export default PageHeader;
