//add  'no-unused-vars':'off' in '.eslintrc'
import React, { useEffect, useState } from "react";
import logo from "../assets/icono-principal.png";
import { Link } from "react-scroll";

//react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navitems array
  const navItems = [
    { link: "Inicio", path: "inicio" },
    { link: "Servicios", path: "servicios" },
    { link: "Blog", path: "blog" },
    { link: "Nosotros", path: "nosotros" },
    { link: "Contacto", path: "contacto" },
  ];
  return (
    <header className="w-screen bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8  ">
          <a
            href=""
            className="text-3xl font-semibold flex items-center space-x-3  "
          >
            <img
              src={logo}
              alt=""
              className="w-10 inline-block items-center  "
            />
            <span className="font-mbf-canno text-[#263238]">amaxonia</span>
          </a>

          {/* nav items for large devices  */}
          <ul className="md:flex space-x-12 hidden  ">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium "
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center  ">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900 "
            >
              Pedir demo
            </a>
            <button className="bg-brandPrimary text-white py-2 px-6 transition-all duration-300 rounded hover:bg-neutralDGrey ">
              Cotizar
            </button>
          </div>

          {/* menu btn for only mobile devices  */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500  "
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-brandPrimary first:font-medium "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;