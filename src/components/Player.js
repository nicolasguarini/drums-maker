import React     from 'react'
import useSound from 'use-sound'

import { useRecoilState } from 'recoil'
import { playingState, kickPattern, hiHatsPattern, snarePattern, clapPattern, oHatsPattern, bpmState, genreState, repeatState } from '../state/atoms.js'


import '../css/Buttons.css'

export default function Player(){
    const [currentPlayingState, setCurrentPlayingState] = useRecoilState(playingState)
    const [currentKickPattern] = useRecoilState(kickPattern)
    const [currentHHPattern] = useRecoilState(hiHatsPattern)
    const [currentSnarePattern] = useRecoilState(snarePattern)
    const [currentClapPattern] = useRecoilState(clapPattern)
    const [currentOHatsPattern] = useRecoilState(oHatsPattern)
    const [currentBpmState] = useRecoilState(bpmState)
    const [currentGenreState] = useRecoilState(genreState)
    const [currentRepeatState] = useRecoilState(repeatState)

    let [playTrapKick] = useSound(require('../assets/trap/kick.mp3'))
    let [playTrapHH] = useSound(require('../assets/trap/hh.mp3'))
    let [playTrapSnare] = useSound(require('../assets/trap/snare.mp3'))
    let [playTrapClap] = useSound(require('../assets/trap/clap.mp3'))
    let [playTrapOh] = useSound(require('../assets/trap/oh.mp3'))

    let [playRockKick] = useSound(require('../assets/rock/kick.mp3'))
    let [playRockHH] = useSound(require('../assets/rock/hh.mp3'))
    let [playRockSnare] = useSound(require('../assets/rock/snare.mp3'))
    let [playRockClap] = useSound(require('../assets/rock/clap.mp3'))
    let [playRockOh] = useSound(require('../assets/rock/oh.mp3'))

    let [playHipHopKick] = useSound(require('../assets/hip-hop/kick.mp3'))
    let [playHipHopHH] = useSound(require('../assets/hip-hop/hh.mp3'))
    let [playHipHopSnare] = useSound(require('../assets/hip-hop/snare.mp3'))
    let [playHipHopClap] = useSound(require('../assets/hip-hop/clap.mp3'))
    let [playHipHopOh] = useSound(require('../assets/hip-hop/oh.mp3'))


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
        let delay = 6000 / currentBpmState;
        let timeout = 0;

        for(let r = 0; r < currentRepeatState; r++){
        
            for(let i = 0; i<32; i++){
                if(currentKickPattern[i] === 1){
                    if(currentGenreState === 'trap')
                        setTimeout(playTrapKick, timeout)
                    else if(currentGenreState === 'rock')
                        setTimeout(playRockKick, timeout)
                    else
                        setTimeout(playHipHopKick, timeout)
                }
                    
                if(currentHHPattern[i] === 1){
                    if(currentGenreState === 'trap')
                        setTimeout(playTrapHH, timeout)
                    else if(currentGenreState === 'rock')
                        setTimeout(playRockHH, timeout)
                    else 
                        setTimeout(playHipHopHH, timeout)
                }

                if(currentSnarePattern[i] === 1){
                    if(currentGenreState === 'trap')
                        setTimeout(playTrapSnare, timeout)
                    else if(currentGenreState === 'rock')
                        setTimeout(playRockSnare, timeout)
                    else
                        setTimeout(playHipHopSnare, timeout)
                }
                    
                if(currentOHatsPattern[i] === 1){
                    if(currentGenreState === 'trap')
                        setTimeout(playTrapOh, timeout)
                    else if(currentGenreState === 'rock')
                        setTimeout(playRockOh, timeout)
                    else
                        setTimeout(playHipHopOh, timeout)
                }

                if(currentClapPattern[i] === 1){
                    if(currentGenreState === 'trap')
                        setTimeout(playTrapClap, timeout)
                    else if(currentGenreState === 'rock')
                        setTimeout(playRockClap, timeout)
                    else
                        setTimeout(playHipHopClap, timeout)
                }

                timeout = timeout + delay;
            }
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


