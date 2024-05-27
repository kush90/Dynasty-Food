import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import '../../styles/public/public.css'
import logo from '../../assets/app.jpeg';

const pages = [{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: 'About', path: '/about' },
{ name: 'Contact Us', path: '/contact' }, { name: 'Register', path: '/register' }, { name: 'Login', path: '/login' }];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const isActive = (path) => {
        return location.pathname === path ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' } : {};
    };

    const isActiveMobile = (path) => {
        return location.pathname === path ? { backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white' } : {};
    };

    return (
        <AppBar position="static" color='warning' className='header'>
            <Container maxWidth="xl" className='navbar'>
                <Toolbar disableGutters>
                    <Avatar alt="logo" className='logo' src={logo} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily:'TTCommons',
                            fontWeight: 500,
                            color: 'white',
                            fontSize: 17,
                            textDecoration: 'none',
                        }}
                    >
                       <div className='header-text'>
                        <p>DYNASTY</p>
                        <p className='header-second-text'>FOOD PRODUCTS</p>
                       </div>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        navigate(page.path);
                                    }}
                                    style={isActiveMobile(page.path)}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'white',
                            fontSize:13,
                            textDecoration: 'none',
                        }}
                    >
                        DYNASTY FOOD PRODUCTS
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className='menu-title'
                                key={page.name}
                                href={page.path}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate(page.path);
                                }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                style={isActive(page.path)}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;