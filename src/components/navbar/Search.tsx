"use client";

import React, { useState } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Close } from "@mui/icons-material";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <IconButton onClick={handleSearchToggle}>
        <SearchIcon />
      </IconButton>
      {isSearchOpen && (
        <Box
          className="fixed px-[25px] inset-0 shadow-m border w-screen h-[200px] flex-col bg-white flex items-center justify-center z-20"
        >
          <br />
          <br />

          <div className="flex w-full max-w-[1400px]  justify-between items-center">
            <span className="text-gray-600 font-semibold text-[14px]">WHAT ARE YOU LOOKING FOR?</span>
            <InputAdornment position="end">
                  <IconButton onClick={handleSearchToggle}>
                    <Close />
                  </IconButton>
                </InputAdornment>
          </div>
          <TextField
            variant="outlined"
            className=" w-full max-w-[1400px] m-auto"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearchToggle}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />

        </Box>
      )}
    </>
  );
};

export default Search;
