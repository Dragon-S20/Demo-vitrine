import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const showContact = () => {
    return ( 
      <Grid container spacing={3}>
      <Grid style={{ width: '100%'}} item xs={12} sm={4}></Grid>
      <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 3,
          bgcolor: '#bdbdbd',
        }}
      >
          <Box sx={{ p: 3, order:1 }}>
          <a href="mailto:fictif-email@gmail.com">Contactez-nous</a>
          </Box>
          <Box sx={{ p: 1, order:2}}>
          <p>Conditions de Ventes</p>
          </Box>
          <Box sx={{ p: 1, order:3}}>
          <p>FAQs</p>
        </Box>
        </Box>
        </div>
       </Grid>
       
    )
}

export default showContact