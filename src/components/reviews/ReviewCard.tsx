import React from "react";
import image from "../../../public/logo_medium.png";
import Image from "next/image";
{/* @ts-ignore */}
import ReactStars from "react-rating-stars-component";


const ReviewCard = () => {
  const data = {
    name: "Akash Kumar",
    rating: 5,
    date: "April 19, 2020",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  };
  return (
    <div className="flex  gap-3 w-full py-2">
        <br/>
      <div className="profile_img rounded-full overflow-hidden  flex items-start ">
        <Image src={image} alt="profile_img object-cover   rounded-full" width={75} height={75} />
      </div>
      <div className="content w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="font-bold ">{data?.name}</span>
        <div className="flex gap-4 items-center">
        <ReactStars
          count={5}
          value={data?.rating}
          size={20}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
          <div className="flex w-[1px]  h-5 bg-gray-400"></div>
          <span className="font-medium text-sm text-gray-600">{data?.date}</span>
        </div>
        </div>
        <div className="flex">
          <span className="text-gray-500">{data?.review}</span>

        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
