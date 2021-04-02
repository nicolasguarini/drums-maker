import React from 'react'
import {useRecoilState} from 'recoil'
import {bpmState, genreState, repeatState} from '../state/atoms'

import '../css/Settings.css'

export default function Settings(){
    const [currentBpmState, setCurrentBpmState] = useRecoilState(bpmState)
    const [currentGenreState, setCurrentGenreState] = useRecoilState(genreState)
    const [currentRepeatState, setCurrentRepeatState] = useRecoilState(repeatState)

    return(
        <div className="settings-container">
            <span className="setting-title">BPM:</span> 
            <input className="input-bpm" type="number" defaultValue="65" value={currentBpmState} onChange={e => setCurrentBpmState(e.target.value)}/>

            <span className="setting-title" style={{marginLeft: "30px"}}>GENRE:</span>
            <select className="select-genre" onChange={e => setCurrentGenreState(e.target.value.toLowerCase())}>
                {currentGenreState === "trap" ? <option selected>TRAP</option> : <option>TRAP</option>}
                {currentGenreState === "rock" ? <option selected>ROCK</option> : <option>ROCK</option>}
                {currentGenreState === "hip-hop" ? <option selected>HIP-HOP</option> : <option>HIP-HOP</option>}
            </select>

            <span className="setting-title" style={{marginLeft: "30px"}}>REPEAT:</span>
            <input className="input-repeat" type="number" defaultValue="1" value={currentRepeatState} onChange={e => setCurrentRepeatState(parseInt(e.target.value))} />
            <span className="setting-title" style={{fontWeight: "normal"}}>X</span>
        </div>
    )
}