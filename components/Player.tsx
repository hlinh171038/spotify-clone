"use client"

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent";

const Player =()=>{
    // player is undefined (default value)
    const player = usePlayer();
    const {song} = useGetSongById(player.activeId)

    // find way to load file mp3 to app (in supabase ) -->create hooks
    const songUrl = useLoadSongUrl(song!)


    // check if exist show Player.tsx

    if(!song || !songUrl || !player.activeId){
        return null
    }   


    // press play song add to ids[] and play mp3 --> need hooks
    return <div
        className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4
        "
    >
        <PlayerContent
            key={songUrl}
            song={song}
            songUrl={songUrl}
        />
    </div>
}

export default Player