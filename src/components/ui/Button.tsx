import cn from "../../lib/cn";

type ButtonProps = {
  name: string;
  className?: string;
};

const Button = ({ name, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-[#014036] text-white px-10 mt-2 py-3 text-sm cursor-pointer",
        className
      )}
    >
      {name}
    </button>
  );
};

export default Button;
