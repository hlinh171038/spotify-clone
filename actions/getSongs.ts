import {Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'

const getSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
       cookies: cookies
    })

    //fetch song
    const {data, error} = await supabase
    .from('songs')
    .select('*')
    .order('created_at', {ascending:false});

    if(error) {
        console.log(error);
    }


    // return data type any or empty array
    return (data as any) || [];
}

export default getSongs