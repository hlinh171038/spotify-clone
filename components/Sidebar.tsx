'use client'
import {usePathname} from 'next/navigation'
import { useMemo } from 'react';
interface SidebarPropss {
    children:React.ReactNode;
}

const Sidebar:React.FC<SidebarPropss>= ({children}) =>{

    const pathname = usePathname();

    // create array of posible route
    const routes = useMemo(()=>[
        {
            label: 'Home',
            active: pathname !== '/search'
        }
    ],[])

    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar;