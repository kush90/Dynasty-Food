import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import Box component
import Typography from '@mui/material/Typography';
import MediaCard from '../../Components/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#781fde', // Define your success color here
    },
  },
});
const Products = () => {
  const length10Array = Array.from({ length: 10 });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, height: '800px' }} className="product-height">
        <Grid container spacing={2}>


          {/* Second column with two rows */}
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Paper style={{ padding: 10, boxShadow: 'none', margin: 'auto' }}>
                  <Typography variant="h6" gutterBottom style={{ color: '#781fde' }}>
                    Products
                  </Typography>
                  <MediaCard style={{ margin: '5px' }} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>

  )
}

export default Products