import { NavLink } from "react-router-dom";
import { TBicycle } from "../../types";
import Button from "../ui/Button";

const BicycleCard = ({
  bike,
  imgSize,
  btnName,
  btnLink,
}: {
  bike: TBicycle;
  imgSize: string;
  btnName: string;
  btnLink: string;
}) => {
  console.log("Promp", bike);

  return (
    <div className="bg-[#edf2f1] p-5">
      <div className="flex flex-col flex-wrap justify-center items-center relative">
        <img src={bike.image} alt={bike.name} className={imgSize} />
        <h1 className="sm:text-2xl text-center md:text-3xl">{bike.name}</h1>
        <div className="w-full">
          <p className="text-[#1a463fe6] px-2 -[#FA0000] absolute top-5 left-2 bg-amber-500">
            ৳ {bike.price}
          </p>
          <p className="text-[#1a463fe6] text-sm font-[550]">
            Brand: {bike.brand}
          </p>
          <p className="text-[#1a463fe6] text-sm font-[550]">
            Type: {bike.type}
          </p>
          <p className="text-[#1a463fe6] text-sm font-[550]">
            Quantity: {bike.quantity}
          </p>
        </div>
        <NavLink to={btnLink}>
          <Button name={btnName}></Button>
        </NavLink>
      </div>
    </div>
  );
};

export default BicycleCard;
