import React     from 'react'
import useSound from 'use-sound'

import { useRecoilState } from 'recoil'
import { playingState, kickPattern, hiHatsPattern, snarePattern, clapPattern, oHatsPattern, bpmState, genreState, repeatState } from '../state/atoms.js'


import '../css/Buttons.css'

export default function Player(){
    const [currentPlayingState, setCurrentPlayingState] = useRecoilState(playingState)
    const [currentKickPattern, setCurrentKickPattern] = useRecoilState(kickPattern)
    const [currentHHPattern, setCurrentHHPattern] = useRecoilState(hiHatsPattern)
    const [currentSnarePattern, setCurrentSnarePattern] = useRecoilState(snarePattern)
    const [currentClapPattern, setCurrentClapPattern] = useRecoilState(clapPattern)
    const [currentOHatsPattern, setCurrentOHatsPattern] = useRecoilState(oHatsPattern)
    const [currentBpmState, setCurrentBpmState] = useRecoilState(bpmState)
    const [currentGenreState, setCurrentGenreState] = useRecoilState(genreState)
    const [currentRepeatState, setCurrentRepeatState] = useRecoilState(repeatState)


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
        let name = prompt("Insert pattern name:")

        if(name == null) return

        let pattern = {
            name: name,
            genre: currentGenreState,
            bpm: currentBpmState,
            kick: currentKickPattern,
            snare: currentSnarePattern, 
            hh: currentHHPattern,
            oh: currentOHatsPattern, 
            clap: currentClapPattern,
            repeat: currentRepeatState,
            date: Date.now()
        }

        localStorage.setItem(name, JSON.stringify(pattern))
        alert("Pattern " + name + " saved successfully!")
    }

    function handleClickLoad(){
        let name = prompt("Insert pattern name to load:")
        let patternToLoad = localStorage.getItem(name)

        if(patternToLoad == null){
            alert("Insert valid name!")
            return
        }

        patternToLoad = JSON.parse(patternToLoad)
        console.log(patternToLoad)

        setCurrentGenreState(patternToLoad.genre)
        setCurrentBpmState(patternToLoad.bpm)
        setCurrentKickPattern(patternToLoad.kick)
        setCurrentSnarePattern(patternToLoad.snare)
        setCurrentClapPattern(patternToLoad.clap)
        setCurrentHHPattern(patternToLoad.hh)
        setCurrentOHatsPattern(patternToLoad.oh)
        setCurrentRepeatState(patternToLoad.repeat)
        
        alert("Pattern loaded successfully!")
    }

    return(
        <>
        <div className="buttons-container">
            <button className="button" onClick={handleClickPlayPause}>{currentPlayingState === 'playing' ? 'PLAYING' : 'PLAY'}</button>
            <button className="button" onClick={handleClickSave}>SAVE</button>
            <button className="button" style={{marginRight: "0"}} onClick={handleClickLoad}>LOAD</button>
        </div>
        </>
        
        
    )
}


