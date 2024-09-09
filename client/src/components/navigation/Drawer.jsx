import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Link } from '@mui/material';

const DrawerComponent = ({ isOpen, toggleDrawer }) => {
    return (

        <Drawer
            anchor="left" open={isOpen} onClose={toggleDrawer(false)}
            sx={{ '& .MuiDrawer-paper': { width: '20%' } }} // Set the drawer width
        >
            <List sx={{padding:'20px'}}>
                <ListItem button onClick={toggleDrawer(false)}>
                    <Link component={RouterLink} to="/" underline="none" color="inherit">
                        <ListItemText primary="Home" />
                    </Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer(false)}>
                    <Link component={RouterLink} to="/about" underline="none" color="inherit">
                        <ListItemText primary="About" />
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerComponent;