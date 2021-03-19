import React from 'react'
import useSound from 'use-sound'
import kick from '../assets/trap/kick.wav'
import hh from '../assets/trap/hh.wav'
import { useRecoilState } from 'recoil'
import { playingState } from '../state/atoms.js'


import '../css/Buttons.css'

export default function Buttons(){
    const [currentPlayingState, setCurrentPlayingState] = useRecoilState(playingState)
    const [playKick] = useSound(kick)
    const [playHH] = useSound(hh)

    function handleClickPlayPause(){
        if(currentPlayingState === 'paused'){
            setCurrentPlayingState('playing'); 
            play()
        }
        else{
            setCurrentPlayingState('paused')
        }
    }

    function play(){
        playKick()
        setTimeout(playHH, 200)
        setTimeout(playHH, 400)
        setTimeout(playHH, 600)
        setTimeout(playHH, 800)
        setTimeout(playKick, 800)
        setTimeout(playHH, 1000)

        setTimeout(stop, 1500)
    }

    function stop(){
        setCurrentPlayingState('paused')
    }

    function handleClickSave(){
        console.log("Save button clicked")
    }

    function handleClickLoad(){
        console.log("Load button clicked");
    }

    return(
        <div className="buttons-container">
            <button className="button" onClick={handleClickPlayPause}>{currentPlayingState === 'playing' ? 'PLAYING' : 'PLAY'}</button>
            <button className="button" onClick={handleClickSave}>SAVE</button>
            <button className="button" style={{marginRight: "0"}} onClick={handleClickLoad}>LOAD</button>
        </div>
    )
}


