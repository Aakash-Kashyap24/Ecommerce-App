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
  return (
    <div className={`flex w-full p-[25px] items-center justify-between bg-${backgroundColor||"blue-50"}`}>
      <div className="content flex gap-3 flex-col w-full">
        <span className={`text-[15px] text-${textColor}`}>{description}</span>
        <span className={`text-[45px] font-bold text-${textColor}`}>{title}</span>
        <Link href={link} className={`text-${textColor}`}>
          View Collection
        </Link>
      </div>
      <div className="Image flex w-full">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Poster;
