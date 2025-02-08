import { useEffect, useState } from "react";
import { useGetAllBicycleQuery } from "../../redux/features/admin/bicycleManagement";
import BicycleCard from "./BicycleCard";

type TQueryParam = {
  name: string;
  value: string | number | boolean;
};

const FilteredBicycles = () => {
  // State for search, filters, and sort
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: [12000, 20000],
    brand: "",
    type: "",
    availability: "",
  });

  // const [sortBy, setSortBy] = useState("");

  // State for query parameters
  const [params, setParams] = useState<TQueryParam[]>([]);

  // Fetch data using the query parameters
  const { data: mainData, isLoading, isError } = useGetAllBicycleQuery(params);
  const bicycles = mainData?.data;

  // Function to update query parameters
  const updateParams = () => {
    const newParams: TQueryParam[] = [];

    /// Add search query only if it's not empty
    if (searchQuery.trim()) {
      newParams.push({ name: "searchTerm", value: searchQuery.trim() });
    }

    // Add filters
    if (filters.priceRange[1] !== 20000) {
      newParams.push({ name: "minPrice", value: filters.priceRange[0] });
      newParams.push({ name: "maxPrice", value: filters.priceRange[1] });
    }
    if (filters.brand) {
      newParams.push({ name: "brand", value: filters.brand });
    }
    if (filters.type) {
      newParams.push({ name: "type", value: filters.type });
    }
    if (filters.availability) {
      newParams.push({ name: "availability", value: filters.availability });
    }

    // Add sort option
    // if (sortBy) {
    //   newParams.push({ name: "sort", value: sortBy });
    // }

    // Update params state
    setParams(newParams);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("handleSearchChange=>", e.target.value);
    setSearchQuery(e.target.value); // State update
  };

  // Call updateParams whenever searchQuery changes
  useEffect(() => {
    updateParams();
  }, [searchQuery, filters]);

  // Handle price range change
  const handlePriceRangeChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      const newPriceRange = [...filters.priceRange];
      newPriceRange[index] = newValue;

      // Ensure min <= max
      if (index === 0 && newPriceRange[0] > newPriceRange[1]) {
        newPriceRange[1] = newPriceRange[0];
      } else if (index === 1 && newPriceRange[1] < newPriceRange[0]) {
        newPriceRange[0] = newPriceRange[1];
      }

      setFilters({ ...filters, priceRange: newPriceRange });
      updateParams();
    };

  // Handle brand filter change
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, brand: e.target.value });
    updateParams();
  };

  // Handle category filter change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, type: e.target.value });
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
  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortBy(e.target.value);
  //   updateParams();
  // };

  // Handle loading and error states
  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-4 text-red-500">Error fetching data</div>
    );

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
            max="40000"
            value={filters.priceRange[0]}
            onChange={handlePriceRangeChange(0)}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="40000"
            value={filters.priceRange[1]}
            onChange={handlePriceRangeChange(1)}
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
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            value={filters.type}
            onChange={handleCategoryChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Road">Road</option>
            <option value="Mountain">Mountain</option>
            <option value="Hybrid">Hybrid</option>
            <option value="BMX">BMX</option>
            <option value="Electric">Electric</option>
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
            <option value="Pre-Order">Pre Order</option>
          </select>
        </div>

        {/* <div className="mb-4">
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
        </div> */}
      </div>

      {/* Right Side: Bicycle Cards */}
      <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 md:gap-6 mx-auto">
        {bicycles?.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            No bicycles found
          </div>
        ) : (
          bicycles?.map((bicycle) => (
            <BicycleCard
              key={bicycle._id}
              bike={bicycle}
              imgSize="my-2 w-full min-h-52 max-h-52 object-cover"
              btnLink={`/details/${bicycle._id}`}
              btnName="BUY NOW"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FilteredBicycles;

const brands = [
  "Giant",
  "Trek",
  "Specialized",
  "Cannondale",
  "Scott",
  "Bianchi",
  "Merida",
  "Duranta",
  "Veloce",
  "Prince",
  "Phoenix",
  "Hero",
  "Atlas",
  "Avon",
];
