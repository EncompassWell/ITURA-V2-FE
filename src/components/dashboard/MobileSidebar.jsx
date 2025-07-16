import React, { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Divide as Hamburger } from "hamburger-react";
import { IoLibrary } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";
import { TbHelpSquare } from "react-icons/tb";
import { GiOpenPalm } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStyle = {
    background: "#ffffff42",
    borderRadius: "50px",
    color: "#FFF",
    padding: "10px 15px",
  };

  const bgClass = "bg-white/10";

  return (
    <div className="relative w-[100%]">
      <div
        className={`flex items-center w-[90%] mx-auto lg:hidden md:hidden justify-between my-6 relative py-2 px-4 z-20 rounded-xl ${bgClass}`}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#FFF"
          direction="left"
        />
        {isOpen && (
          <div className="bg-darkBg absolute top-20 w-[70%] border rounded-[21px] border-white/20 p-6">
            <NavLink
              to="/dashboard"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              end
            >
              <TbSmartHome className="mr-2 text-2xl" />
              Dashboard
            </NavLink>
            <NavLink
              to="journal"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <LuMessageCircle className="mr-2 text-2xl" />
              Journal
            </NavLink>
            <NavLink
              to="library"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <IoLibrary className="mr-2 text-2xl" />
              Library
            </NavLink>
            <NavLink
              to="oracle-reading"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <GiOpenPalm className="mr-2 text-2xl" />
              Oracle Readings
            </NavLink>
            <div className="border-t border-white/30 mb-10 mt-4 py-6">
              <NavLink
                to="settings"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <IoSettingsOutline className="mr-2 text-2xl" />
                Setting
              </NavLink>
              <NavLink
                to="help"
                className="text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <TbHelpSquare className="mr-2 text-2xl" />
                Help
              </NavLink>
              <NavLink
                to="support"
                className="text-[13px] flex items-center py-4 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <TbHelpSquare className="mr-2 text-2xl" />
                Get Pro Support
              </NavLink>
            </div>
          </div>
        )}
        <NavLink to="/">
          <img src={logo} alt="" className="w-[60px] h-[60px]" />
        </NavLink>
      </div>
      {scrolled && (
        <div
          className="flex items-center w-[100%] lg:hidden md:hidden justify-between px-6 py-6 z-30 fixed top-0 bg-[#030A04]"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FFF"
            direction="left"
          />
          {isOpen && (
            <div className="bg-darkBg absolute top-20 w-[70%] border rounded-[21px] border-white/20 p-6">
              <NavLink
                to="/dashboard"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                end
              >
                <TbSmartHome className="mr-2 text-2xl" />
                Dashboard
              </NavLink>
              <NavLink
                to="journal"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <LuMessageCircle className="mr-2 text-2xl" />
                Journal
              </NavLink>
              <NavLink
                to="library"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <IoLibrary className="mr-2 text-2xl" />
                Library
              </NavLink>
              <NavLink
                to="oracle-reading"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <GiOpenPalm className="mr-2 text-2xl" />
                Oracle Readings
              </NavLink>
              <div className="border-t border-white/30 mb-10 mt-4 py-6">
                <NavLink
                  to="settings"
                  className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <IoSettingsOutline className="mr-2 text-2xl" />
                  Setting
                </NavLink>
                <NavLink
                  to="help"
                  className="text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <TbHelpSquare className="mr-2 text-2xl" />
                  Help
                </NavLink>
                <NavLink
                  to="support"
                  className="text-[13px] flex items-center py-4 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <TbHelpSquare className="mr-2 text-2xl" />
                  Get Pro Support
                </NavLink>
              </div>
              <div></div>
            </div>
          )}
          <NavLink to="/">
            <img src={logo} alt="" className="w-[60px] h-[60px]" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
