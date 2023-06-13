//add some attribute here
// create special type of component here , we will pass ref , gonna create a smarter interface here

import { forwardRef } from "react"
import {twMerge} from 'tailwind-merge'

// create availabel interfece inherirt
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
// forward to ref and forwarding all attribute nomal HTML button
const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    // extract
    className,
    children,
    disabled,
    type="button",
    ...props
},ref)=>{
    return <button
                type={type}
                className={twMerge(`w-full
                                     rounded-full
                                     bg-green-500
                                     border-transparent
                                     px-3
                                     py-3
                                     disabled:cursor-not-allowed
                                     disabled:opacity-50
                                     text-bold
                                     hover:opacity-75
                                     transition
                                     `,className)}
                disabled={disabled}
                ref={ref}
                {...props}
                >
                    {children}
                </button>
})

Button.displayName = "Button"
export default Button