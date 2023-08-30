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
    <div className={`flex rounded-sm w-full p-[25px] items-center justify-between ${bgClass}`}>
      <div className="content flex gap-3 flex-col w-full">
        <span className={`text-[15px] ${textClass}`}>{description}</span>
        <span className={`text-[45px] font-bold ${textClass}`}>{title}</span>
        <Link href={link} className={`${textClass}`}>
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
