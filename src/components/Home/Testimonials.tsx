import React, { useState } from "react";
import { Truck, Shield, Wrench, CreditCard, ChevronRight } from "lucide-react";
import bg from "../../assets/images/bgb.jpg";

interface Product {
  name: string;
  price: number;
  image: string;
}

interface Category {
  title: string;
  description: string;
  products: Product[];
}

interface ShopFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("urban");

  const productCategories: Record<string, Category> = {
    urban: {
      title: "Urban Commuter Bikes",
      description: "Perfect for city navigation and daily commutes.",
      products: [
        {
          name: "City Glider Pro",
          price: 799.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738997483/Trek.jpg",
        },
        {
          name: "Urban Cruiser Elite",
          price: 899.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738992183/Specialized.jpg",
        },
      ],
    },
    mountain: {
      title: "Mountain Bikes",
      description: "Rugged bikes designed for tough terrain and adventure.",
      products: [
        {
          name: "Trail Master X1",
          price: 1299.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738992065/Trek.jpg",
        },
        {
          name: "Peak Rider 3000",
          price: 1599.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738991142/Giant.jpg",
        },
      ],
    },
    electric: {
      title: "Electric Bikes",
      description: "Eco-friendly bikes with powerful electric assistance.",
      products: [
        {
          name: "E-Commuter Lite",
          price: 1499.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738992183/Specialized.jpg",
        },
        {
          name: "Power Rider Pro",
          price: 2299.99,
          image:
            "https://res.cloudinary.com/dxbpbbpbh/image/upload/v1738992065/Trek.jpg",
        },
      ],
    },
  };

  const shopFeatures: ShopFeature[] = [
    {
      icon: <Truck className="w-12 h-12 text-[#043029]" />,
      title: "Free Shipping",
      description: "Free shipping on orders over $500",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Warranty",
      description: "2-year comprehensive warranty",
    },
    {
      icon: <Wrench className="w-12 h-12 text-purple-600" />,
      title: "Service",
      description: "Free first-year maintenance",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-600" />,
      title: "Flexible Payment",
      description: "Easy installment plans available",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto  px-4">
        {/* Product Categories */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Upcoming Bike
          </h2>

          {/* Category Selector */}
          <div className="flex justify-center mb-8 space-x-4">
            {Object.keys(productCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  activeCategory === category
                    ? "bg-[#014036] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {productCategories[category].title}
              </button>
            ))}
          </div>

          {/* Active Category Products */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {productCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {productCategories[activeCategory].description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {productCategories[activeCategory].products.map(
                  (product, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-xl p-4 text-center transform transition hover:scale-105"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="mx-auto mb-4 h-48 object-cover"
                      />
                      <h4 className="font-semibold text-gray-800">
                        {product.name}
                      </h4>
                      <p className="text-[#014037] font-[550]">
                        ${product.price}
                      </p>
                      <button className="mt-4 cursor-not-allowed w-full bg-[#014036] text-white py-2 rounded-lg flex items-center justify-center">
                        Upcoming <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "",
                backgroundPosition: "",
                backgroundRepeat: "no-repeat",
              }}
              className="rounded-2xl p-8 shadow-xl flex items-center justify-center"
            >
              <div className="text-center opacity-0">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Find Your Perfect Ride
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Discover bikes tailored to your lifestyle. Whether you're
                  commuting, adventuring, or exploring, we have the perfect bike
                  for you.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center mx-auto">
                  Explore Collections <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Shop Features */}
        <section className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Pedal Planet
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {shopFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform transition hover:scale-105"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
