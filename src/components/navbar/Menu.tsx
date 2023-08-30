"use client";
import React, { useState } from "react";
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

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        className="w-full relative lg:px-[75px]"
        PaperProps={{
          style: {
            minWidth: 250,
            maxWidth: 500,
            paddingLeft: 50,
            paddingRight: 50,
          },
        }}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <br />
        <br />
        <div className="absolute top-[25px] right-[25px]">
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </div>

        <List className="block md:hidden">
          <ListItem button>
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
        <div className="lghidden p-4">
          <NewsLetter />
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
