import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import Card from "./Card";
import Button from "../ui/Button";

// Sample data for featured bicycles
const featuredBicycles = [
  {
    _id: "1",
    name: "Mountain Bike",
    price: "$500",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    _id: "2",
    name: "Road Bike",
    price: "$700",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    _id: "3",
    name: "Hybrid Bike",
    price: "$600",
    image:
      "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738522611/Giant.jpg",
  },
  {
    _id: "4",
    name: "Electric Bike",
    price: "$1200",
    image: "https://m.media-amazon.com/images/I/81DPZ3XfrwL.jpg",
  },
  {
    _id: "5",
    name: "Folding Bike",
    price: "$400",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    _id: "6",
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
];

const FeaturedBicycles = () => {
  return (
    <div className="mx-auto px-10 py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <h2 className="text-3xl text-[#014036] font-bold text-center flex pl-2 mt-3 py-2 rounded-lg">
            Featured Bicycles
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredBicycles.slice(0, 8).map((bike) => (
          <Card bike={bike} />
        ))}
      </div>
      <NavLink to="/bicycles" className="flex justify-center mt-10">
        <Button name="VIEW ALL BIKE" />
      </NavLink>
    </div>
  );
};

export default FeaturedBicycles;
