import React from 'react'

import { useRecoilState } from 'recoil'
import { snarePattern, replaceItemAtIndex } from '../../state/atoms.js'

export default function Snare(){
    const [currentSnarePattern, setCurrentSnarePattern] = useRecoilState(snarePattern)

    function handleClick(index){
        if(currentSnarePattern[index] === 0)
            setCurrentSnarePattern(replaceItemAtIndex(currentSnarePattern, index, 1))
        else 
            setCurrentSnarePattern(replaceItemAtIndex(currentSnarePattern, index, 0)) 
    }

    const buttons = currentSnarePattern.map((beat, index) => {
        if((index+1) % 4 === 0){
            if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat selected-beat" />
            else return <button key={index}onClick={() => handleClick(index)} className="pattern-button last-beat" />
        }

        if(beat === 1) return <button key={index}onClick={() => handleClick(index)} className="pattern-button selected-beat" />
        else return <button key={index}onClick={() => handleClick(index)} className="pattern-button" />
    })
    return(
        <div className="sample">
            <span className="sound-name">SNARE</span>
            {buttons}
        </div>
    )
}