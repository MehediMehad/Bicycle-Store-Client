import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

// Sample data for featured bicycles
const featuredBicycles = [
  {
    id: 1,
    name: "Mountain Bike",
    price: "$500",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    id: 2,
    name: "Road Bike",
    price: "$700",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    id: 3,
    name: "Hybrid Bike",
    price: "$600",
    image:
      "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738522611/Giant.jpg",
  },
  {
    id: 4,
    name: "Electric Bike",
    price: "$1200",
    image: "https://m.media-amazon.com/images/I/81DPZ3XfrwL.jpg",
  },
  {
    id: 5,
    name: "Folding Bike",
    price: "$400",
    image:
      "https://i.postimg.cc/jSvBSCZZ/0519435-duranta-alloy-21-spd-dynamic-x-800-26-blue-removebg.png",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Kids Bike",
    price: "$200",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
];

const FeaturedBicycles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <h2 className="text-3xl font-bold text-center flex pl-2 mt-3 py-2 rounded-lg">
            Featured Bicycles
          </h2>
        </div>
        <div className="">
          <NavLink
            to={`/bicycles`}
            className="underline text-primary tracking-[0.4px] font-medium cursor-pointer uppercase"
          >
            View All
          </NavLink>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {featuredBicycles.slice(0, 10).map((bike) => (
          <div className="">
            <div className="flex justify-center items-center bg-gray-100">
              <div className="bg-gray-100 w-64 h-60 flex justify-center items-center">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2 border-gray-300">
                {bike.name}
              </h3>
              <p className="font-bold text-primary">{bike.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBicycles;
