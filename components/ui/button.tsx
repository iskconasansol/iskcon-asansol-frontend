import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { RotateCw } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-purple-900 text-purple-50 hover:bg-purple-900/90 dark:bg-purple-50 dark:text-purple-900 dark:hover:bg-purple-50/90',
        destructive:
          'bg-red-500 text-purple-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-purple-50 dark:hover:bg-red-900/90',
        outline:
          'border border-purple-200 bg-white hover:bg-purple-100 hover:text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:hover:bg-purple-800 dark:hover:text-purple-50',
        secondary:
          'bg-purple-100 text-purple-900 hover:bg-purple-100/80 dark:bg-purple-800 dark:text-purple-50 dark:hover:bg-purple-800/80',
        ghost:
          'hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-50',
        link: 'text-purple-900 underline-offset-4 hover:underline dark:text-purple-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        disabled={props.disabled || loading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />}

        {props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
