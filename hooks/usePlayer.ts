import { create } from "zustand";


// ids: [string,string,...]
//activeId : current id
interface PlayerStore {
    ids: string[];
    activeId?:string;
    setId: (id: string) =>void;
    setIds: (ids: string[]) =>void;
    reset: () =>void;
}

const usePlayer = create<PlayerStore>((set)=>({
    // default is empty string, activeId is undefined
    ids: [],
    activeId: undefined,
    setId: (id:string)=>set({activeId:id}),
    setIds: (ids:string[])=> set({ids}),
    reset: () => set({ids:[], activeId: undefined})
}))

export default usePlayer