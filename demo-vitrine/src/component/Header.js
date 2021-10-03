import React from 'react'
import Menu from './Menu.js'
import logo from './logo.svg'

const header = () => {
    return (
        <section>
            <h1>Ma vitrine Mode</h1>
            <img src={logo} alt="logo"/>

             <Menu />
        </section>
       
    )
}

export default header