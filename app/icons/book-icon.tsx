import { cn } from "@/lib/utils";
type Props= {
    className?: string;
}
const BookIcon :React.FC<Props>= ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className={cn('w-6 h-6', className)}
    >
      <path
        stroke="#1C274D"
        strokeWidth="1.5"
        d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8z"
      ></path>
      <path
        stroke="#1C274D"
        strokeWidth="1.5"
        d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 004 18.224"
      ></path>
      <path
        stroke="#1C274D"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 7h8m-8 3.5h5"
      ></path>
    </svg>
  );
};


export default BookIcon;