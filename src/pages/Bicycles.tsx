import { useGetAllBicycleQuery } from "../redux/features/bicycle/bicycleApi";

const Bicycles = () => {
  const { data: bicycles } = useGetAllBicycleQuery(undefined);
  console.log(bicycles);

  return (
    <div className="container mx-auto">
      <h1>This is AllBicycles component</h1>
    </div>
  );
};

export default Bicycles;
