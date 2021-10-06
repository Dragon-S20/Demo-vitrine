import React from 'react'
import Box from '@mui/material/Box';




const showContact = () => {
    return ( 
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
        <a href="mailto:fictif-email@gmail.com">Contactez-nous</a>
        <p>Conditions de Ventes</p>
        <p>FAQs</p>
        </Box>
        </div>
       
    )
}

export default showContact