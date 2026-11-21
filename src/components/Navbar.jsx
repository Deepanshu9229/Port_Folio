import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`px-4 sm:px-16 w-full flex items-center py-3 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt="logo" 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-3xl object-contain" 
          />
          <p className="text-white text-[17px] font-bold cursor-pointer hidden sm:flex">
            Deepanshu &nbsp;<span className="text-[#915EFF]">Patel</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6 lg:gap-8">
          <ul className="list-none flex flex-row gap-6 lg:gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[15px] lg:text-[17px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  {nav.title}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915EFF] hover:bg-[#7a44df] text-white py-1.5 px-4 rounded-xl text-[14px] lg:text-[15px] font-semibold transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Resume</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915EFF] text-white py-1 px-3 rounded-lg text-xs font-semibold flex items-center gap-1"
          >
            Resume
          </a>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-4 min-w-[160px] z-20 rounded-xl shadow-lg flex-col gap-4`}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <ScrollLink
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
