import React from 'react';
import { Typography, Container, AppBar, Toolbar } from '@mui/material';
import '../../styles/public/public.css'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useLocation, useNavigate } from "react-router-dom";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '90%',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'inherit',
  border: 'none',
  color: 'white'
}));

const Footer = () => {
  const location = useLocation();
  const isActiveMobile = (path) => {
    return location.pathname === path ? { textDecoration:'underline' } : {};
  };
  return (

    <Box className='footer' sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} justifyContent="space-around">
        <Grid item xs={12} md={4}>

          <DemoPaper variant="outlined">
            <Typography variant="body1" align="center" color="white" className='footer-label'>Contact Address</Typography>
            <Box style={{ marginTop: '10px' }} >
              <Typography variant="body1" className='font-size' sx={{ mb: 1 }}>
                <strong>Email:</strong> example@example.com
              </Typography>
              <Typography className='font-size' variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> +123 456 7890
              </Typography>
              <Typography className='font-size' variant="body1" sx={{ mb: 1 }}>
                <strong>Address:</strong> 123 Main St, City, Country
              </Typography>
            </Box>
          </DemoPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <DemoPaper variant="outlined">
            <Typography variant="body1" align="center" color="yellow" className='footer-label'>Site Map</Typography>
            <Box style={{ marginTop: '10px' }}  >
              <Breadcrumbs aria-label="breadcrumb" className='font-size nav'>
                <Link underline="hover" color="white" href="/" style={isActiveMobile('/')}>
                  Home
                </Link>
                <Link underline="hover" color="white" href="/products" style={isActiveMobile('/products')}>
                  Products
                </Link>
                <Link underline="hover" color="white" href="/about" style={isActiveMobile('/about')}>
                  About
                </Link>
                <Link underline="hover" color="white" href="/contact" style={isActiveMobile('/contact')}>
                  Contact Us
                </Link>
                <Link underline="hover" color="white" href="/register" style={isActiveMobile('/register')}>
                  Register
                </Link>
                <Link underline="hover" color="white" href="/login" style={isActiveMobile('/login')}>
                  Login
                </Link>
              </Breadcrumbs>
            </Box>
          </DemoPaper>
        </Grid>
        <Grid item xs={12} md={4}>

          <DemoPaper variant="outlined"> <Typography variant="body1" align="center" color="white" className='footer-label'>Social Media</Typography>
            <Box color="white" style={{ marginTop: '10px' }}  >
              <IconButton style={{ color: 'white' }} component="a" href="https://www.facebook.com/#" target='_blank'>
                <FacebookIcon color="white" />
              </IconButton>

              {/* Instagram Icon */}
              <IconButton style={{ color: 'white' }} component="a" href="https://www.instagram.com/yourpage" target='_blank'>
                <InstagramIcon color="white" />
              </IconButton>

              {/* LinkedIn Icon */}
              <IconButton style={{ color: 'white' }} component="a" href="https://www.linkedin.com/yourpage" target='_blank'>
                <LinkedInIcon color="white" />
              </IconButton>
            </Box>
          </DemoPaper>         
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="body1" align="center" color="white" sx={{ mb: 4 }}>
            &copy; 2024 Developed By Dynasty
          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Footer;
