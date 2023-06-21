'use client'
import Modal from './Modal';

const SubscribeModal = () =>{
    return (
        <Modal
        title="Only for premium users"
        description='Listen to music with Spotify Premium'
        isOpen
        onChange={()=>{}}
        >
            Subscriptiion
        </Modal>
    )
}

export default SubscribeModal;