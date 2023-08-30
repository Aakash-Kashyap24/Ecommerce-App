'use client'
import React, { useEffect, useState } from 'react';
import { IconButton, Popover, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavCart: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const open = true;


  const id = open ? 'navcart-popover' : undefined;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <IconButton
        color="inherit"
      >
        <ShoppingCartIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          width: 'auto', // or set a specific width
          '& .MuiPaper-root': {
            minWidth: '250px', // Set a minimum width for the popover content
          },
        }}
      >
        <div style={{ padding: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Your Cart
          </Typography>
          {/* Add your cart items or empty cart message here */}
          {/* You can use your own components to display cart content */}
          {/* For example: */}
          {/* <CartItems /> */}
          {/* <EmptyCartMessage /> */}
          <Button variant="contained" color="primary" onClick={handleMouseLeave}>
            Close
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default NavCart;
