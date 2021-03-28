import React from 'react'
import {useRecoilState} from 'recoil'
import {bpmState, genreState, repeatState} from '../state/atoms'

import '../css/Settings.css'

export default function Settings(){
    // eslint-disable-next-line
    const [currentBpmState, setCurrentBpmState] = useRecoilState(bpmState)
    // eslint-disable-next-line
    const [currentGenreState, setCurrentGenreState] = useRecoilState(genreState)
    // eslint-disable-next-line
    const [currentRepeatState, setCurrentRepeatState] = useRecoilState(repeatState)

    return(
        <div className="settings-container">
            <span className="setting-title">BPM:</span> 
            <input className="input-bpm" type="number" defaultValue="65" onChange={e => setCurrentBpmState(e.target.value)}/>

            <span className="setting-title" style={{marginLeft: "30px"}}>GENRE:</span>
            <select className="select-genre" onChange={e => setCurrentGenreState(e.target.value.toLowerCase())}>
                <option>TRAP</option>
                <option>ROCK</option>
                <option>HIP-HOP</option>
            </select>

            <span className="setting-title" style={{marginLeft: "30px"}}>REPEAT:</span>
            <input className="input-repeat" type="number" defaultValue="1" onChange={e => setCurrentRepeatState(parseInt(e.target.value))} />
            <span className="setting-title" style={{fontWeight: "normal"}}>X</span>
        </div>
    )
}