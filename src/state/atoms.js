import {atom} from 'recoil'

export const playingState = atom({
    key: "playingState",
    default: "paused"
})

export const kickPattern = atom({
    key: "kickPattern",
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
})

export const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}