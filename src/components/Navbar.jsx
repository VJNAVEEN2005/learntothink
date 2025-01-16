import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onChangeMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <nav>
          <div className=" flex justify-between items-center md:py-2 px-4 bg-white transition-all dark:bg-Primary-black border-b-2 border-b-sky-950 dark:border-b-white">
            <NavLink to={"/"}>
            <div className=" font-bold text-lg md:text-2xl dark:text-Primary-Green">
              Learn To Think
            </div>
            </NavLink>

            <div className=" flex  md:items-center gap-6 md:gap-10">
              <div className=" hidden md:block">
                <div className=" flex items-center border-black border bg-white pr-2 rounded-3xl">
                  <input
                    className="text-black rounded-l-full p-2"
                    type="search"
                    name=""
                    id=""
                  />
                  <img
                    className="w-5 h-5 cursor-pointer"
                    src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
                    alt=""
                  />
                </div>
              </div>

              <div
                className=" w-11 border rounded-full cursor-pointer p-2"
                onClick={props.onChangeMode}
              >
                <img
                  className={!props.isDark ? "" : "hidden"}
                  src="https://img.icons8.com/?size=100&id=11377&format=png&color=000000"
                  alt=""
                />
                <img
                  className={!props.isDark ? "hidden" : ""}
                  src="https://img.icons8.com/?size=100&id=6Z2mGj6qDVv4&format=png&color=ffffff"
                  alt=""
                />
              </div>
              <div className=" flex items-center">
                <div onClick={onChangeMenu} className=" md:hidden">
                  <img className={props.isDark ? "hidden" : "w-8"} src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000" alt="" />
                  <img className={props.isDark ? "w-8" : "hidden"} src="https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff" alt="" />
                </div>
                <ul
                  className={
                    isMenuOpen
                      ? " border-2 border-black md:border-none  md:top-0 right-1 px-8 py-5 top-11 transition-all bg-white dark:bg-Primary-black flex flex-col md:flex-row gap-5 dark:text-white font-medium md:text-xl md:relative fixed "
                      : "  md:top-0 right-1 px-8 py-5 -top-40 bg-white transition-all dark:bg-Primary-black flex flex-col md:flex-row gap-5 dark:text-white font-medium md:text-xl md:relative fixed "
                  }
                >
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"contact"}>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
