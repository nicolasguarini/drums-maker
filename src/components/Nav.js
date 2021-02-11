import React from 'react'
import '../css/Nav.css'

const Nav = () =>{
    return(
        <>
            <div className="nav">
                <span className="nav-exit">exit</span>
                <span className="nav-create">about</span>
            </div>

            <div className="logo-container">
                <h1 className="logo">Drums Maker</h1>
                <p className="logo-subtitle">by Nicolas Guarini</p>
            </div>
        </>
    )
}

export default Nav