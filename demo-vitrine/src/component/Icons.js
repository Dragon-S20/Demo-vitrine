import React from 'react'
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const ShowIcons = () => {
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
          <Box sx={{ p: 1 }}><InstagramIcon color="primary" fontSize="small" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1}}><TwitterIcon color="primary" fontSize="small" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1 }}><FacebookIcon color="primary" fontSize="small" sx={{ fontSize: 40 }}/></Box>
          <Box sx={{ p: 1}}><YouTubeIcon color="primary" fontSize="small" sx={{ fontSize: 40 }}/></Box>
        </Box>
        </div>
    )}

    export default ShowIcons