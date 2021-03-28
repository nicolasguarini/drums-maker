import {atom} from 'recoil'

export const bpmState = atom({
    key: "bpmState",
    default: 65
})

export const genreState = atom({
    key: "genreState",
    default: "trap"
})

export const repeatState = atom({
    key: "repeatState",
    default: 1
})

export const playingState = atom({
    key: "playingState",
    default: "paused"
})

export const kickPattern = atom({
    key: "kickPattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const snarePattern = atom({
    key: "snarePattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const clapPattern = atom({
    key: "clapPattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const hiHatsPattern = atom({
    key: "hiHatsPattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const oHatsPattern = atom({
    key: "oHatsPattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}