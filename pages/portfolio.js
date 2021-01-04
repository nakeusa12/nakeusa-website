import React from "react";
import Main from "../layouts/Main";

const portfolio = () => {
  return (
    <Main heightDisplay="h-full" title="Portfolio">
      <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white ">
          <h2 className="text-3xl font-bold">My Portfolio</h2>
          <h3 className="text-xl">RECENT PROJECT</h3>
          <div className="pt-20 w-full grid gap-4 grid-cols-3">
            <div className="bg-gray-200 h-56 text-black w-full flex flex-col text-center justify-center">
              <img src="/images/portfolioExample.png" className="object-cover w-full h-full" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default portfolio;
