import {atom} from 'recoil'

export const playingState = atom({
    key: "playingState",
    default: "paused"
})