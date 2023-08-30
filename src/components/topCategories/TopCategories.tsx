import Image from "next/image";
import React from "react";

interface TopCategoriesProps {
  name: string;
  image: any;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ name, image }) => {
  return (
    <div className="relative top-category w-[150px] h-[200px]   flex flex-col items-center justify-center">
      <Image src={image} alt={name} layout="responsive" objectFit="cover" />
      <h3 className="absolute bottom-0">{name}</h3>
    </div>
  );
};

export default TopCategories;
