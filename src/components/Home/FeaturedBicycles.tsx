import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import Card from "./Card";
import Button from "../ui/Button";
import { useGetAllBicycleQuery } from "../../redux/features/bicycle/bicycleApi";

const FeaturedBicycles = () => {
  const { data: mainData, isLoading } = useGetAllBicycleQuery(undefined);
  const bicycles = mainData?.data;

  if (isLoading) {
    return <p>Loading....</p>;
  }

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
        {bicycles?.slice(0, 8).map((bike) => (
          <Card
            key={bike._id}
            bike={bike}
            imgSize="my-2 w-full min-h-64 max-h-64 object-fill"
          />
        ))}
      </div>
      <NavLink to="/bicycles" className="flex justify-center mt-10">
        <Button name="VIEW ALL BIKE" />
      </NavLink>
    </div>
  );
};

export default FeaturedBicycles;
