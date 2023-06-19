"use client"
import { TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModal from '@/hooks/useUploadModal'
import { Song } from '@/types'
import MediaItem from './MediaItem'
import useOnPLay from '@/hooks/useOnPLay'

interface LibraryProps {
    
    songs:Song[]
}

const Library: React.FC<LibraryProps> =({
    songs
}) =>{
    const authModal = useAuthModal()
    const uploadModal = useUploadModal()
    const {user} =useUser()
    const onPlay = useOnPLay(songs)
     //handle upload later
    const onClick =() =>{
       // check login or not
       if(!user) {
        return authModal.onOpen()
       }
       uploadModal.onOpen()
    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2 ">
                    
                        <TbPlaylist  size={26} className="text-neutral-400"/>
                        <p className='text-neutral-400 font-medium text-md'>
                            Your Library
                        </p>
                </div>
               <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 curcor-pointer hover:text-white transition'/>
            </div>
            <div className='flex flex-col gay-y-2 mt-4 px-3'>
               {songs.map((item)=>{
                return <MediaItem
                        onClick={(id:string)=>onPlay(id)}
                        key={item.id}
                        data={item}
                />
               })}
            </div>
           
        </div>
    )
}

export default Library;