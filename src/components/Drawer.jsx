// src/components/Drawer.jsx

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const drawerWidth = 250;

const CustomDrawer = ({ isOpen, onComponentClick, onDrawerToggle }) => {
    const handleItemClick = (path) => {
        onComponentClick(path);
        onDrawerToggle(); // Close the drawer after clicking an item
    };

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isOpen}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List>
                <ListItem button onClick={() => handleItemClick('/accordions/accordions.json')}>
                    <ListItemText primary="Accordions" />
                </ListItem>
                <ListItem button onClick={() => handleItemClick('/backgrounds/backgrounds.json')}>
                    <ListItemText primary="Backgrounds" />
                </ListItem>
                <ListItem button onClick={() => handleItemClick('/breadcrumbs/breadcrumbs.json')}>
                    <ListItemText primary="Breadcrumbs" />
                </ListItem>
                <ListItem button onClick={() => handleItemClick('/buttons/buttons.json')}>
                    <ListItemText primary="Buttons" />
                </ListItem>
                {/* Add more items as needed */}
            </List>
            <Divider />
        </Drawer>
    );
};

export default CustomDrawer;
