import React from 'react'
import Icons from './Icons.js'
import Box from '@mui/material/Box';



const showFooter = () => {
    return (
       
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper'}}>
      <Box 
        sx={{ p: 1, flexGrow: 1, bgcolor: 'grey.300' }}><Icons /></Box>
        </Box>
       
    )
}

export default showFooter