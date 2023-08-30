import React from "react";
import ProductCard from "./ProductCard";
import tv from "../../../public/png/Tv2-removebg-preview.png";
import phone from "../../../public/png/phone.png";
import headphones from "../../../public/png/headphones-removebg-preview.png";
import phone2 from "../../../public/png/phonoe.jpg";
// import tv from "../../../public/png/Tv2-removebg-preview.png";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={1}
        name="Product 1"
        price={5999}
      />
      <ProductCard
        imageSrc={headphones}
        numberOfReviews={4}
        rating={5}
        id={2}
        name="Product 2"
        price={5999}
      />
      <ProductCard
        imageSrc={phone}
        numberOfReviews={4}
        rating={5}
        id={3}
        name="Product 3"
        price={5999}
      />
      <ProductCard
        imageSrc={phone2}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
       <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
       <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
       <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
       <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
       <ProductCard
        imageSrc={tv}
        numberOfReviews={4}
        rating={5}
        id={4}
        name="Product 4"
        price={5999}
      />
    </div>
  );
};

export default AllProducts;
