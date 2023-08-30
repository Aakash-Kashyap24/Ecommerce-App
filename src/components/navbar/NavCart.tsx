"use client";

import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
const NavCart: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="flex relative w-full items-center justify-center">
      <IconButton color="inherit" onClick={handleCartClick}>
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%", // Use full width
            maxWidth: "500px", // Set maximum width if needed
            // Responsive minimum width
            minWidth: {
              xs: "250px", // On small mobile screens
              lg: "400px", // On larger screens
            },
          },
        }}
        className="w-full  relative lg:px-[75px]"
        open={cartOpen}
        onClose={handleCartClick}
      >
        <br />
        <div className="flex flex-col m-auto items-center justify-center">
          <Typography className="text-2xl">Your Card Is Empty</Typography>
          <ShoppingCartIcon />
        </div>
      </Drawer>
    </div>
  );
};

export default NavCart;
