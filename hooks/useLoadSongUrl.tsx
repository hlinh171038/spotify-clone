import {Song} from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const useLoadSongUrl = (song:Song) =>{

    // why useSupabaseClient intead of useSessionSontext because u just take url not show on the screen
    const supabaseClient = useSupabaseClient()

    if(!song){
        return  '';

    }
    // just take url song
    const {data: songData} = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);

    return songData.publicUrl;
};

export default useLoadSongUrl;
