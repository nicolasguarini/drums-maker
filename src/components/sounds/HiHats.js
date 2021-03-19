import React from 'react'

import { useRecoilState } from 'recoil'
import { hiHatsPattern, replaceItemAtIndex } from '../../state/atoms.js'

export default function HiHats(){
    const [currentHiHatsPattern, setCurrentHiHatsPattern] = useRecoilState(hiHatsPattern)

    function handleClick(index){
        if(currentHiHatsPattern[index] === 0)
            setCurrentHiHatsPattern(replaceItemAtIndex(currentHiHatsPattern, index, 1))
        else 
            setCurrentHiHatsPattern(replaceItemAtIndex(currentHiHatsPattern, index, 0)) 
    }

    const buttons = currentHiHatsPattern.map((beat, index) => {
        if((index+1) % 4 === 0){
            if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat selected-beat" />
            else return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat" />
        }

        if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button selected-beat" />
        else return <button key={index}onClick={() => handleClick(index)} className="pattern-button" />
    })
    return(
        <div className="sample">
            <span className="sound-name">HI-HATS</span>
            {buttons}
        </div>
    )
}