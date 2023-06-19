9.create player function
 1.create hook usePLayer.ts 
    - use zustand to create method and set 
 2.create component Player.tsx to show player
    -useGetSongById -->return {isLoading,song  to check }
 3.create useLoadSongUrl to load url
 4.create useOnPLay hoosk to open Player.tsx
 5.in PageContent --> onClick--> use useOnPlay to recive id and open Player.tsx
 6.style for Player.tsx
 7.create PlayerContent 
    -function next song 
    -function pre song
    -use npm i use-sound to create sound for song
    -useEffect to auto play song when this component load
    -toogleMute for sound icon
    - create slider to control the sound ( @radix-ui/react-silder)

8. use onPLay = useOnPLay and assign id for (libraryContent, pageContent, LikedContent)


                    

