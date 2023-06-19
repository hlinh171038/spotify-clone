'use client'
import { Song } from "@/types"
import SongItem from "./SongItem"
import useOnPLay from "@/hooks/useOnPLay"


interface PageContentProps {
    songs:Song[]
}

const PageContent:React.FC<PageContentProps> =({
    songs
})=>{
    const onPlay = useOnPLay(songs)

    if(songs.length ===0){
        return (
        <div className="mt-4 text-neutral-400">
            No songs available.
         </div>
      )
    }
     return <div
        className="
            grid
            gird-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-md-4
            xl:grid-md-5
            2xl:grid-md-8
            gap-4
            mt-4
        "
      >
        {songs.map((item)=>{
            return <SongItem
            key={item.id}
            onClick={(id:string) =>onPlay(id)}
            data={item}
            />
        })}
       
     </div>
}
export default PageContent