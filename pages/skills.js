import Main from "../layouts/Main";

const skills = () => {
  return (
    <Main title="Skills" heightDisplay="h-full">
     <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white ">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <h3 className="text-xl">DESIGN & DEVELOPMENT</h3>
          <div className="pt-20 w-full grid gap-4 grid-cols-5">
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center transform scale-100 transition-transform duration-500 hover:scale-105">
              <img src="/icons/photoshop.svg" alt="icons" className="w-20 h-20 flex justify-center" />
              <h4 className="text-gray-900 font-semibold mt-4">1 Year</h4>
              <span className="text-gray-800 font-normal">of experience</span>
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center transform scale-100 transition-transform duration-500 hover:scale-105">
              <img src="/icons/figma.svg" alt="icons" />
              <h4 className="text-gray-900 font-semibold mt-4">2 Years</h4>
              <span className="text-gray-800 font-normal">of experience</span>
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center transform scale-100 transition-transform duration-500 hover:scale-105">
              <img src="/icons/ai.svg" alt="icons" />
              <h4 className="text-gray-900 font-semibold mt-4">1 Year</h4>
              <span className="text-gray-800 font-normal">of experience</span>
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center transform scale-100 transition-transform duration-500 hover:scale-105">
              <img src="/icons/xd.svg" alt="icons" />
              <h4 className="text-gray-900 font-semibold mt-4">1 Year</h4>
              <span className="text-gray-800 font-normal">of experience</span>
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center transform scale-100 transition-transform duration-500 hover:scale-105">
              <img src="/icons/html.svg" alt="icons" />
              <h4 className="text-gray-900 font-semibold mt-4">3 Years</h4>
              <span className="text-gray-800 font-normal">of experience</span>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default skills;
