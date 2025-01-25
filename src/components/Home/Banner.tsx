import React, { useRef } from "react";
import { Carousel } from "antd";

const Banner: React.FC = () => {
  const carouselRef = useRef<any>(null); // Carousel এর জন্য ref তৈরি

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  return (
    <div className="mx-auto bg-gray-100 mt-2 relative">
      <Carousel
        ref={carouselRef}
        effect="fade"
        autoplay
        className="min-h-[300px]"
      >
        {/* 1 */}
        <div
          className="
          h-[500px] bg-[#acd0b628]"
        >
          <div className="container h-full w-full flex items-center justify-between mx-auto">
            <img
              //   src="https://i.postimg.cc/DfSSnXyy/01-removebg-preview.png"
              src="https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png"
              alt="banner1"
              className="object-cover"
            />
            {/* Text */}
            <div className="w-1/2 hidden lg:block">
              <h1 className="text-4xl font-bold text-back mb-4">
                {/* Duranta Alloy 21 Spd <br /> */}
                Dynamic X 800 26 Blue
              </h1>
              <p className="text-[#636363dc] text-lg mb-6 font-sans">
                The Duranta Alloy Dynamic X 800 is built for speed and
                durability. With a lightweight alloy frame, 21-speed gear
                system, and 26-inch wheels, this bike ensures a smooth and
                powerful ride, whether you're conquering city streets or rugged
                trails. The bold blue design adds a touch of style to your
                cycling adventures.
              </p>
              <ul className="text-[#000] text-base list-disc list-inside">
                <li>21-Speed Shimano Gear System</li>
                <li>Lightweight Alloy Frame</li>
                <li>26-Inch Durable Wheels</li>
                <li>Bold and Dynamic Blue Color</li>
                <li>Perfect for Both Urban and Off-Road Trails</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div
          className="
          h-[500px] bg-[#acd0b628]"
        >
          <div className="container h-full w-full flex items-center justify-between mx-auto">
            <img
              src="https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png"
              alt="banner1"
              className="object-cover"
            />
            {/* Text */}
            <div className="w-1/2 hidden lg:block">
              <h1 className="text-4xl font-bold text-back mb-4">
                Duranta Alloy 18
                {/* Spd Phantom Z 500 27.5 Red */}
              </h1>
              <p className="text-[#636363dc] text-lg mb-6 font-sans">
                The Duranta Alloy Phantom Z 500 is designed for riders who
                demand both performance and comfort. Featuring a sturdy alloy
                frame, an 18-speed gear system, and 27.5-inch wheels, this bike
                delivers exceptional control and speed. Its striking red design
                makes it a standout choice for adventurous spirits.
              </p>
              <ul className="text-[#000] text-base list-disc list-inside">
                <li>18-Speed Shimano Gear System</li>
                <li>Durable and Lightweight Alloy Frame</li>
                <li>27.5-Inch High-Performance Wheels</li>
                <li>Eye-Catching Red Color</li>
                <li>Ideal for Daily Commutes and Weekend Adventures</li>
              </ul>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#080b08d8] text-gray-700  px-3 py-2 hover:bg-gray-600"
      >
        <p className="text-white text-2xl">❮</p>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#080b08d8] text-gray-700  px-3 py-2 hover:bg-gray-600"
      >
        <p className="text-white text-2xl">❯</p>
      </button>
    </div>
  );
};

export default Banner;
