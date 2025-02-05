import Button from "../ui/Button";
type CardProps = {
  _id: string;
  name: string;
  price: string;
  image: string;
};
const Card = ({ bike }: CardProps) => {
  return (
    <div className="bg-[#edf2f1] p-5">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <img
          src={bike.image}
          alt=""
          className="my-2 w-full min-h-64 max-h-64 object-fill"
        />
        <h1 className="sm:text-2xl text-center md:text-3xl">{bike.name}</h1>
        <p className="text-[#FA0000] text-sm font-[550]">{bike.name}</p>
        <p className="text-[#014037]">৳ 14,500.00</p>
        <Button name={"BUY NOW"}></Button>
      </div>
    </div>
  );
};

export default Card;
