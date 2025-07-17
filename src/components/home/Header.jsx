// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Divide as Hamburger } from "hamburger-react";
// // import { Link } from "react-scroll";

// const Header = () => {
//   const bgClass = "bg-white/5";
//   const [isOpen, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setScrolled(currentScrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="relative w-[100%]">
//       <div
//         className={`lg:flex md:flex items-center lg:w-[60%] md:w-[80%] mx-auto hidden`}
//       >
//         <div
//           className={`w-[100%] flex justify-between items-center  mx-auto  p-4 my-10 border border-white/20 rounded-[21px] text-white text-[14px] ${bgClass}`}
//         >
//           <Link
//             to="home"
//             smooth={true}
//             duration={600}
//             className="cursor-pointer"
//           >
//             <Image
//               src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
//               alt="Itura's logo"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <nav>
//             <Link
//               to="feature"
//               smooth={true}
//               duration={600}
//               className="mr-4 cursor-pointer"
//             >
//               Features
//             </Link>
//             <Link to="" className="mr-4">
//               How it Works
//             </Link>
//             <Link to="" className="mr-4">
//               Forum
//             </Link>
//             <Link to="" className="mr-4">
//               Blog
//             </Link>
//             <a href="mailto:info@itura.org">Contact</a>
//           </nav>
//           <Link
//             to="/dashboard"
//             className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white p-3"
//           >
//             Launch the app
//           </Link>
//         </div>
//       </div>
//       {scrolled && (
//         <div
//           className={`lg:flex md:flex hidden w-[100%] justify-between items-center  px-10 fixed top-0 z-10  py-6  text-white text-[14px] bg-[#030A04]`}
//         >
//           <Link
//             to="home"
//             smooth={true}
//             duration={600}
//             className="cursor-pointer"
//           >
//             <Image
//               src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
//               alt="Itura's logo"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <nav className="w-[40%] flex justify-between items-center">
//             <Link
//               to="feature"
//               smooth={true}
//               duration={600}
//               className="cursor-pointer"
//             >
//               Features
//             </Link>
//             <Link to="">How it Works</Link>
//             <Link to="">Forum</Link>
//             <Link to="">Blog</Link>
//             <a href="mailto:info@itura.org">Contact</a>
//           </nav>
//           <div className="flex items-center">
//             <Link
//               to="/dashboard"
//               className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white p-3"
//             >
//               Launch the app
//             </Link>
//           </div>
//         </div>
//       )}
//       <div
//         className={`flex items-center w-[90%] mx-auto lg:hidden md:hidden justify-between my-10 relative p-3 z-20 rounded-xl ${bgClass}`}
//       >
//         <Link to="home" smooth={true} duration={600} className="cursor-pointer">
//           <Image
//             src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
//             alt="Itura's logo"
//             width={20}
//             height={20}
//           />
//         </Link>
//         <Hamburger
//           toggled={isOpen}
//           toggle={setOpen}
//           color="#FFF"
//           direction="left"
//         />
//         {isOpen && (
//           <div
//             className={`p-8 py-12 h-[80vh] w-[100%] absolute top-18 left-0 text-white justify-center text-center z-50 flex flex-col items-center bg-black`}
//           >
//             <nav className="flex flex-col mt-10">
//               <Link
//                 to="feature"
//                 smooth={true}
//                 duration={600}
//                 className="cursor-pointer mb-4"
//               >
//                 Features
//               </Link>
//               <Link to="" className="mb-4">
//                 How it Works
//               </Link>
//               <Link to="" className="mb-4">
//                 Forum
//               </Link>
//               <Link to="" className="mb-4">
//                 Blog
//               </Link>
//               <a href="mailto:info@itura.org" className="cursor-pointer mb-4">
//                 Contact
//               </a>
//             </nav>
//             <Link
//               to="/dashboard"
//               className="p-3 bg-linear-to-r from-orange to-lightOrange rounded-xl text-white"
//             >
//               Launch the app
//             </Link>
//           </div>
//         )}
//       </div>
//       {scrolled && (
//         <div
//           className={`flex items-center w-[100%] lg:hidden md:hidden justify-between px-6 py-6 z-30 fixed top-0 bg-[#030A04]`}
//         >
//           <Link
//             to="home"
//             smooth={true}
//             duration={600}
//             className="cursor-pointer"
//           >
//             <Image
//               src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
//               alt="Itura's logo"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <Hamburger
//             toggled={isOpen}
//             toggle={setOpen}
//             color="#FFF"
//             direction="left"
//           />
//           {isOpen && (
//             <div
//               className={`p-8 py-12 h-[80vh] w-[100%] absolute top-18 left-0 text-white justify-center text-center z-50 flex flex-col items-center bg-black`}
//             >
//               <nav className="flex flex-col mt-10">
//                 <Link
//                   to="feature"
//                   smooth={true}
//                   duration={600}
//                   className="cursor-pointer mb-4"
//                 >
//                   Features
//                 </Link>
//                 <Link to="" className="mb-4">
//                   How it Works
//                 </Link>
//                 <Link to="" className="mb-4">
//                   Forum
//                 </Link>
//                 <Link to="" className="mb-4">
//                   Blog
//                 </Link>
//                 <a href="mailto:info@itura.org" className="cursor-pointer mb-4">
//                   Contact
//                 </a>
//               </nav>
//               <Link
//                 to="/dashboard"
//                 className="p-3 bg-linear-to-r from-orange to-lightOrange rounded-xl text-white"
//               >
//                 Launch the app
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header