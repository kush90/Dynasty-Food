import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import Box component
import Typography from '@mui/material/Typography';

import logo from '../../assets/app.jpeg'
import BusinessIcon from '@mui/icons-material/Business';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';

const ResponsiveImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  position: 'relative',
  top: '13%',
});

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '610px' }} className="about-height">
      <Grid container spacing={2}>
        {/* First column with one row */}
        <Grid item xs={12} sm={4} className='contact-map' style={{ height: '595px' }}>
          <Paper className='about-paper' sx={{ height: '100%', boxShadow: 'none' }}>
            <ResponsiveImage src={logo} alt="Logo" />
          </Paper>
        </Grid>

        {/* Second column with two rows */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ minHeight: '300px' }}>
              <Paper style={{ padding: 10 }} sx={{ height: '100%', boxShadow: 'none' }}>
                <Typography variant="h6" gutterBottom style={{color:'black'}}>
                  Company History
                </Typography>
                <Box style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                  <Typography variant="body2" color="text.secondary">
                  We have expanded into Thailand's leading online expat stores, offering a wide range of food and drinks imported directly imported from the UK and Europe. We work directly with several leading food and drink manufacturers in the UK to bring you the best of British and European foods.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ maxHeight: '180px' }} className='parent'>
              <Paper style={{ padding: 10 }} sx={{ height: '100%', marginTop: '20px', boxShadow: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 1,
                      width: 185,
                      height: 200,
                    },
                  }}
                >
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>


                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <BusinessIcon color='default'  style={{ width: '50%', height: '50%', marginTop: '20px'}} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'> Established Years (10 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <GroupAddIcon color="default" style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Suppliers (100 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <ListAltIcon color="default" style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Products (3000 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <GroupsIcon color='default' style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Staffs (20 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
