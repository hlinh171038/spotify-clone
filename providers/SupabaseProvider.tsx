'use client'

import {Database } from '@/types_db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import {useState} from 'react';


 interface SupabaseProviderProps {
    children: React.ReactNode;
 };

 const SupabaseProvider:React.FC<SupabaseProviderProps> =({children}) =>{
    const [supabaseClient] = useState(()=>
    // use method create client componet form auth-helper/nextjs with type database
        createClientComponentClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
 }

export default SupabaseProvider