"use client";

import React, { useState } from "react";
import { Button, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import HeroComponent from "./HeroComponent";
import heroImage from "../../../public/png/Tv2-removebg-preview.png";

const images = [
  { src: "/png/Tv2-removebg-preview.png", alt: "TV" },
  { src: "/png/phone.png", alt: "Phone" },
  { src: "/png/headphones-removebg-preview.png", alt: "Headphones" },
];

const texts = [
  "Watch your favorite shows on our high-quality TV!",
  "Experience our latest mobile phone with advanced features.",
  "Enjoy immersive audio with our premium headphones.",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col py-[20px] px-[25px] md:px-0 min-h-[50vh] items-center justify-center m-auto max-w-[1100px]">
      <HeroComponent
      imageSrc={heroImage}
        title="Featured Product"
        description="Watch your favorite shows on our high-quality TV!"
        isButton={true}
        buttonName="Shop Now"
      />
      <br />
    </div>
  );
};

export default Hero;
