import { TBicycle } from "../../types";
import Button from "../ui/Button";

const Card = ({ bike, imgSize }: { bike: TBicycle; imgSize: string }) => {
  console.log("Promp", bike);

  return (
    <div className="bg-[#edf2f1] p-5">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <img src={bike.image} alt={bike.name} className={imgSize} />
        <h1 className="sm:text-2xl text-center md:text-3xl">{bike.name}</h1>
        <p className="text-[#FA0000] text-sm font-[550]">{bike.type}</p>
        <p className="text-[#014037]">৳ {bike.price}</p>
        <Button name={"BUY NOW"}></Button>
      </div>
    </div>
  );
};

export default Card;
