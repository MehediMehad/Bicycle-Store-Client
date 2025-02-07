import FilteredBicycles from "../components/Bicycles/FilteredBicycles";
import { useGetAllBicycleQuery } from "../redux/features/admin/bicycleManagement";

const Bicycles = () => {
  const { data: bicycles } = useGetAllBicycleQuery(undefined);
  console.log(bicycles);

  return (
    <div className="container mx-auto">
      <FilteredBicycles />
    </div>
  );
};

export default Bicycles;
