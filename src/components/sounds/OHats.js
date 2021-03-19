import React from 'react'

import { useRecoilState } from 'recoil'
import { oHatsPattern, replaceItemAtIndex } from '../../state/atoms.js'

export default function OHats(){
    const [currentOHatsPattern, setCurrentOHatsPattern] = useRecoilState(oHatsPattern)

    function handleClick(index){
        if(currentOHatsPattern[index] === 0)
            setCurrentOHatsPattern(replaceItemAtIndex(currentOHatsPattern, index, 1))
        else 
            setCurrentOHatsPattern(replaceItemAtIndex(currentOHatsPattern, index, 0)) 
    }

    const buttons = currentOHatsPattern.map((beat, index) => {
        if((index+1) % 4 === 0){
            if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat selected-beat" />
            else return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat" />
        }

        if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button selected-beat" />
        else return <button key={index}onClick={() => handleClick(index)} className="pattern-button" />
    })
    return(
        <div className="sample">
            <span className="sound-name">OPEN-HATS</span>
            {buttons}
        </div>
    )
}