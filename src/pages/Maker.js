import React from 'react'
import '../css/App.css'
import '../css/Buttons.css'
import Helmet from 'react-helmet'

//components imports
import Nav from '../components/Nav'

class Maker extends React.Component{
    constructor(){
        super()
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this)
        this.handleClickLoad = this.handleClickLoad.bind(this)
        this.handleClickSave = this.handleClickSave.bind(this)

        this.state = {currentState: 'paused'}
    }

    handleClickPlayPause(){
        if(this.state.currentState === 'playing') this.setState({currentState: 'paused'})
        else this.setState({currentState: 'playing'})
    }

    handleClickSave(){
        console.log("Save button clicked")
    }

    handleClickLoad(){
        console.log("Load button clicked");
    }

    render(){
        return(
            <>
                <Helmet>
                    <title>Create | Drums Maker</title>
                    <meta name="description" content="'DRUMS MAKER' is a web-app where you can create and manage simple drum patterns. Let's start now!"/>
                </Helmet>

                <div className="container">
                    <Nav />

                    <div className="buttons-container">
                        <button className="button" onClick={this.handleClickPlayPause}>{this.state.currentState === 'playing' ? 'PAUSE' : 'PLAY'}</button>
                        <button className="button" onClick={this.handleClickSave}>SAVE</button>
                        <button className="button" style={{marginRight: "0"}} onClick={this.handleClickLoad}>LOAD</button>
                    </div>

                </div>
            </>
        )
    } 
    
}

export default Maker