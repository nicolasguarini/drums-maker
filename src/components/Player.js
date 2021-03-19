import React from 'react'
import useSound from 'use-sound'

import kick from '../assets/trap/kick.wav'
import hh from '../assets/trap/hh.wav'
import snare from '../assets/trap/snare.wav'
import clap from '../assets/trap/clap.wav'
import oh from '../assets/trap/oh.wav'

import { useRecoilState } from 'recoil'
import { playingState, kickPattern, hiHatsPattern, snarePattern, clapPattern, oHatsPattern } from '../state/atoms.js'


import '../css/Buttons.css'

export default function Player(){
    const [currentPlayingState, setCurrentPlayingState] = useRecoilState(playingState)
    const [currentKickPattern] = useRecoilState(kickPattern)
    const [currentHHPattern] = useRecoilState(hiHatsPattern)
    const [currentSnarePattern] = useRecoilState(snarePattern)
    const [currentClapPattern] = useRecoilState(clapPattern)
    const [currentOHatsPattern] = useRecoilState(oHatsPattern)

    const [playKick] = useSound(kick)
    const [playHH] = useSound(hh)
    const [playSnare] = useSound(snare)
    const [playClap] = useSound(clap)
    const [playOh] = useSound(oh)

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
        setCurrentPlayingState('playing')
        let delay = 6000 / 65;
        let timeout = 0;
        
        for(let i = 0; i<32; i++){
            if(currentKickPattern[i] === 1)
                setTimeout(playKick, timeout)
            if(currentHHPattern[i] === 1)
                setTimeout(playHH, timeout)
            if(currentSnarePattern[i] === 1)
                setTimeout(playSnare, timeout)
            if(currentOHatsPattern[i] === 1)
                setTimeout(playOh, timeout)
            if(currentClapPattern[i] === 1)
                setTimeout(playClap, timeout)

            timeout = timeout + delay;
        }
        

        if(currentPlayingState === 'paused')
            setTimeout(stop, timeout)
        else
            setTimeout(play, timeout)
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


