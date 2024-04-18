
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Typography, Tooltip } from '@mui/material';
import ImageSliderModal from './SliderModal';


export default function MediaCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleOpen = () => {
    console.log('open')
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <ImageList sx={{ width: '100%' }} cols={isMobile ? 1 : 5}>
      <ImageListItem key="Subheader" cols={isMobile ? 1 : 5} style={{ marginBottom: "20px" }}>
        <ListSubheader component="div">
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField focused={true} className='product-search' id="standard-basic" label="Product Name" variant="standard" placeholder='Search ...' />
            </Grid>
          </Grid>
        </ListSubheader>

      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={1} rows={1}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title + '(' + '\t' + '฿' + item.price + ')'}
            subtitle={item.description}

            actionIcon={
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* <IconButton  sx={{ marginRight: 1}} color='warning' aria-label={`add to cart ${item.title}`}>
                    <ShoppingCartIcon />
                  </IconButton> */}
                </Grid>
                <Grid item>
                  <Tooltip title="Image Preview">
                    <IconButton onClick={handleOpen} aria-label={`info about ${item.title}`} sx={{ color: 'white' }}>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            }
          >
            <Typography variant="body2">{item.price}</Typography> {/* Display new field */}

          </ImageListItemBar>
        </ImageListItem>
      ))}
      {open && <ImageSliderModal images={['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6']} openModal={open} closeModal={handleClose} />}

    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    description: 'lorem ipsum',
    price: 130,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    description: 'lorem ipsum',
    price: 150,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    description: 'lorem ipsum',
    price: 80,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    description: 'lorem ipsum',
    price: 90,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    description: 'lorem ipsum',
    price: 230,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    description: 'lorem ipsum',
    price: 77,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    description: 'lorem ipsum',
    price: 330,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    description: 'lorem ipsum',
    price: 200,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    description: 'lorem ipsum',
    price: 30,
  },
];