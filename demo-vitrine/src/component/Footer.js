import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const showFooter = () => {
    return ( 
      <Grid container spacing={1}  sx={{bgcolor: '#e0e0e0'}}>
      <Grid style={{ width: '100%'}} item xs={12} sm={4} ></Grid>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 1
        }}
      >
          <Box sx={{ p: 1}}>
          <p>&copy;Mon Site Vitrine</p>
          <a href="https://github.com/Dragon-S20">By Dragon-S20</a>
        </Box>
        </Box>
        </Grid>
       
    )
}

export default showFooter