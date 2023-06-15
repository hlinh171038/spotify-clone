
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () =>{

    const supabaseClient =useSupabaseClient();
    const router = useRouter()
    const {session} = useSessionContext()
    // modal to close and open pop up
    const {onClose, isOpen} = useAuthModal();
    // finction to check close pop up 
    // go to header to create open for pop up(modal)
    const onChange = (open:boolean) =>{
        if(!open){
            onClose();
        }
    }

    //useEffect to close modal when successfully resgister or login
    useEffect(()=>{
        if(session){
            router.refresh();
            onClose()
        }
    },[session,router, onClose])
     return (<Modal
            title="Webcome back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
           <Auth
            theme="dark"
            magicLink
            supabaseClient={supabaseClient}
            providers={['github']}
            appearance={{
               theme: ThemeSupa,
                variables: {
                    default: {
                        colors:{
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            }}
           />
        </Modal>
    )
}

export default AuthModal