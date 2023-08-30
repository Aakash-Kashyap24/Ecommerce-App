import ViewProduct from "@/components/products/ViewProduct";
import img from "../../../public/png/phone.png";

const page = () => {
  return (
    <div className="max-w-[1100px] m-auto p-[25px]">
      <ViewProduct
        imageSrc={img}
        description="This is normal Description of a Product"
        title="Redmi Note 9 Pro Max"
        stock={50}
        originalPrice={250}
        sellingPrice={200}
        rating={4}
        numberOfReviews={50}
      />
    </div>
  );
};

export default page;
