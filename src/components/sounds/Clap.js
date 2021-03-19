import React from 'react'

import { useRecoilState } from 'recoil'
import { clapPattern, replaceItemAtIndex } from '../../state/atoms.js'

export default function Clap(){
    const [currentClapPattern, setCurrentClapPattern] = useRecoilState(clapPattern)

    function handleClick(index){
        if(currentClapPattern[index] === 0)
            setCurrentClapPattern(replaceItemAtIndex(currentClapPattern, index, 1))
        else 
            setCurrentClapPattern(replaceItemAtIndex(currentClapPattern, index, 0)) 
    }

    const buttons = currentClapPattern.map((beat, index) => {
        if((index+1) % 4 === 0){
            if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat selected-beat" />
            else return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat" />
        }

        if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button selected-beat" />
        else return <button key={index}onClick={() => handleClick(index)} className="pattern-button" />
    })
    return(
        <div className="sample">
            <span className="sound-name">CLAP</span>
            {buttons}
        </div>
    )
}