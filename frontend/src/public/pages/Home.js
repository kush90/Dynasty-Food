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


const theme = createTheme({
  palette: {
    primary: {
      main: '#781fde', // Define your success color here
    },
  },
});

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
    <ThemeProvider theme={theme}>
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
                      <MediaCard style={{ margin: '5px' }} />
                    </Box>
                  </div>
                  <CustomTabPanel value={value} index={1}>
                    <MediaCard style={{ margin: '5px' }} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <MediaCard style={{ margin: '5px' }} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <MediaCard style={{ margin: '5px' }} />
                  </CustomTabPanel>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Home