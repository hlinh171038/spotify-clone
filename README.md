6.loading all songs
   1. (site) page.tsx --> 
   //mean this page not be cached and data allway up to data
    export const revalidate = 0  
    2. load song in our server component
      (page.tsx) -- > want to get song from supabase to show 
      --> (action/getSongs) --> ok
      -->(page.tsx) --. pass props(songs) --> PageContent.tsx
      -->(PageContent.tsx) --> usedata (songs) --> map SongItem
      -->(SongItem.tsx) --> have Image 
         - go to next.config.js to pass domain for image
         - create hooks to load image (useLoadImage.ts) -->take url
      -->(SongItem.tsx) -->use hooks image and pass data

      ----------------------------------
   3. load image and data song to sidebar
      -->(sidebar.tsx) --> take data (song) -->pass props to Library.tsx
      -->(Library.tsx) map MeidaItem.tsx 
      --->( MeidaItem.tsx ) use data and image


      // note middleware for
      this file exist because we did not add ant restriction for authentication user to able to load song
       but this way if you change it going to work with authenticaiton users

