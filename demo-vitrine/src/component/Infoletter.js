import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from './Button_infoletter.js'

export default function BasicTextFields() {
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
          }}>
            <section>
                <p>Infolettre</p>
                <p>Inscrivez - vous pour recevoir nos offres promotionnelles</p>
            </section>
        </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField id="filled-basic" label="Votre courrier
          " variant="filled" />
          </Box>
          <Button />
          </div>
          </>
          
    )} 