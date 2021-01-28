import Link from "next/link";
import React from "react";
import Title from "../components/Title/Title";
import Main from "../layouts/Main";

const portfolio = () => {
  return (
    <Main heightDisplay="h-full" title="Portfolio">
      <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white ">
          <Title text="Recent Project" textTitle="My Portfolio" fontSize="text-xl" fontWeigth="font-normal" fontTitle="text-3xl" />
          <div className="pt-20 w-full grid gap-x-5 gap-y-6 grid-cols-3">
            <Link href="/">
              <div className="bg-gray-200 h-72 text-black w-full flex flex-col text-center justify-center relative cursor-pointer">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/portfolioExample.png"
                />
                <div className="h-72 px-6 py-8 relative w-full bg-white opacity-0 hover:opacity-90 transform transition-opacity duration-500">
                  <div className="w-full border-2 h-56 border-gray-800 p-2">
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-4">
                      Update Covid-19 Tracker
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default portfolio;
