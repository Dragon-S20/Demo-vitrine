import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar.js'
import SearchIcon from '@mui/icons-material/Search';

const ShowHeader= () => {
  return (
    <div style={{ width: '100%' }} >
      <Box sx={{ display: 'flex', p: 3, bgcolor: '#bdbdbd'}}>
      <Box 
        sx={{ p: 2, flexGrow: 1 }}><Navbar /></Box>
        <Box 
        sx={{ p: 3, flexGrow: 1}}>Mon site Vitrine</Box>
        <Box sx={{ p: 2}}><SearchIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
      </Box>
    </div>
  );
}

export default ShowHeader