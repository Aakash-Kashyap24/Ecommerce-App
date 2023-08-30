"use client";

import React from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
{/* @ts-ignore */}
import ReactStars from "react-rating-stars-component";
import { RxReload } from "react-icons/rx";
import { HiOutlineCash } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
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
          <span className="  text-red-500 font-bold text-[25px]">
            ${sellingPrice}
          </span>
          {/* <span className="text-[18px]  text-red-500 font-bold">${originalPrice}</span> */}
          <div className="flex gap-[5px] items-center">
            <ReactStars
              count={4.5}
              value={rating}
              size={20}
              edit={false}
              isHalf={true}
              activeColor="#ffd700"
            />

            <span>( {numberOfReviews})</span>
          </div>
        </div>
        <span className="text-gray-700">{description}</span>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 flex gap-2 items-center">
            <BsShieldCheck className="text-red-500" />
            <span className="text-gray-600">
              1 Year AL Jazeera Brand Warranty
            </span>
          </p>
          <p className="text-gray-400 flex gap-2  items-center">
            <RxReload className="text-red-500" />
            <span className="text-gray-600">30 Day Return Policy</span>
          </p>
          <p className=" flex items-center gap-2">
            <HiOutlineCash className="text-red-500" />
            <span className="text-gray-600">Cash on Delivery available</span>
          </p>
        </div>

        {stock > 0 ? (
          <span className="text-blue-500">In Stock</span>
        ) : (
          <span className=" text-red-500">Out Of Stock</span>
        )}
        <hr />
        <div className="button flex items-center gap-[20px]">
          <span className="flex cursor-pointer p-[10px] w-fit rounded-full bg-blue-50">
            <BiMinus />
          </span>
          <input
            placeholder="1"
            className="border  p-2 w-[75px]"
            type="number"
          />
          <span className="flex cursor-pointer p-[10px] w-fit rounded-full bg-blue-50">
            <AiOutlinePlus />
          </span>
          <Button className="cursor-pointer p-[10px] px-[15px] hover:bg-blue-500 text-white bg-red-600 ">
            Add To Cart
          </Button>
          <span className="flex cursor-pointer p-[10px] w-fit rounded-full bg-blue-50">
            <AiOutlineHeart />
          </span>
        </div>
        <hr />
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gray-500">
            SKU: <span className="text-black">ZR45VGRT</span>
          </p>
          <p className="text-gray-500">
            CATEGORIES:{" "}
            <span className="text-black"> Best Sellers, Headphones</span>
          </p>
          <p className="text-gray-500">
            TAG: <span className="text-black">Headphone</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
