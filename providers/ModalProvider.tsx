"use client"

import { useEffect, useState } from "react"

const ModalProvider =() =>{
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
            Modals!
        </>
    )
}

export default ModalProvider;