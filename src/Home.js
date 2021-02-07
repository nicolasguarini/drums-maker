import React from 'react'
import Helmet from 'react-helmet'
import './css/Index.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <Helmet>
                <title>Drums Maker</title>
                <meta
                    name="description"
                    content="'DRUMS MAKER' is a web-app where you can create and manage simple drum patterns. Let's start now!"
                />
            </Helmet>
            
            <div className="container">
                <div className="nav">
                    <span className="nav-about">about</span>
                    <span className="nav-create">create drums</span>
                </div>

                <div className="hero">
                    <h1>Drums Maker</h1>
                    <p>by <a href="https://nicolasguarini.it" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>Nicolas Guarini</a></p>
                    <Link to="/create" className="hero-btn">Let's start now!</Link>
                </div>
            </div>
            
            

        </>
    )
}

export default Home