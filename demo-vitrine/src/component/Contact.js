import React from 'react'
import Box from '@mui/material/Box';




const showContact = () => {
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
          <Box sx={{ p: 3, order:1, bgcolor: 'grey.300' }}>
          <a href="mailto:fictif-email@gmail.com">Contactez-nous</a>
          </Box>
          <Box sx={{ p: 1, order:2, bgcolor: 'grey.300' }}>
          <p>Conditions de Ventes</p>
          </Box>
          <Box sx={{ p: 1, order:3, bgcolor: 'grey.300' }}>
          <p>FAQs</p>
        </Box>
        </Box>
        </div>
        </>
       
    )
}

export default showContact