import React from 'react'

import { useRecoilState } from 'recoil'
import { kickPattern, replaceItemAtIndex } from '../../state/atoms.js'

export default function Kick(){
    const [currentKickPattern, setCurrentKickPattern] = useRecoilState(kickPattern)

    function handleClick(index){
        if(currentKickPattern[index] === 0)
            setCurrentKickPattern(replaceItemAtIndex(currentKickPattern, index, 1))
        else 
            setCurrentKickPattern(replaceItemAtIndex(currentKickPattern, index, 0)) 
    }

    const buttons = currentKickPattern.map((beat, index) => {
        if((index+1) % 4 === 0){
            if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat selected-beat" />
            else return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat" />
        }

        if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button selected-beat" />
        else return <button key={index}onClick={() => handleClick(index)} className="pattern-button" />
    })
    return(
        <div className="sample">
            <span className="sound-name">KICK</span>
            {buttons}
        </div>
    )
}