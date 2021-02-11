import React from 'react'
import './css/App.css'
import Helmet from 'react-helmet'

//components's imports
import Nav from './components/Nav'
import Buttons from './components/Buttons'

class Maker extends React.Component{

    render(){
        return(
            <>
                <Helmet>
                    <title>Create | Drums Maker</title>
                    <meta name="description" content="'DRUMS MAKER' is a web-app where you can create and manage simple drum patterns. Let's start now!"/>
                </Helmet>

                <div className="container">
                    <Nav />

                    <Buttons />
                </div>
            </>
        )
    } 
    
}

export default Maker