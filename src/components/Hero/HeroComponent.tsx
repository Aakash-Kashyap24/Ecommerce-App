import React from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

interface HeroProps {
  imageSrc?: any;
  title: string;
  description: string;
  isButton: boolean;
  buttonName: string;
  switchPosition?: boolean;
}

const HeroComponent: React.FC<HeroProps> = ({
  imageSrc,
  switchPosition,
  title,
  description,
  isButton,
  buttonName,
}) => {
  return (
    <div className="w-full py-10 md:py-20 flex flex-col md:flex-row items-center justify-between">
      {switchPosition ? (
        <>
          <div className="md:w-1/2 flex justify-center overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src={imageSrc}
                alt={title}
                height={400}
                // layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-5 justify-center">
            <Typography
              variant="h4"
              className="text-4xl text-center md:text-right md:text-5xl lg:text-6xl font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-center md:text-right md:text-xl text-gray-600"
            >
              {description}
            </Typography>
            {isButton && (
              <Button
                variant="contained"
                color="primary"
                className="px-6 w-fit py-2 m-auto md:m-0 md:px-8 bg-yellow-400 hover:bg-blue-500"
              >
                {buttonName}
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 flex flex-col gap-5 justify-center">
            <Typography
              variant="h4"
              className="text-4xl text-center md:text-left md:text-5xl lg:text-6xl font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              className="text-lg text-center md:text-left md:text-xl text-gray-600"
            >
              {description}
            </Typography>
            {isButton && (
              <Button
                variant="contained"
                color="primary"
                className="px-6 w-fit py-2 m-auto md:m-0 md:px-8 bg-yellow-400 hover:bg-blue-500"
              >
                {buttonName}
              </Button>
            )}
          </div>
          <div className="md:w-1/2 flex justify-center overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src={imageSrc}
                alt={title}
                // layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroComponent;
