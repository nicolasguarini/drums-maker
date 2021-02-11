import React from 'react'
import '../css/Buttons.css'

class Buttons extends React.Component{

    render(){
        return(
            <div className="buttons-container">

                <button className="button-play">PLAY</button>

                <button className="button-play">SAVE</button>

                <button className="button-play" style={{marginRight: "0"}}>LOAD</button>

            </div>
        )
        
    }
}

export default Buttons