
5.modal to upload when click + in sidebar
(when user click to + will upload songs fomr supabase and create new record database)
    1.but before i do that i protect it by front end by triggering an authentication mode if we not login first
    - (Library.tsx) call useAuthModal and user form (useUser) to check if login or not --> (not)--> return authModal.onOpen
    2. controller to upload modal
      - create uploadModal hook --> to set default open: false( --> default is close modal), onClose, onOpen
      - create component UploadModal --> to use Modal and uploadModal hook 
            - Form (use form ) npm i react-hook-form / npm i unipud / npm i -D @types/uniqid
            - InPut.tsx to sctructer for input
            - handle Submit for form
    


