import React from 'react'
import Kick from './sounds/Kick'
import Snare from './sounds/Snare'
import Clap from './sounds/Clap'
import HiHats from './sounds/HiHats'
import OHats from './sounds/OHats'

import '../css/Pattern.css'

export default function Patterns(){
    return(
        <div className="pattern-wrapper">
            <Kick />
            <HiHats />
            <OHats />
            <Snare />
            <Clap />
        </div>
    )
}