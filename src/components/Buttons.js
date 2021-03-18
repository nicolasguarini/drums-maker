import React from 'react'

import { useRecoilState } from 'recoil'
import { playingState } from '../state/atoms.js'

import '../css/Buttons.css'

export default function Buttons(){
    const [currentPlayingState, setCurrentPlayingState] = useRecoilState(playingState)

    function handleClickPlayPause(){
        if(currentPlayingState === 'paused') setCurrentPlayingState('playing')
        else setCurrentPlayingState('paused')
    }

    function handleClickSave(){
        console.log("Save button clicked")
    }

    function handleClickLoad(){
        console.log("Load button clicked");
    }

    return(
        <div className="buttons-container">
            <button className="button" onClick={handleClickPlayPause}>{currentPlayingState === 'playing' ? 'PAUSE' : 'PLAY'}</button>
            <button className="button" onClick={handleClickSave}>SAVE</button>
            <button className="button" style={{marginRight: "0"}} onClick={handleClickLoad}>LOAD</button>
        </div>
    )
}

