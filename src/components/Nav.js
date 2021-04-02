import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Nav.css'

const Nav = () =>{
    return(
        <>
            <div className="nav">
                <Link to="/" style={{color: 'black', textDecoration: "none", zIndex: "100"}}><span className="nav-exit">exit</span></Link>
                <a href="https://github.com/nicolasguarini/drums-maker"><span className="nav-github"><img src="https://www.corsinvest.it/wp-content/uploads/2019/10/github-logo.png" width="40px" alt="github logo" /></span></a>
            </div>

            <div className="logo-container">
                <h1 className="logo">Drums Maker</h1>
                <p className="logo-subtitle">by Nicolas Guarini</p>
            </div>
        </>
    )
}

export default Nav