import { NavLink } from "react-router-dom";
import { TBicycle } from "../../types";
import Button from "../ui/Button";

const Card = ({
  bike,
  imgSize,
  btnLink,
}: {
  bike: TBicycle;
  imgSize: string;
  btnLink: string;
}) => {
  console.log("Promp", bike);

  return (
    <div className="bg-[#edf2f1] p-5">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <img src={bike.image} alt={bike.name} className={imgSize} />
        <h1 className="sm:text-2xl text-center md:text-3xl">{bike.name}</h1>
        <p className="text-[#FA0000] text-sm font-[550]">{bike.type}</p>
        <p className="text-[#014037] mt-1 font-[550]">৳{bike.price}</p>
        <NavLink to={btnLink}>
          <Button name={"BUY NOW"}></Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
