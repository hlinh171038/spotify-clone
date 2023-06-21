"use client"

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";

import { useEffect, useState } from "react"


const ModalProvider =() =>{

    // check is mounted (ensure model not be seen or open during serside rendering)
    const [isMounted,setIsMounted] = useState(false);

    // prevent error form model use serverside rendering
    

    //change the mounted to true once it loaded
    // if useeffect load is actually in client ==> u can safely show our model
    useEffect(()=>{
        setIsMounted(true)
    },[]);

    // check 
    if(!isMounted) {
        return null
    }

    return  (
        <>
            <AuthModal/>
            <UploadModal />
            <SubscribeModal />
        </>
    )
}

export default ModalProvider;