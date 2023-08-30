import Hero from "@/components/Hero/Hero";
import HeroComponent from "@/components/Hero/HeroComponent";
import Poster from "@/components/poster/Poster";
import Image from "next/image";
import poster from '../../public/png/phone.png';
import headphones from '../../public/png/headphones-removebg-preview.png';
import tv from '../../public/png/Tv2-removebg-preview.png';

export default function Home() {
  return (
    <>
      <div className="">
        <div className="bg-blue-50">
          <Hero />
        </div>
        <br />
        <div className="max-w-[1100px] gap-[25px] md:flex  items-center mx-auto">
          
              <Poster
            title="Phone"
            image={poster}
            link="https://example.com"
            description="Gaming Processor"
            backgroundColor="green-100"
            textColor="#333"
          />
                <Poster
            title="Tv"
            image={tv}
            link="https://example.com"
            description="4k Hd display"
            backgroundColor="blue-50"
            textColor="#333"
          />
                   <Poster
            title="Music"
            image={headphones}
            link="https://example.com"
            description="Noise cancelation feature"
            backgroundColor="green-500"
            textColor="#333"
          />
        </div>
        <div className="max-w-[1100px] m-auto">
          <HeroComponent
            title="Featured Product"
            description="Watch your favorite shows on our high-quality TV!"
            isButton={false}
            switchPosition
            buttonName="Shop Now"
          />
        </div>
      </div>
    </>
  );
}
