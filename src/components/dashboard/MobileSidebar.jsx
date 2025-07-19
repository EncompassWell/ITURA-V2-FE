"use client"

import React, { useState, useEffect } from "react";
import { IoSettingsOutline, IoLibrary } from "react-icons/io5";
import { Divide as Hamburger } from "hamburger-react";
import { TbSmartHome, TbHelpSquare } from "react-icons/tb";
import { GiOpenPalm } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";


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
            <Link
              href="/dashboard"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              end
            >
              <TbSmartHome className="mr-2 text-2xl" />
              Dashboard
            </Link>
            <Link
              href="journal"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <LuMessageCircle className="mr-2 text-2xl" />
              Journal
            </Link>
            <Link
              href="library"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <IoLibrary className="mr-2 text-2xl" />
              Library
            </Link>
            <Link
              href="oracle-reading"
              className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <GiOpenPalm className="mr-2 text-2xl" />
              Oracle Readings
            </Link>
            <div className="border-t border-white/30 mb-10 mt-4 py-6">
              <Link
                href="settings"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <IoSettingsOutline className="mr-2 text-2xl" />
                Setting
              </Link>
              <Link
                href="help"
                className="text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <TbHelpSquare className="mr-2 text-2xl" />
                Help
              </Link>
              <Link
                href="support"
                className="text-[13px] flex items-center py-4 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <TbHelpSquare className="mr-2 text-2xl" />
                Get Pro Support
              </Link>
            </div>
          </div>
        )}
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
            alt="Itura's logo"
            width={50}
            height={50}
            className="w-[100%]"
          />
        </Link>
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
              <Link
                href="/dashboard"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
                end
              >
                <TbSmartHome className="mr-2 text-2xl" />
                Dashboard
              </Link>
              <Link
                href="journal"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <LuMessageCircle className="mr-2 text-2xl" />
                Journal
              </Link>
              <Link
                href="library"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <IoLibrary className="mr-2 text-2xl" />
                Library
              </Link>
              <Link
                href="oracle-reading"
                className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                <GiOpenPalm className="mr-2 text-2xl" />
                Oracle Readings
              </Link>
              <div className="border-t border-white/30 mb-10 mt-4 py-6">
                <Link
                  href="settings"
                  className="text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <IoSettingsOutline className="mr-2 text-2xl" />
                  Setting
                </Link>
                <Link
                  href="help"
                  className="text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <TbHelpSquare className="mr-2 text-2xl" />
                  Help
                </Link>
                <Link
                  href="support"
                  className="text-[13px] flex items-center py-4 px-4 font-medium"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  <TbHelpSquare className="mr-2 text-2xl" />
                  Get Pro Support
                </Link>
              </div>
            </div>
          )}
          <Link href="/">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
            alt="Itura's logo"
            width={50}
            height={50}
            className="w-[100%]"
          />
        </Link>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
