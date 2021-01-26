import React, { useState } from "react";
import Link from "next/link";
// Import react scroll
// import { Link as LinkScroll } from "react-scroll";
// import ButtonOutline from "../misc/ButtonOutline.";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter, FiGithub } from "react-icons/fi";


const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className="flex fixed w-full items-center justify-between px-6 h-24 text-white z-10">
        <div className="flex items-center ml-6">
          <button className="mr-2" aria-label="Open Menu" onClick={toggle}>
            <svg
            fill="none"
            stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          </button>
          <h1 className="text-2xl font-medium font-sans">Hello</h1>
        </div>


        <aside className={`transform top-0 left-0 w-56 text-gray-800 bg-white fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-50 ${isOpen ? 'block': 'hidden'}`}>

          <div className="flex w-full flex-col justify-between h-screen">

            <div className="flex w-full items-center justify-between p-5 border-b">
              <span>
                <h1 className="text-2xl font-medium font-sans">Nakeusa</h1>
              </span>
              <div className="mt-2 cursor-pointer" onClick={toggle} >
                <svg fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
              </div>
            </div>
           
            <ul className="h-full flex flex-col justify-center">
              <Link href="/">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                <span className="mr-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                </span>
                <span>Home</span>
              </a>
              </Link>
              <Link href="/about">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                  <span className="mr-2">
                    <svg fill="none"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>About</span>
                </a>
              </Link>           
              <Link href="/skills">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                  <span className="mr-2">
                    <svg fill="none"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </span>
                  <span>Skills</span>
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                <span className="mr-2">
                    <svg fill="none"
                       strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>
                <span>Portfolio</span>
              </a>
              </Link>
              <Link href="/blog">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                <span className="mr-2">
                  <svg fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </span>
                <span>Blog</span>
              </a>
              </Link>
              <Link href="/contact">
                <a className="flex items-center p-4 hover:bg-gray-700 hover:text-white">
                <span className="mr-2">
                  <svg fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
                <span>Contact</span>
              </a>
              </Link>
            </ul>
            
            <div className="flex w-full items-end p-4 justify-between border-t">
              <a href="!#"><AiOutlineInstagram className="text-2xl text-gray-800 text-opacity-50 hover:text-opacity-100" /></a>
              <a href="!#"><FiTwitter className="text-2xl text-gray-800 text-opacity-50 hover:text-opacity-100" /></a>
              <a href="!#"><AiOutlineFacebook className="text-2xl text-gray-800 text-opacity-50 hover:text-opacity-100"  /></a>
              <a href="!#"><FiGithub className="text-2xl text-gray-800 text-opacity-50 hover:text-opacity-100" /></a>
            </div>
          
          </div>
        </aside>


      </nav>
      

      {/* Mobile Navigation */}
      {/* <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav> */}
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
