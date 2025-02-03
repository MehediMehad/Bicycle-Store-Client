import { TBicycle } from "../../types";

interface BicycleCardProps {
  bicycle: TBicycle;
}

const BicycleCard = ({ bicycle }: BicycleCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={bicycle.image}
          alt={bicycle.name}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
        {/* Availability Badge */}
        <span
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
            bicycle.availability === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {bicycle.availability}
        </span>
        <span
          className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold ${
            bicycle.availability === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          $ {bicycle.price}
        </span>
      </div>

      {/* Details Section */}
      <div className="p-4 bg-white flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{bicycle.name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Brand:</span> {bicycle.brand}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Category:</span> {bicycle.type}
        </p>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-center justify-end">
            <button className="px-4 py-[6px] cursor-pointer bg-[#19a270] text-white font-medium rounded-lg border border-green-600 shadow-md hover:bg-[#19a262]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleCard;
