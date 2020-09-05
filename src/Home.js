import React from 'react'
//import Logo from './logo.svg'
import Helmet from 'react-helmet'

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
            {
             //   <img src={Logo} alt="logo"></img>
            }
        </>
    )
}

export default Home