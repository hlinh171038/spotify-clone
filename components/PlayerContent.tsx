"use client"

import { Song } from "@/types"
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill} from 'react-icons/bs'
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import {HiSpeakerXMark, HiSpeakerWave} from 'react-icons/hi2'
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useState,useEffect } from "react";
import useSound from "use-sound";


interface PlayerContentProps {
    song: Song;
    songUrl:string;
}
const PlayerContent:React.FC<PlayerContentProps>=({
    song,
    songUrl
}) =>{
    const player = usePlayer();
    const [volume,setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false)


    const Icon = isPlaying ? BsPauseFill : BsPlayFill;

    // mute volume
    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave

    const onPlayNext = () =>{
        // check ids have any song
        if(player.ids.length === 0) {
            return ;
        }

        // take next songs
        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const nextSong = player.ids[currentIndex +1];

        // check if last song of this playlist
        if(!nextSong) {
            // return first song of playlist
            return player.setId(player.ids[0])
        }

        //play next song
        player.setId(nextSong);
    }

    const onPlayPrevious = () =>{
        // check ids have any song
        if(player.ids.length === 0) {
            return ;
        }

        // take pre songs
        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const previousSong = player.ids[currentIndex -1];

        // check if last song of this playlist
        if(!previousSong) {
            // return last song of playlist
            return player.setId(player.ids[player.ids.length -1])
        }

        //play pre song
        player.setId(previousSong);
    }
// now we play sound for song --> 
    const [play, {pause, sound}] = useSound(
        songUrl,
        {
            volume: volume,
            onplay: () =>setIsPlaying(true),
            onend: () => {
                setIsPlaying(false);
                onPlayNext();
            },
            onpause: () => setIsPlaying(false),
            format: ['mp3']
        }
    )

    // useEffect to auto play song when this component load
    useEffect(() =>{
        sound?.play();

        return () =>{
            sound?.unload();
        }
    },[sound]);

    const handlePlay = () =>{
        if(!isPlaying) {
            play();

        }else {
            pause();
        }
    }

    const toogleMute = ()=>{
        if(volume ===0){
            setVolume(1)
        }else {
            setVolume(0);
        }
    }
    return (
        <div
            className="grid grid-cols-2 md:grid-cols-3 h-full"
        >
            <div className="flex w-full justify-start">
                <div className="flex items-center gap-x-4">
                    <MediaItem data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>

            <div
                className="flex col-auto w-full justify-end items-center"
            >
                <div
                    onClick={handlePlay}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
                        <Icon size={30 } className="text-black "/>
                </div>
            </div>

            <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
                <AiFillStepBackward 
                    onClick={onPlayPrevious}
                    size={30}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hover:text-white
                        transition
                    "
                />
                <div
                    onClick={handlePlay}
                    className="
                        flex
                        items-center
                        justify-center
                        h-10
                        w-10
                        rounded-full
                        bg-white
                        p-1
                        cursor-pointer
                    "
                >
                    <Icon size={30} className="text-black" />
                    
                </div>
                <AiFillStepForward
                        onClick={onPlayNext}
                        size={30}
                        className="
                            text-neutral-400
                            cursor-pointer
                            hover:text-white
                            transition
                        "
                    />
                <div className=" hidden md:flex w-full justify-end pr-2">
                    <div className="flex items-center gap-x-2 w-[120px] ">
                        <VolumeIcon 
                            className="text-neutral-400"
                            onClick={toogleMute}
                            size={34}
                            />
                        <Slider 
                            value={volume}
                            onChange={(value) =>setVolume(value)}
                        />
                    </div>
                </div>
            </div>


            
        </div>
    )
}

export default PlayerContent