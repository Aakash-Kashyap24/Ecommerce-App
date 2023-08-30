"use client";

import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { ShoppingCart, Save, FavoriteBorder } from "@mui/icons-material";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  numberOfReviews: number;
  imageSrc: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  rating,
  numberOfReviews,
  imageSrc,
}) => {
  return (
    <Card className="w-full py-6  shadow-md cursor-pointer rounded-md overflow-hidden">
      <Image src={imageSrc} alt={name} className="w-full h-auto" />
      <CardContent>
        <Typography variant="h5" className="font-bold" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          ${price}
        </Typography>
        <ReactStars
          count={5}
          value={rating}
          size={20}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
      </CardContent>
      <CardActions className="flex justify-between items-center">
        <Button variant="contained"  color="primary" className=" bg-blue-400">
          <ShoppingCart />
        </Button>
        <Button variant="outlined" color="primary" >
          <FavoriteBorder />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
