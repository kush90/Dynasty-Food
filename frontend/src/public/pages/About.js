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
  height: '100%',
  display: 'block',
});

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '610px' }} className="about-height">
      <Grid container spacing={2}>
        {/* First column with one row */}
        <Grid item xs={12} sm={4} className='contact-map' style={{ height: '595px' }}>
          <Paper sx={{ height: '100%', boxShadow: 'none' }}>
            <ResponsiveImage src={logo} alt="Logo" />

          </Paper>
        </Grid>

        {/* Second column with two rows */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ minHeight: '300px' }}>
              <Paper style={{ padding: 10 }} sx={{ height: '100%', boxShadow: 'none' }}>
                <Typography variant="h6" gutterBottom style={{color:'#781fde'}}>
                  Company History
                </Typography>
                <Box style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                  <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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
                        <BusinessIcon  style={{ width: '50%', height: '50%', marginTop: '20px', color:'#781fde' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'> Established Years (5 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <GroupAddIcon color="success" style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Suppliers (30 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <ListAltIcon color="error" style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Products (3000 +)</span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', width: 'calc(25% - 20px)', height: '100%' }} className='child'>
                    <Grid container spacing={1}>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <GroupsIcon color='info' style={{ width: '50%', height: '50%', marginTop: '20px' }} />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <span className='about-icon-text'>Staffs (30 +)</span>
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
