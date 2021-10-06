import React from 'react'
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function FlexDirection() {
    return (
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
          }}
        >
          <Box sx={{ p: 1, bgcolor: 'grey.300' }}><InstagramIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1, bgcolor: 'grey.300' }}><TwitterIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1, bgcolor: 'grey.300' }}><FacebookIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1, bgcolor: 'grey.300' }}><YouTubeIcon color="primary" fontSize="large" sx={{ fontSize: 40 }}/></Box>
        </Box>
        </div>
    )}