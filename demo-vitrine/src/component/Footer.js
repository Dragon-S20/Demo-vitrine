import React from 'react'
import Icons from './Icons.js'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';
import Infoletter from './Infoletter.js'



const showFooter = () => {
    return ( 
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper'}} >
      <Box 
        sx={{ p: 1, flexGrow: 1, }}>
          <a href="">Restons en contact</a>
          <Infoletter />
          <p><CopyrightIcon/></p>
          <p>Mon Site Vitrine</p>
          <a href="https://github.com/Dragon-S20">By Dragon-S20</a>
        </Box>
        
      <Box 
        sx={{ p: 1, flexGrow: 1, }}><Icons /></Box>
        </Box>
       
    )
}

export default showFooter