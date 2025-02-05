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
          src="https://dreamcycle.store/wp-content/uploads/2024/12/287839040_7478082502265867_3444267458535550573_n-700x467.jpg"
          alt=""
          className="my-2"
        />
        <h1 className="sm:text-2xl text-center md:text-3xl">{bike.name}</h1>
        <p className="text-[#FA0000] text-sm font-[550]">MTB</p>
        <p className="text-[#014037]">৳ 14,500.00</p>
        <Button name={"BUY NOW"}></Button>
      </div>
    </div>
  );
};

export default Card;
