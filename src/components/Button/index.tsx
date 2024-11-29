import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm  p-2 px-3 text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500  hover:bg-blue-800",
        red: "bg-red-500 hover:bg-red-800",
        green: "bg-green-500 hover:bg-green-800",
        yellow: "bg-yellow-500 hover:bg-yellow-800",
        purple: "bg-purple-500 hover:bg-purple-800",
        light: "bg-gray-700 hover:bg-gray-800 border",
        dark: "bg-gray-700 hover",
        alternative: "bg-gray-600 border text-opacity-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, size }), className)}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
