import React from 'react'
import Menu from './Menu.js'
import logo from './logo.svg'
import Box from '@mui/material/Box';
import Home from './Home.js'
import Color from './Color.js'


const header = () => {
    return (
        <>
        <Box sx={{
            mx: 'auto',
            bgcolor: 'primary.main',
            color: '#fff',
            width: 200,
            p: 1,
            m: 1,
            borderRadius: 1,
            textAlign: 'center',
          }}>
            <h1>Ma vitrine Mode</h1>
            <img src={logo} alt="logo"/>
        </Box>
        <Menu />
        <Home />
        </>
    )
}

export default header