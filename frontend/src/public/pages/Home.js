import React,{useEffect} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageSlider from '../../Components/Slider';
import PropTypes from 'prop-types';
import MediaCard from '../../Components/Card';
import { readExcelFile } from "../../Helper";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   readExcelFile();
  // }, []);

  return (
      <Box sx={{ flexGrow: 1, width: '100%' }} height="1200px" className="home-height">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <Paper style={{ padding: 10, minHeight: '145px', boxShadow: 'none' }}>
                  <ImageSlider />
                </Paper>
              </Grid>
              <Grid item xs={12} className='contact-form'>
                <Paper style={{ padding: 10, height: '268px', boxShadow: 'none' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                     sx={{
                      '& .Mui-selected': {
                        color: 'black',
                        borderBottom: '2px solid black',
                      },
                      '& .MuiTabs-indicator': {
                        backgroundColor: 'black', // Set the indicator color to black
                      },
                    }}
                      value={value}
                      onChange={handleChange}
                      textColor="primary" // Set the text color using inline styles
                      indicatorColor="primary"
                      aria-label="secondary tabs example"
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                    >
                      <Tab {...a11yProps(0)} label="Top UK & US Brands" />
                      <Tab {...a11yProps(1)} label="New Arrivals" />
                      <Tab {...a11yProps(2)} label="Special Offers" />
                      <Tab {...a11yProps(3)} label="Best Sellers" />
                    </Tabs>
                  </Box>
                  <div role="tabpanel" hidden={value !== 0} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                    <Box sx={{ p: 3 }}>
                      <MediaCard products={itemData} style={{ margin: '5px' }} />
                    </Box>
                  </div>
                  <div role="tabpanel" hidden={value !== 1} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                    <Box sx={{ p: 3 }}>
                      <MediaCard products={itemData} style={{ margin: '5px' }} />
                    </Box>
                  </div>
                  <div role="tabpanel" hidden={value !== 2} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                    <Box sx={{ p: 3 }}>
                      <MediaCard products={itemData} style={{ margin: '5px' }} />
                    </Box>
                  </div>
                  <div role="tabpanel" hidden={value !== 3} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                    <Box sx={{ p: 3 }}>
                      <MediaCard products={itemData} style={{ margin: '5px' }} />
                    </Box>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Home

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    productName: 'Breakfast',
    description: 'lorem ipsum',
    price: 130,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    productName: 'Burger',
    description: 'lorem ipsum',
    price: 150,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    productName: 'Camera',
    description: 'lorem ipsum',
    price: 80,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    productName: 'Coffee',
    description: 'lorem ipsum',
    price: 90,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    productName: 'Hats',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    productName: 'Honey',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    productName: 'Basketball',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    productName: 'Fern',
    description: 'lorem ipsum',
    price: 230,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    productName: 'Mushrooms',
    description: 'lorem ipsum',
    price: 77,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    productName: 'Tomato basil',
    description: 'lorem ipsum',
    price: 330,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    productName: 'Sea star',
    description: 'lorem ipsum',
    price: 200,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    productName: 'Bike',
    description: 'lorem ipsum',
    price: 30,
  },
];