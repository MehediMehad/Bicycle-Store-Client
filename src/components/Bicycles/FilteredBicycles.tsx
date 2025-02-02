import { useState } from "react";
import BicycleCard from "./BicycleCard";
import { useGetAllBicycleQuery } from "../../redux/features/bicycle/bicycleApi";

type TQueryParam = {
  name: string;
  value: string | number | boolean;
};

const FilteredBicycles = () => {
  // State for search, filters, and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    brand: "",
    category: "",
    availability: "",
  });
  const [sortBy, setSortBy] = useState("");

  // State for query parameters
  const [params, setParams] = useState<TQueryParam[]>([]);

  // Fetch data using the query parameters
  const { data: mainData, isLoading, isError } = useGetAllBicycleQuery(params);
  const bicycles = mainData?.data;

  // Function to update query parameters
  const updateParams = () => {
    const newParams: TQueryParam[] = [];

    // Add search query
    if (searchQuery) {
      newParams.push({ name: "searchTerm", value: searchQuery });
    }

    // Add filters
    if (filters.priceRange[1] !== 2000) {
      newParams.push({ name: "minPrice", value: filters.priceRange[0] });
      newParams.push({ name: "maxPrice", value: filters.priceRange[1] });
    }
    if (filters.brand) {
      newParams.push({ name: "brand", value: filters.brand });
    }
    if (filters.category) {
      newParams.push({ name: "category", value: filters.category });
    }
    if (filters.availability) {
      newParams.push({ name: "availability", value: filters.availability });
    }

    // Add sort option
    if (sortBy) {
      newParams.push({ name: "sort", value: sortBy });
    }

    // Update params state
    setParams(newParams);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    updateParams();
  };

  // Handle price range change
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, priceRange: [0, Number(e.target.value)] });
    updateParams();
  };

  // Handle brand filter change
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, brand: e.target.value });
    updateParams();
  };

  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
    updateParams();
  };

  // Handle availability filter change
  const handleAvailabilityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters({ ...filters, availability: e.target.value });
    updateParams();
  };

  // Handle sort option change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    updateParams();
  };

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="flex p-6 flex-wrap flex-col md:flex-row">
      {/* Left Side: Search, Filters, Sort */}
      <div className="w-full md:w-1/4 pr-6">
        <input
          type="text"
          placeholder="Search by brand, name, or category"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <div className="mb-4">
          <label className="block mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={filters.priceRange[1]}
            onChange={handlePriceRangeChange}
            className="w-full"
          />
          <p>
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Brand</label>
          <select
            value={filters.brand}
            onChange={handleBrandChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">All Brands</option>
            <option value="Trek">Trek</option>
            <option value="Giant">Giant</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Road">Road</option>
            <option value="Mountain">Mountain</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Availability</label>
          <select
            value={filters.availability}
            onChange={handleAvailabilityChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Right Side: Bicycle Cards */}
      <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 md:gap-6 mx-auto">
        {bicycles?.map((bicycle) => (
          <BicycleCard key={bicycle.id} bicycle={bicycle} />
        ))}
      </div>
    </div>
  );
};

export default FilteredBicycles;

export const bicycles2 = [
  {
    id: 1,
    name: "Trek Domane SL 5",
    brand: "Trek",
    model: "Road Bike",
    price: 1200,
    category: "Road",
    availability: "In Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 2,
    name: "Giant Talon 4",
    brand: "Giant",
    model: "Mountain Bike",
    price: 800,
    category: "Mountain",
    availability: "Out of Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 3,
    name: "Cannondale Synapse Carbon 105",
    brand: "Cannondale",
    model: "Road Bike",
    price: 1800,
    category: "Road",
    availability: "In Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 4,
    name: "Specialized Rockhopper",
    brand: "Specialized",
    model: "Mountain Bike",
    price: 950,
    category: "Mountain",
    availability: "In Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 5,
    name: "Scott Scale 970",
    brand: "Scott",
    model: "Mountain Bike",
    price: 1100,
    category: "Mountain",
    availability: "Limited Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 6,
    name: "Bianchi Infinito CV",
    brand: "Bianchi",
    model: "Road Bike",
    price: 2500,
    category: "Road",
    availability: "Pre-Order",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 7,
    name: "Merida Scultura 400",
    brand: "Merida",
    model: "Road Bike",
    price: 1300,
    category: "Road",
    availability: "In Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
  {
    id: 8,
    name: "Cube Reaction C:62",
    brand: "Cube",
    model: "Mountain Bike",
    price: 1600,
    category: "Mountain",
    availability: "Out of Stock",
    image:
      "https://www.rflbd.com/Application/storage/app/public/relativeContentPath/products/603898fc6b69e8ad0530ee15e39e3fef1.%20Potter_5_11zon.jpg",
  },
];

// import { useState } from "react";
// import BicycleCard from "./BicycleCard";
// import { useGetAllBicycleQuery } from "../../redux/features/bicycle/bicycleApi";

// const FilteredBicycles = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filters, setFilters] = useState({
//     priceRange: [0, 2000],
//     brand: "",
//     category: "",
//     availability: "",
//   });
//   const [sortBy, setSortBy] = useState("");

//   // Fetch data from the API
//   const {
//     data: bicycles,
//     isLoading,
//     isError,
//   } = useGetAllBicycleQuery(undefined);
//   console.log(bicycles);

//   // Handle loading and error states
//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

//   // Filter and sort bicycles
//   const filteredBicycles = bicycles.data
//     ?.filter((bicycle) => {
//       const matchesSearch =
//         bicycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         bicycle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         bicycle.category.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesFilters =
//         bicycle.price >= filters.priceRange[0] &&
//         bicycle.price <= filters.priceRange[1] &&
//         (filters.brand ? bicycle.brand === filters.brand : true) &&
//         (filters.category ? bicycle.category === filters.category : true) &&
//         (filters.availability
//           ? bicycle.availability === filters.availability
//           : true);

//       return matchesSearch && matchesFilters;
//     })
//     .sort((a, b) => {
//       if (sortBy === "priceLowToHigh") return a.price - b.price;
//       if (sortBy === "priceHighToLow") return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="flex p-6 flex-wrap flex-col md:flex-row">
//       {/* Left Side: Search, Filters, Sort */}
//       <div className="w-full md:w-1/4 pr-6">
//         <input
//           type="text"
//           placeholder="Search by brand, name, or category"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 border rounded-lg mb-4"
//         />

//         <div className="mb-4">
//           <label className="block mb-2">Price Range</label>
//           <input
//             type="range"
//             min="0"
//             max="2000"
//             value={filters.priceRange[1]}
//             onChange={(e) =>
//               setFilters({ ...filters, priceRange: [0, e.target.value] })
//             }
//             className="w-full"
//           />
//           <p>
//             ${filters.priceRange[0]} - ${filters.priceRange[1]}
//           </p>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Brand</label>
//           <select
//             value={filters.brand}
//             onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">All Brands</option>
//             <option value="Trek">Trek</option>
//             <option value="Giant">Giant</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Category</label>
//           <select
//             value={filters.category}
//             onChange={(e) =>
//               setFilters({ ...filters, category: e.target.value })
//             }
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">All Categories</option>
//             <option value="Road">Road</option>
//             <option value="Mountain">Mountain</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Availability</label>
//           <select
//             value={filters.availability}
//             onChange={(e) =>
//               setFilters({ ...filters, availability: e.target.value })
//             }
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">All</option>
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Sort By</label>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//           >
//             <option value="">Default</option>
//             <option value="priceLowToHigh">Price: Low to High</option>
//             <option value="priceHighToLow">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Right Side: Bicycle Cards */}
//       <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 md:gap-6 mx-auto">
//         {filteredBicycles?.map((bicycle) => (
//           <BicycleCard key={bicycle.id} bicycle={bicycle} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilteredBicycles;
