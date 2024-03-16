import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import brandLogo from "../../assets/images/logo.png";
import { navLinks } from "../../constant/index";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={brandLogo}
            className="w-[10rem] h-[10rem]"
            alt="Brand Logo"
          />
        </div>
        <div className="menu-icon hidden " onClick={handleShowNavbar}>
          <HiMenuAlt3 />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="flex flex-row items-center gap-4"
                >
                  {/**Import and use icons */}
                  {link.icon}
                  <span className="link font-bold">{link.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <h1>todo: Add Profile</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
