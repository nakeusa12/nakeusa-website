// import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
// import { Link as LinkScroll } from "react-scroll";
// import ButtonOutline from "../misc/ButtonOutline.";

const Header = () => {
  // const [activeLink, setActiveLink] = useState(null);
  return (
    <>
      <header className="fixed">
        <nav className="max-w-screen-xl px-6 sm:px-10 lg:px-20 mx-auto grid grid-flow-col py-10">
          <div className="cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="5" rx="2.5" fill="#F3F3F3" />
              <rect y="10" width="30" height="5" rx="2.5" fill="#F3F3F3" />
              <rect y="20" width="30" height="5" rx="2.5" fill="#F3F3F3" />
            </svg>
          </div>
          <h1 className="text-gray-100 text-3xl absolute top-9 ml-12 font-medium">
            WELCOME
          </h1>
        </nav>
      </header>

      <nav className="absolute w-72 h-screen hidden flex-col justify-between bg-gray-50 rounded-r-xl py-10 px-6">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl font-medium">WELCOME</h1>
          <div className="cursor-pointer">
            <svg
              width="20"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.82825 1.78489L15.3388 10.6482C16.4556 11.9662 16.2798 13.9428 14.948 15.043C13.6571 16.1094 11.7526 15.9582 10.6462 14.7014L2.96947 5.98162C1.51401 4.32842 2.11768 1.734 4.15346 0.893137C5.44207 0.360883 6.92692 0.721208 7.82825 1.78489Z"
                fill="black"
              />
              <path
                d="M22.1717 28.2151L14.6612 19.3518C13.5444 18.0338 13.7202 16.0572 15.052 14.957C16.3429 13.8906 18.2474 14.0418 19.3538 15.2986L27.0305 24.0184C28.486 25.6716 27.8823 28.266 25.8465 29.1069C24.5579 29.6391 23.0731 29.2788 22.1717 28.2151Z"
                fill="black"
              />
              <path
                d="M22.1717 1.78489L14.6612 10.6482C13.5444 11.9662 13.7202 13.9428 15.052 15.043C16.3429 16.1094 18.2474 15.9582 19.3538 14.7014L27.0305 5.98162C28.486 4.32842 27.8823 1.734 25.8465 0.893137C24.5579 0.360883 23.0731 0.721208 22.1717 1.78489Z"
                fill="black"
              />
              <path
                d="M7.82825 28.2151L15.3388 19.3518C16.4556 18.0338 16.2798 16.0572 14.948 14.957C13.6571 13.8906 11.7526 14.0418 10.6462 15.2986L2.96947 24.0184C1.51401 25.6716 2.11768 28.266 4.15346 29.1069C5.44207 29.6391 6.92692 29.2788 7.82825 28.2151Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <ul className="flex w-full flex-col text-black-500">
          <Link href="/">
            <a className="tracking-widest cursor-pointer font-base text-gray-500 hover:text-gray-900 hover:font-medium uppercase">Home</a>
          </Link>
          <Link href="/about">
            <a className="mt-8 tracking-widest cursor-pointer font-base text-gray-500 hover:text-gray-900 hover:font-medium uppercase">About</a>
          </Link>
          <Link href="/skills">
            <a className="mt-8 tracking-widest cursor-pointer font-base text-gray-500 hover:text-gray-900 hover:font-medium uppercase">Skills</a>
          </Link>
          <Link href="/portfolio">
            <a className="mt-8 tracking-widest cursor-pointer font-base text-gray-500 hover:text-gray-900 hover:font-medium uppercase">Portfolio</a>
          </Link>
        </ul>

        <div className="flex flex-row w-full">
          <Link href="#" >
            <a className="mr-4">TY</a>
          </Link>
          <Link href="#">
            <a className="mr-4">IX</a>
          </Link>
          <Link href="#">
            <a className="mr-4">UT</a>
          </Link>
        </div>
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
