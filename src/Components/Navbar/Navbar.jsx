import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // Track open dropdowns
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isArabic = i18n.language === "ar";

  // Set the document direction dynamically
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = "rtl"; // Force RTL in both Arabic and English
  }, [i18n.language]);

  // Define menu items
  const menuItems = [
    { key: "navbar.home", path: "/" },
    { key: "navbar.about", path: "/about-us" },
    {
      key: "navbar.services",
      subMenu: [
        { key: "navbar.real_estate", path: "/services/real_estate_live" },
        { key: "navbar.interior_design", path: "/services/interior-design" },
        { key: "navbar.construction_and_Development", path: "/services/construction-development" },
        { key: "navbar.property_and_facility_management", path: "/services/property_and_facility_management" },
      ],
    },
    { key: "navbar.projects", path: "/projects" },
    { key: "navbar.contact", path: "/contact-us" },
    { key: "navbar.complain", path: "/feedback" },
  ];

  // Toggle language function
  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  // Handle menu item click to close dropdown & mobile menu
  const handleNavClick = () => {
    setIsOpen(false); // Close mobile menu
    setDropdown(null); // Close any open dropdown
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll
  };

  return (
    <nav className="bg-darkBg py-4 px-6 fixed w-full top-0 flex items-center justify-between text-darkText z-50 font-oswald shadow-md h-24 rtl:flex-row-reverse">
    {/* Left Section: Logo */}
    <div className="flex items-center gap-4">
      <Link to="/" className="h-16 flex items-center" onClick={handleNavClick}>
        <img
          src="https://i.ibb.co/r2WcrxXj/transparent.png"
          alt="Logo"
          className="w-20 md:w-26 lg:w-30 h-auto object-contain inline-block transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  
    {/* Center Section: Desktop Menu */}
    <ul className="hidden md:flex space-x-10 lg:space-x-14 text-xl items-center mx-auto rtl:space-x-reverse">
      {menuItems.map(({ key, path, subMenu }) => (
        <li key={key} className="group relative">
          {subMenu ? (
            <>
              <button
                className="relative transition duration-300 text-darkText rtl:text-right
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                  after:w-0 after:h-[3px] after:bg-accentLight after:transition-all 
                  after:duration-300 group-hover:after:w-full group-hover:text-accentLight"
                onClick={() => setDropdown(dropdown === key ? null : key)}
              >
                {t(key)}
              </button>
              {dropdown === key && (
                <ul className="absolute left-0 mt-2 w-56 bg-lightBg text-lightText shadow-lg rounded-lg py-2 rtl:text-right rtl:left-auto rtl:right-0">
                  {subMenu.map(({ key, path }) => (
                    <li key={key}>
                      <Link
                        to={path}
                        className="block px-4 py-2 text-sm hover:bg-subtextDark hover:text-darkText transition"
                        onClick={handleNavClick}
                      >
                        {t(key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              to={path}
              className={`relative transition duration-300 text-darkText rtl:text-right
                ${location.pathname === path ? "text-accentLight after:w-full" : ""}
                after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                after:w-0 after:h-[3px] after:bg-accentLight after:transition-all 
                after:duration-300 group-hover:after:w-full group-hover:text-accentLight`}
              onClick={handleNavClick}
            >
              {t(key)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  
    {/* Right Section: Mobile Menu & Language Toggle */}
    <div className="flex items-center gap-6 rtl:flex-row-reverse">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-4xl text-darkText transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            {isOpen ? "✕" : "☰"}
          </motion.div>
        </button>
      </div>
  
      {/* Language Toggle */}
      <div className="flex items-center">
        <span className="text-darkText text-lg">EN</span>
        <label className="relative inline-flex items-center cursor-pointer mx-2">
          <input type="checkbox" className="sr-only peer" onChange={toggleLanguage} checked={isArabic} />
          <div className="w-10 h-5 bg-subtextDark rounded-full peer-checked:bg-accentLight relative transition-all">
            <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </div>
        </label>
        <span className="text-darkText text-lg">AR</span>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-24 left-0 w-full bg-backgroundAlt text-center py-6 shadow-lg md:hidden rounded-b-lg"
      >
        <div className="flex flex-col items-center w-[85%] mx-auto space-y-4">
          {menuItems.map(({ key, path, subMenu }) => (
            <div key={key} className="w-full">
              {subMenu ? (
                <>
                  <button
                    className="block w-full text-xl text-darkText py-3 hover:text-accentLight transition"
                    onClick={() => setDropdown(dropdown === key ? null : key)}
                  >
                    {t(key)}
                  </button>
                  {dropdown === key && (
                    <div className="bg-subtextDark rounded-md py-2">
                      {subMenu.map(({ key, path }) => (
                        <Link
                          key={key}
                          to={path}
                          className="block py-2 text-lg text-darkText hover:bg-accentLight hover:text-white transition rounded-md w-full text-center"
                          onClick={handleNavClick}
                        >
                          {t(key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={path}
                  className="block w-full py-3 text-xl text-darkText hover:text-accentLight transition"
                  onClick={handleNavClick}
                >
                  {t(key)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </nav>
  
  
  );
};

export default Navbar;
