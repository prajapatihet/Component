// src/components/Navbar.jsx

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onDrawerToggle }) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={onDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Component Display
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
