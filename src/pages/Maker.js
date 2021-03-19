import React from 'react'
import Helmet from 'react-helmet'
import '../css/App.css'

//components imports
import Nav from '../components/Nav'
import Player from '../components/Player'
import Pattern from '../components/Pattern'

export default function Maker(){
    return(
        <>
            <Helmet>
                <title>Create | Drums Maker</title>
                <meta name="description" content="'DRUMS MAKER' is a web-app where you can create and manage simple drum patterns. Let's start now!"/>
            </Helmet>

            <div className="container">
                <Nav />

                <Player />

                <Pattern />
            </div>
        </>
    )
    
}
