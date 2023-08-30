"use client";
import React, { useState } from "react";
import Image from 'next/image';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NewsLetter from "../newLetter/NewsLetter";
import { Close } from "@mui/icons-material";
import logo from '../../../public/logo_medium.png'

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div 
    className=""
    >
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        sx={{
          padding:25,
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
        className="w-full   px-[25px] lg:px-[75px]"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <br className="hidden md:block" />
        <br />
        <div className="flex px-4 justify-between items-center">
          
            <Image className="md:opacity-0 " src={logo} alt="" width={55} height={50} />
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </div>

        <List className="flex flex-col items-center w-full   md:hidden">
          <ListItem button className="w-full">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
        <div className="hidde px-4">
          <NewsLetter />
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
