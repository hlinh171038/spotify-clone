"use client"
import {useEffect} from 'react'
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types"
import { useRouter } from "next/navigation";
import MediaItem from './MediaItem';
import LikeButton from './LikeButton';
import { toast } from 'react-hot-toast';
import useOnPLay from '@/hooks/useOnPLay';


interface LikedContentProps {
    songs:Song[];
}
const LikedContent:React.FC<LikedContentProps> =({
    songs
})=>{

    const router = useRouter();
    const {isLoading, user} = useUser()
    const onPlay = useOnPLay(songs)
   useEffect(()=>{
    // havenot login replace / 
    if(!isLoading && !user) {
        toast.error('Loggin to see your favorate soongs')
        router.replace('/')
    }
   },[isLoading, user, router]);

   if(songs.length ===0) {

    return (
        <div className='
        flex
        flex-col
        gap-y-2
        w-full
        px-6
        text-neutral-400
        '
        >
            No liked songs.
        </div>
    )
   }
    return (
        <div className="
           flex flex-col gap-y-2 w-full p-6
        ">
            {songs.map((song)=>{
                return <div
                    key={song.id}
                    className='flex items-center justify-between gap-x-4 w-full'
                    >
                        <div className='flex-1'>
                            <MediaItem 
                                onClick={(id:string)=>onPlay(id)}
                                data={song}
                            />
                        </div>
                            <LikeButton 
                                songId={song.id}
                            />
                    </div>
            })}
        </div>
    )
}

export default LikedContent