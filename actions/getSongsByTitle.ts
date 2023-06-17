import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import getSongs from "./getSongs";


// function recive the title(string)
const getSongsByTitle =async(title:string):Promise<Song[]> =>{

    // create server
    const supabase = createServerComponentClient({
        cookies:cookies
    });

    // if not exist title return all songs
    if(!title){
        const allSongs = await getSongs();
        return allSongs
    }

    //if have title

    const {data,error} =await supabase
        .from('songs')
        .select('*')
        .ilike('title', `%${title}%`)
        .order('created_at', {ascending: false})
   
        if(error) {
            console.log(error);
        }
    
    
        // return data type any or empty array
        return (data as any) || [];
}

export default getSongsByTitle