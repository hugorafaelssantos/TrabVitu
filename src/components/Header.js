// src/components/Header.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'pink',
        height: '60px',
        color: 'white',
        textAlign: 'center',
        zIndex: 1000,
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6">
        <Link to="/">
          <img 
            src={Logo} 
            alt="Logo" 
            style={{
              width: 'auto', 
              height: '60px',
            }}
          />
        </Link>
      </Typography>
    </Box>
  );
};

export default Header;
