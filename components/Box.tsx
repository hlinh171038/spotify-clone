
import { twMerge } from "tailwind-merge";

interface BoxProps {
    children:React.ReactNode;
    className?: string
}

const Box:React.FC<BoxProps> =({
    children,
    // recive className like props
    className
}) =>{
    
    return <div className={twMerge(`bg-meutral-900 bg-slate-800 rounded-lg h-fit w-full`,
                            className)}>
        {children}
    </div>
}
export default Box