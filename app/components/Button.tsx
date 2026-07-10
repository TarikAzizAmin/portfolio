import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   size?: string;
   className?: string;
}

const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

const sizeClasses: Record<string, string> = {
    "sm": "px-4 py-2 text-sm",
    "default": "px-6 py-3 text-base",
    "lg": "px-8 py-4 text-lg",
};



const Button = ({ size="default", className="", children, ...props}: ButtonProps) => {
  return (
    <div>
        <button className={`{...props} ${className} ${baseClasses} ${sizeClasses[size]} `} >
            <span className='relative flex flex-row items-center justify-center gap-2'>
                {children}
            </span>
        </button>
    </div>
  )
}

export default Button;