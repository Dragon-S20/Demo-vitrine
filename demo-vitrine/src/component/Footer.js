import React from 'react'
import Icons from './Icons.js'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';
import Infoletter from './Infoletter.js'



const showFooter = () => {
    return ( 
      <>
      <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <CopyrightIcon/>
          <p>Mon Site Vitrine</p>
          <a href="https://github.com/Dragon-S20">By Dragon-S20</a>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          height: 100,
        }}
      >
        <a href="mailto:fictif-email@gmail.com">Contactez-nous</a>
        <p>Conditions de Ventes</p>
        <p>FAQs</p>
        </Box>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
          <Infoletter />
          </Box>
        
      <Box 
        sx={{ p: 1, flexGrow: 1, }}><Icons /></Box>
        </Box>
        </div>
        </>
       
    )
}

export default showFooter