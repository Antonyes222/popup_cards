import {create} from "zustand";
import {PopupCard} from '../objects/card/cardData'

type state = {
    card: PopupCard
    opened: boolean
    tool: string
}
type CreateActions = {
    changeToolState: (tool: string) => void
}

export const useCreateStore = create<state & CreateActions>((set) => ({
    card: None,
    opened: false,
    tool: "none",

    changeToolState: (input) => set({tool: input}),
}))
