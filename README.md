7.search song
(create the function to fetching song defend on title)

1. create router search --> file app/search (we want to use data search from supabase base on title)
2. create getSongsByTitle.ts --> get songs revice title from searchParams method (.ilike('title',`%${title}%`))
3. create SearchInput to interact and take value from user
   - USE MPN I QUERY-STRING to take url params
   -(debounce.ts) use debounce hook to make sure that it refesh after 500 ms after user typing done
4. create SearchContent to map songs (base on searchparams take from url(SearchInput.tsx))