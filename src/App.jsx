// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import ComponentCard from './components/ComponentCard';
import { loadComponentsFromAPI } from './utils/api';

const App = () => {
  const [components, setComponents] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    handleComponentClick('/accordions/accordions.json');
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(prev => !prev);
  };

  const handleComponentClick = async (path) => {
    try {
      const data = await loadComponentsFromAPI(path);
      setComponents(data);
    } catch (error) {
      console.error('Error fetching component data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
      <CssBaseline />
      <Navbar onDrawerToggle={handleDrawerToggle} />
      <Drawer isOpen={drawerOpen} onComponentClick={handleComponentClick} onDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        style={{
          flexGrow: 1,
          padding: '20px',
          marginLeft: drawerOpen ? 250 : 0,
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {components.map((component) => (
              <Grid item xs={12} key={component.id}>
                <ComponentCard component={component} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default App;
