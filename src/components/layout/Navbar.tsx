import React from "react";
import logo from "../../assets/icons/logo.png";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
// import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className=" container mx-auto flex justify-between items-center py-3">
          {/* LOGO SECTION */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img className="w-12" src={logo} alt="" />
            <div className="flex mt-3">
              <p>Pedal-</p>
              <p className="text-secondary">Planet</p>
            </div>
          </div>
          {/* MENU SECTION */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-back">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-amber-500 font-semibold duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* iCON SECTION */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className=" font-semibold hover:cursor-pointer rounded-md border-2 px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* MOBILE HAMBURGER MENU SECTION */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* MOBILE SIDEBAR SECTION */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
export const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Trainer", link: "#" },
  { id: 3, title: "Program", link: "#" },
  { id: 4, title: "Blogs", link: "#" },
  { id: 5, title: "Pricing", link: "#" },
];
