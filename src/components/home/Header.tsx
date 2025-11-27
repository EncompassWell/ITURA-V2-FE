"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const bgClass = "bg-white/5";

  return (
    <header className="w-full relative z-30">
      {/* DESKTOP NAV */}
      <div className="hidden md:flex w-[60%] mx-auto">
        <div
          className={`w-full flex justify-between items-center mx-auto p-4 my-10 border border-white/20 rounded-[21px] text-white text-[14px] ${bgClass}`}
        >
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
              alt="Itura's logo"
              width={50}
              height={50}
              className="w-full"
            />
          </Link>

          <nav className="w-[50%] flex justify-between">
            <Link href="#feature">Features</Link>
            <Link href="">How it Works</Link>
            <Link href="">Blog</Link>
            <a href="mailto:info@itura.org">Contact</a>
          </nav>

          <Link
            href="/login"
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3"
            prefetch={true}
          >
            Launch the app
          </Link>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`md:hidden flex items-center w-[90%] mx-auto justify-between my-10 relative p-3 rounded-xl ${bgClass}`}
      >
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
            alt="Itura's logo"
            width={50}
            height={50}
            className="w-full"
          />
        </Link>

        <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF" direction="left" />

        {isOpen && (
          <div
            className="p-8 py-12 h-[80vh] w-full absolute top-20 left-0 text-white 
                       text-center z-30 flex flex-col items-center bg-black"
          >
            <nav className="flex flex-col mt-10">
              <Link href="#feature" className="cursor-pointer mb-4">Features</Link>
              <Link href="" className="mb-4">How it Works</Link>
              <Link href="" className="mb-4">Blog</Link>
              <a href="mailto:info@itura.org" className="cursor-pointer mb-4">Contact</a>
            </nav>

            <Link
              href="/login"
              className="p-3 bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white"
              prefetch={true}
            >
              Launch the app
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
