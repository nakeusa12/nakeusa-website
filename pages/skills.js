import Main from "../layouts/Main";

const skills = () => {
  return (
    <Main title="Skills">
     <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white ">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <h3 className="text-xl">DESIGN & DEVELOPMENT</h3>
          <div className="pt-20 w-full grid gap-4 grid-cols-5">
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-48 w-full flex flex-col text-center justify-center">
              TES 1
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default skills;
