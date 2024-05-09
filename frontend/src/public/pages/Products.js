import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MediaCard from '../../Components/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { readExcelFile1 } from "../../Helper";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SearchOffIcon from '@mui/icons-material/SearchOff';

// Import pagination library
import ReactPaginate from 'react-paginate';

const theme = createTheme({
  palette: {
    primary: {
      main: '#781fde',
    },
  },
});

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(0); // State for current page number

  const productsPerPage = 15; // Number of products per page

  const getProduct = async () => {
    setLoading(true);
    let result = await readExcelFile1();
    setProducts(result);
    setLoading(false);

  }

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    setPageNumber(0);
  }, [searchTerm, categorySearchTerm]);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const clearSearch = () =>{
    setCategorySearchTerm('');
    setSearchTerm('')
  }
  // Filter products based on search term and category search term
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.category.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const displayedProducts = filteredProducts
    .slice(pageNumber * productsPerPage, (pageNumber + 1) * productsPerPage);


    const clearButtonClass = (searchTerm !== '' || categorySearchTerm !== '') ? 'active-clear-filter' : '';

  return (
    
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, height: '800px' }} className="product-height">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Paper style={{ padding: 10, boxShadow: 'none', margin: 'auto' }}>
                  <Typography variant="h6" gutterBottom style={{ color: '#781fde' }}>
                    Products
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <TextField
                        sx={{ marginLeft: '15px' }}
                        focused={true}
                        className='product-search'
                        id="standard-basic"
                        label="Product Category"
                        variant="standard"
                        placeholder='Search ...'
                        value={categorySearchTerm}
                        onChange={(e) => setCategorySearchTerm(e.target.value)}
                      />
                      <TextField
                        sx={{ marginLeft: '15px' }}
                        focused={true}
                        className='product-search'
                        id="standard-basic"
                        label="Product Name"
                        variant="standard"
                        placeholder='Search ...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Button variant="outlined" onClick={()=>clearSearch()} className={clearButtonClass} endIcon={<SearchOffIcon />}>
                        Clear Filter
                      </Button>
                    </Grid>
                  </Grid>
                  {loading ? (
                    <div className="loading-container">
                      <span>Loading...</span>
                    </div>
                  ) : displayedProducts.length > 0 ? (
                    <MediaCard products={displayedProducts} style={{ margin: '5px' }} />
                  ) : (
                    <div className="loading-container">
                      <span>No products found.</span>
                    </div>
                  )}

                  {/* Pagination component */}
                  {!loading && filteredProducts.length > productsPerPage && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '3,8%' }}>
                      <ReactPaginate
                        pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName={'active'}
                        disabledClassName={'disabled'}
                      />
                    </Box>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Products;
