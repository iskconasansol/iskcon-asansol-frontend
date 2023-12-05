import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const PlusIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-6 w-6', className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
