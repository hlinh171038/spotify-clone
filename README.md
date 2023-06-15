
4.model provider(login)
 (provider/ModalProvider.tsx) --> check is mounted (ensure model not be seen or open during serside rendering)
 - warp (layout.tsx file)
 - (Modal.tsx file) use @radix-ui/react-dialog to create dialog modal --> ok , but create the controller to close or open
 - (hooks/useAuthModal.ts) use mothod create from zustand and set for close and open -->use it in authModal file/component
 - (AuthModal) take {isOpen = open(Modal.tsx) , onClose = onchange function}
 - (AuthModal) useEffect to check (if login or sign up success --> close modal)
