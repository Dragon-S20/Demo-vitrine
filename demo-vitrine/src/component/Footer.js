import React from 'react'
import Box from '@mui/material/Box';

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
          <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
          <p>&copy;Mon Site Vitrine</p>
          <a href="https://github.com/Dragon-S20">By Dragon-S20</a>
        </Box>
        </Box>
        </div>
        </>
       
    )
}

export default showFooter