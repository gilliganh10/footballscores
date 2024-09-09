import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../providers/ThemeContext';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { mode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const pageLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Table', path: '/table' },
        { label: 'Cards', path: '/cards' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className="Header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {/* Logo or Brand */}
                        <Typography variant="h6" component="div">
                            Logo
                        </Typography>

                        {/* Page Links */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                            {pageLinks.map((page) => (
                                <Button 
                                    key={page.label} 
                                    color="inherit" 
                                    sx={{ mx: 1 }}
                                    onClick={() => handleNavigation(page.path)}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>

                        {/* User Menu and Dark Mode Toggle */}
                        <div>
                            <IconButton
                                size="large"
                                onClick={toggleTheme}
                                color="inherit"
                            >
                                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
}

export default Header;