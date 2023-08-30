"use client";

import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import Image from "next/image";
{/* @ts-ignore */}
import ReactStars from "react-rating-stars-component";

interface ViewProductProps {
  title: string;
  imageSrc: any;
  originalPrice: number;
  sellingPrice: number;
  offer?: string;
  stock: number;
  numberOfReviews: number;
  rating: number;
  description: string;
}

const ViewProduct: React.FC<ViewProductProps> = ({
  title,
  imageSrc,
  originalPrice,
  sellingPrice,
  offer,
  stock,
  description,
  numberOfReviews,
  rating,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-[35px]   justify-between">
      <div className="Image border flex flex-col items-center md:items-start  w-full mx-auto md:m-0 max-w-[450px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="responsive"
          className="w-full object-contain"
          width={450}
          height={450}
          //   layout="fill"
        />

        <div className="flex h-[120px] gap-[10px] items-center">
          <div className="w-full">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive"
              className=" object-contain"
              width={50}
              height={50}
              //   layout="fill"
            />
          </div>
          <div className="w-full  ">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive"
              className=" object-contain"
              width={50}
              height={50}
              //   layout="fill"
            />
          </div>
          <div className="w-full ">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive"
              className=" object-contain"
              width={50}
              height={50}
              //   layout="fill"
            />
          </div>
          <div className="w-full ">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive"
              className=" object-contain"
              width={50}
              height={50}
              //   layout="fill"
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto md:m-0 w-full min-w-[250px] max-w-[500px]   flex flex-col gap-3">
        <span className="text-[18px] font-bold text-black">{title}</span>
        <div className="flex justify-between">
          <span className="  text-red-500 font-bold text-[25px]">${sellingPrice}</span>
          {/* <span className="text-[18px]  text-red-500 font-bold">${originalPrice}</span> */}
          <ReactStars
            count={4.5}
            value={rating}
            size={20}
            edit={false}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <span className="text-gray-400">{description}</span>
        <div className="flex flex-col gap-2">
          <span className="text-gray-400">
            1 Year AL Jazeera Brand Warranty
          </span>
          <span className="text-gray-400">30 Day Return Policy</span>
          <span className="text-gray-400">Cash on Delivery available</span>
        </div>

        {stock > 0 ? (
          <span className="text-blue-500">In Stock</span>
        ) : (
          <span className=" text-red-500">Out Of Stock</span>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
