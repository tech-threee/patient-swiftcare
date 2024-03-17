import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import brandLogo from "../../assets/images/logo.png";
import { navLinks } from "../../constant/index";
import { useUser } from "../../hooks/auth/useUser";

const Navbar: React.FC = () => {
  const { logout } = useUser();
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
                  className="flex flex-row items-center gap-2"
                >
                  {/**Import and use icons */}
                  {link.icon}
                  <span className="link font-bold">{link.display}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={logout}
          className="bg-blue-500 text-white font-bold p-2 rounded-2xl"
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
