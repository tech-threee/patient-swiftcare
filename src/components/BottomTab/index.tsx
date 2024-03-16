import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../../constant/navigationLinks";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [tooltipVisible, setTooltipVisible] = useState<{
    [key: string]: boolean;
  }>(navLinks.reduce((acc, link) => ({ ...acc, [link.path]: false }), {}));

  const handleTooltipToggle = (path: string) => {
    setTooltipVisible((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
    navigate(path);
  };

  return (
    <div className="md:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-[#D9D9D9] bottom-[0.5px] left-1/2">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {navLinks.map((link, index) => (
          <button
            key={index}
            data-tooltip-target={`tooltip-${link.path}`}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
            onClick={() => handleTooltipToggle(link.path)}
          >
            {React.cloneElement(link.icon, {
              className:
                location.pathname === link.path ? "text-[#0067FF]" : "",
            })}
            <span className="sr-only">{link.display}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
