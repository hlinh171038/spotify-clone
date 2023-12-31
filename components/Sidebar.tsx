'use client'
import {usePathname} from 'next/navigation'
import { useMemo } from 'react';
import {HiHome } from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi' 
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './LIbrary';
import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';
import { twMerge } from 'tailwind-merge';

interface SidebarPropss {
    children:React.ReactNode;
    songs:Song[]
}

const Sidebar:React.FC<SidebarPropss>= ({children,songs}) =>{

    const pathname = usePathname();
    const  player = usePlayer();


    // create array of posible route
    const routes = useMemo(()=>[
        {
            label: 'Home',
            icon:  HiHome,
            //active every pathname not /search
            active: pathname !== '/search',
            href:'/'
        },
        {
            label: 'Search',
            icon: BiSearch,
            active: pathname === 'search',
            href:'/search'
        }
    ],[pathname])
    //'flex h-full bg-black min-h-full h-screen gap-2 p-2'
    return (
            <div className={twMerge(`flex h-full bg-black min-h-full h-screen gap-2 p-2`)}>
                <div className='hidden 
                                md:flex
                                flex-col gap-y-2 bg-black h-full w-[300px] P-2'
                                
                >
                    <Box>
                        <div className="flex flex-col gap-y-4 gap-5 px-5 py-4">
                            {routes.map((item)=>(
                                <SidebarItem key={item.label} {...item}/>
                            ))}
                        </div>
                    </Box>
                    <Box className='overflow-y-auto h-full'>
                        <Library songs={songs}/>
                    </Box>
                </div>
                <div className='h-full flex-1 overflow-y-auto'>
                    {children}
                </div>
            </div>
    )
}

export default Sidebar;