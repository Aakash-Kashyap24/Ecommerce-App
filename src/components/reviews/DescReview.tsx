"use client";
import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

const DescReview = () => {
  const [showDescription, setShowDescription] = useState(true);

  const handleShowDescriptionClick = () => {
    setShowDescription(true);
  };

  const handleShowReviewsClick = () => {
    setShowDescription(false);
  };

  return (
    <div className="w-full flex flex-col">
      <br />
      <div className="flex gap-2 uppercase">
        <button
          onClick={handleShowDescriptionClick}
          className={`${
            showDescription
              ? " border-b-2 border-opacity-100  text-red-500 border-red-500"
              : "border-opacity-0"
          } py-2 px-4 rounded-none transition uppercase duration-300`}
        >
          Description
        </button>
        <button
          onClick={handleShowReviewsClick}
          className={`${
            !showDescription
            ? " border-b-2 border-opacity-100  text-red-500 border-red-500"
            : "border-opacity-0"
          } rounded-none py-2 px-4 uppercase transition duration-300`}
        >
          Reviews
        </button>
        <hr />
      </div>
      <hr />
      <br />
      {showDescription ? <Description /> : <Reviews />}
    </div>
  );
};

export default DescReview;
