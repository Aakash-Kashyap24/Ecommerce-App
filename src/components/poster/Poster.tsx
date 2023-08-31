import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";

interface PosterProps {
  image: any;
  link: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  
}

const Poster: React.FC<PosterProps> = ({
  image,
  title,
  link,
  description,
  backgroundColor,
  textColor,
}) => {
  const bgClass = `bg-${backgroundColor}`;
  const textClass = `text-${textColor}`;

  return (
    <div className={`flex rounded-sm w-full p-[10px] items-center justify-between  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ${bgClass}`}>
      <div className="content flex gap-1 flex-col w-full">
        <span className={`text-[15px] ${textClass}`}>{description}</span>
        <span className={`text-[45px] md:text-29px font-bold ${textClass}`}>{title}</span>
        <Link href={link} className={`text-red-500 no-underline`}>
          View Collection
        </Link>
      </div>
      <div className="Image flex w-full">
        <Image
          src={image}
          alt={title}
          height={400}
        
          layout=""
          objectFit="contain"
          className="h-[250px] md:h-[150px] object-contain w-full"
        />
      </div>
    </div>
  );
};

export default Poster;
