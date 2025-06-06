// src/components/Layout.js
import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      backgroundColor="#f0f0f0"
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
