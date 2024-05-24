import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageSlider from '../../Components/Slider';
import PropTypes from 'prop-types';
import MediaCard from '../../Components/Card';
import { readExcelFile2,readExcelFile1 } from "../../Helper";
import home from '../../assets/home.xlsx';
import brand from '../../assets/brand.xlsx'
import ReactPaginate from 'react-paginate';


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
const tabLabels = ['Top UK & US Brands', 'New arrival', 'Special Price', 'Best seller'];


const Home = () => {
  const [brands, setBrands] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [pageNumber, setPageNumber] = useState(0); // State for current page number
  const [loading, setLoading] = useState(false);

  const productsPerPage = 15; // Number of products per page
  const handleChange = (event, newValue) => {
    setValue(newValue);
    getProduct(tabLabels[newValue])
  };

  const getProduct = async (byValue) => {
    setLoading(true);
    let result = await readExcelFile2(home, byValue);
    setProducts(result);
    setLoading(false)
  }
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const getBrands = async () => {
    setLoading(true);
    let result = await readExcelFile1(brand);
    setBrands(result);
    setLoading(false);

  }

  useEffect(() => {
    setPageNumber(0);
    // getProduct(home, tabLabels[0]);
    getBrands()
  }, []);
  const displayProducts = products.slice(pageNumber * productsPerPage, (pageNumber + 1) * productsPerPage);

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
                    {/* <MediaCard products={displayProducts} style={{ margin: '5px' }} /> */}
                    {loading ? (
                      <div className="loading-container">
                        <span>Loading...</span>
                      </div>
                    ) :
                      <MediaCard products={brands}  showPreview="false" type="brands"  style={{ margin: '5px' }} />
                    }
                  </Box>
                </div>
                <div role="tabpanel" hidden={value !== 1} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                  <Box sx={{ p: 3 }}>
                    {loading ? (
                      <div className="loading-container">
                        <span>Loading...</span>
                      </div>
                    ) :
                      <MediaCard products={displayProducts} style={{ margin: '5px' }} />
                    }

                  </Box>
                  <Box>
                    {
                      (!loading && displayProducts.length > 0) &&
                      <ReactPaginate
                        pageCount={Math.ceil(products.length / productsPerPage)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName={'active'}
                        disabledClassName={'disabled'}
                        previousLabel={<span style={{ color: 'black' }}>Previous</span>} // Change color of previous button text
                        nextLabel={<span style={{ color: 'black' }}>Next</span>} // Change color of next button text

                      />
                    }
                  </Box>
                </div>
                <div role="tabpanel" hidden={value !== 2} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                  <Box sx={{ p: 3 }}>
                    {loading ? (
                      <div className="loading-container">
                        <span>Loading...</span>
                      </div>
                    ) :
                      <MediaCard products={displayProducts} style={{ margin: '5px' }} />
                    }
                  </Box>
                  <Box>
                    {
                      (!loading && displayProducts.length > 0) &&
                      <ReactPaginate
                        pageCount={Math.ceil(products.length / productsPerPage)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName={'active'}
                        disabledClassName={'disabled'}
                        previousLabel={<span style={{ color: 'black' }}>Previous</span>} // Change color of previous button text
                        nextLabel={<span style={{ color: 'black' }}>Next</span>} // Change color of next button text

                      />
                    }
                  </Box>
                </div>
                <div role="tabpanel" hidden={value !== 3} id="simple-tabpanel-0" aria-labelledby="simple-tab-0">
                  <Box sx={{ p: 3 }}>
                    {loading ? (
                      <div className="loading-container">
                        <span>Loading...</span>
                      </div>
                    ) :
                      <MediaCard products={displayProducts} style={{ margin: '5px' }} />
                    }
                  </Box>
                  <Box>
                    {
                      (!loading && displayProducts.length > 0) &&
                      <ReactPaginate
                        pageCount={Math.ceil(products.length / productsPerPage)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName={'active'}
                        disabledClassName={'disabled'}
                        previousLabel={<span style={{ color: 'black' }}>Previous</span>} // Change color of previous button text
                        nextLabel={<span style={{ color: 'black' }}>Next</span>} // Change color of next button text

                      />
                    }
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