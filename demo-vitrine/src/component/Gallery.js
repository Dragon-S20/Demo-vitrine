import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImgGallery1 from './gallery1-vitrine.jpg'
import imgGallery2 from './gallery2-vitrine.jpg'
import ImgGallery3 from './gallery3-vitrine.jpg'



export default function WovenImageList() {
    return (
      <div style={{ width: '100%' }}>
      <ImageList sx={{ width: '100%', height: 450 }} variant="woven" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    );
  }
  
  const itemData = [
    {
      img: ImgGallery1,
      title: 'Model 1',
    },
    {
      img: imgGallery2,
      title: 'Model 2',
    },
    {
      img: ImgGallery3,
      title: 'Model3',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
  ];
  