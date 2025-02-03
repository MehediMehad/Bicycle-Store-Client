const BicycleDetailsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-20 container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-no-repeat bg-cover lg:bg-center"
          style={{
            backgroundImage: `url(${
              bicycle.image || "/api/placeholder/600/400"
            })`,
          }}
        ></div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {bicycle.name}
          </h1>
          <p className="text-gray-600 text-lg mb-3">{bicycle.brand}</p>
          <p className="text-primary font-bold text-xl sm:text-2xl mb-4">
            ${bicycle.price.toFixed(2)}
          </p>

          {/* Availability Badge */}
          <div className="mb-4">
            <span
              className={`px-3 py-1 rounded-full font-bold text-sm ${
                bicycle.availability === "In Stock"
                  ? "bg-green-200 text-green-700"
                  : "bg-red-200 text-red-600"
              }`}
            >
              {bicycle.availability}
            </span>
          </div>

          <p className="text-gray-600 text-sm sm:text-base mb-4">
            {bicycle.description}
          </p>

          {/* Specifications */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Specifications</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm sm:text-base">
              <li>Type: {bicycle.type}</li>
              <li>Color: {bicycle.color}</li>
              <li>Quantity: {bicycle.quantity}</li>
            </ul>
          </div>

          {/* Buy Now Button */}
          <a
            href="/checkout"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition-all duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BicycleDetailsPage;

const bicycle = {
  name: "Propel Advanced SL",
  brand: "Giant",
  price: 4500,
  type: "Road",
  color: "Black",
  availability: "In Stock",
  description:
    "The ultimate race bike for speed enthusiasts. Lightweight, aerodynamic, and designed for performance.",
  image:
    "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738525965/Merida.jpg",
  quantity: 10,
};
