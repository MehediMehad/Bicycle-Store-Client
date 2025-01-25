type ResponsiveMenuProps = {
  open: boolean;
};
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <div>
      {open && (
        <div className="absolute top-20 left-0 w-full h-screen z-20">
          <div className="text-2xl font-semibold uppercase bg-primary text-back py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
