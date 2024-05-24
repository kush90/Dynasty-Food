
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

const MediaCard = ({ products,showPreview=true,type="products"}) => {
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
      </ImageListItem>
      {products !== undefined && products.map((item,index) => (
        <ImageListItem key={index} cols={1} rows={1}>
          <img
            srcSet={type !== 'brands' ? `${item.img}?w=248&fit=crop&auto=format&dpr=2 2x` :`${item.Img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={type !== 'brands' ? `${item.img}?w=248&fit=crop&auto=format` : `${item.Img}?w=248&fit=crop&auto=format&dpr=2 2x` }
            alt={type !== 'brands'? item.productName ?? item.name : item.name}
            loading="lazy"
            style={type === 'brands' ? { objectFit:'contain' } : {}}

          />
          {
            type !== 'brands' &&  <ImageListItemBar
            title={type !== "brands"  ? item.productName : item.Name}
            subtitle={item.category}

            actionIcon={
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  {/* <IconButton  sx={{ marginRight: 1}} color='warning' aria-label={`add to cart ${item.title}`}>
                    <ShoppingCartIcon />
                  </IconButton> */}
                </Grid>
                {showPreview==true &&
                <Grid item>
                  <Tooltip title="Image Preview">
                    <IconButton onClick={handleOpen} aria-label={`info about ${item.title}`} sx={{ color: 'white' }}>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
            }
              </Grid>
            }
          >
            <Typography variant="body2">{item.price}</Typography> {/* Display new field */}

          </ImageListItemBar>
          }
         
        </ImageListItem>
      ))}
      {open && <ImageSliderModal images={['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6']} openModal={open} closeModal={handleClose} />}

    </ImageList>
  );
}

export default MediaCard;