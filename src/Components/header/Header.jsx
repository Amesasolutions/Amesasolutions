import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/amesasolutions.png";

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null)
  const [menu, setMenu] = useState("menu")

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => {
   if(menu === "menu") {
     menuRef.current.classList.add("show_menu")
     setMenu("close")
   } else {
    menuRef.current.classList.remove("show_menu")
    setMenu("menu")
   }
  }

  return (
    <header
      ref={headerRef}
      className="w-full bg-white h-[80px] leading-[80px]"
    >
      <div className="container flex items-center justify-between">
        {/* ===== logo start ====== */}
        <Link to="/">
          <figure className="w-40">
            <img src={logo} alt="Amesa solutions" className="w-full" />
          </figure>
        </Link>
        {/* ===== logo end ====== */}
        {/* ===== Nav links start ====== */}
        <div id="menu" ref={menuRef} onClick={toggleMenu}>
          <ul className="flex flex-col md:flex-row gap-0 md:gap-8 font-medium w-[70%] md:w-auto h-full md:h-auto p-4 md:p-0 bg-white md:bg-none
          shadow md:shadow-none">
            <Link
              to="/"
              className={`h-[3rem] md:h-auto ${
                location.pathname === "/"
                  ? "text-primaryColor"
                  : "text-headingColor"
              }`}
            >
              <li >Home</li>
            </Link>
            <Link
              to="/About-us"
              className={`h-[3rem] md:h-auto ${
                location.pathname === "/About-us"
                  ? "text-primaryColor"
                  : "text-headingColor"
              }`}
            >
              <li>About Us</li>
            </Link>
            <Link
              to="/Portfolio"
              className={`h-[3rem] md:h-auto ${
                location.pathname === "/Portfolio"
                  ? "text-primaryColor"
                  : "text-headingColor"
              }`}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to="/Contact-us"
              className={`h-[3rem] md:h-auto ${
                location.pathname === "/Contact-us"
                  ? "text-primaryColor"
                  : "text-headingColor"
              }`}
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        {/* ===== Nav links end ====== */}
        {/* ===== menu start ====== */}
        <div onClick={toggleMenu} className="block md:hidden bg-primaryColor w-[40px] h-[40px] leading-[40px] rounded cursor-pointer text-center text-xl text-white">
          <i className={`ri-${menu}-line`}></i>
        </div>
        {/* ===== menu end ====== */}
      </div>
    </header>
  );
}

export default Header;
