import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from './Menu.js'
import SearchIcon from '@mui/icons-material/Search';

const FlexGrow = () => {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper'}}>
      <Box 
        sx={{ p: 1, flexGrow: 1, bgcolor: 'grey.300' }}><Menu /></Box>
        <Box 
        sx={{ p: 1, flexGrow: 1, bgcolor: 'grey.300'}}>Mon site Vitrine</Box>
        <Box sx={{ p: 1, bgcolor: 'grey.300' }}><SearchIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
      </Box>
    </div>
  );
}

export default FlexGrow