import {Link} from "react-router-dom";

import Logo from "../assets/images/logo.png";
import SearchIcon from "../assets/search_outline.svg";
import HamburgerIcon from "../assets/hamburger.svg";
import CloseIcon from "../assets/close_icon.svg";

import {useState} from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ToggleSearch = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  let Links = [
    {
      name: "Home",
      linkTo: "/",
    },
    {
      name: "About",
      linkTo: "/about",
    },
    {
      name: "News",
      linkTo: "/news",
    },
    {
      name: "Contact",
      linkTo: "/contact",
    },
  ];

  return (
    <>
      <header className=" text-white header_color fixed w-full z-10 py-2">
        <div className=" mx-auto w-full max-w-[1300px] lg:px-10 px-5">
          <div className=" text-[#AFAFAF] flex items-center justify-between md:px-[2em] lg:px-0 flex-wrap">
            <div className="flex items-center gap-5">
              <div className="lg:line md:relative md:mx-0">
                <Link to={"/"}>
                  <img
                    src={Logo}
                    alt="unork"
                    className=" max-w-[7.5em] lg:max-w-[7em] py-5 pr-5"
                  />
                </Link>
              </div>
              <nav
                className={` fixed top-[5.7em] bg-[#111111] w-full px-5 z-[-1] py-5 left-0 ${
                  isOpen ? "block" : "hidden"
                } lg:block lg:bg-transparent lg:relative lg:top-0 lg:z-10`}>
                <ul className="text-[1.2rem] font-bold lg:flex gap-5">
                  {Links.map((links, index) => (
                    <li
                      key={index}
                      className=" py-2 relative link_line_active lg:link_line">
                      <Link to={links.linkTo} className=" py-2">
                        {links.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-2 md:gap-[1em] md:flex-row-reverse flex-wrap">
              <button
                className=" inline-flex items-center justify-center gap-1 p-3 font-bold lg:text-[1rem]"
                onClick={ToggleSearch}>
                <img
                  src={SearchIcon}
                  alt=""
                  aria-hidden
                  className=" max-w-[1.5em]"
                />{" "}
                <span>Search</span>
              </button>
              <button
                aria-label="Toggle Menu"
                className=" py-3 lg:hidden flex-none"
                onClick={ToggleMenu}
                aria-expanded={`${isOpen ? "true" : "false"}`}>
                <img
                  src={HamburgerIcon}
                  alt=""
                  aria-hidden
                  className=" w-[2em]"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {searchIsOpen && (
        <>
          <div
            className="search_blur top-0 z-10"
            onClick={() => setSearchIsOpen(false)}></div>
          <div className=" fixed middle grid place-items-center z-20 w-full">
            <div className=" px-2 py-8 w-full text-white">
              <button
                aria-label="Close Search"
                className=" absolute right-[1.5em] top-[-12em] p-1 z-20 md:fixed md:right-[3em]"
                onClick={() => setSearchIsOpen(false)}>
                <img
                  src={CloseIcon}
                  alt="Search Icon"
                  aria-hidden={true}
                  className=" aspect-square"
                />
              </button>
              <div className="md:mx-auto md:max-w-[30em]">
                <h2 className=" pb-3 font-bold text-xl opacity-80">
                  Type below...
                </h2>
                <div className=" md:flex items-center ">
                  <div className=" relative">
                    <img
                      src={SearchIcon}
                      alt="Search Icon"
                      className=" aspect-square max-w-[1.8em] absolute top-[1.3em] left-[1em] z-10"
                      draggable={false}
                    />
                    <input
                      type="text"
                      draggable={false}
                      className=" bg-[#1A1B1A] md:py-6 p-5 pl-14 text-[1.2rem] w-full  rounded-md opacity-80 md:rounded-r-none"
                    />
                  </div>
                  <button className=" font-bold text-center w-full p-5 bg-[#5032C1] rounded-lg md:rounded-l-none text-xl my-2 hover:bg-[#111] focus:bg-[#111] transition-colors md:w-[8em]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
