import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card1 = (
  <>
    <CardContent>
    <Typography variant="h5" component="div" sx={{display: 'flex', justifyContent: 'center', p:8}}>
        Nos nouveautés
      </Typography>
      
    </CardContent>
  </>
);


const ShowCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card1}</Card>
    </Box>
  );
}

export default ShowCard
