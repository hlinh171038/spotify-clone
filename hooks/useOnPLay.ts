import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";


const useOnPLay = (songs:Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const {user} = useUser();

    const onPlay = (id:string) => {
        console.log('try')
        if(!user) {
            return authModal.onOpen();
        }

        player.setId(id);
        // create playlist all the song 
        // ex: when u click songs in likeed song is play playlist of liked songs 
        // when u click playlist of page song is play playlist of page song
        player.setIds(songs.map((song)=> song.id));
    };

    return onPlay;
}

export default useOnPLay