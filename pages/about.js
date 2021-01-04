import Main from "../layouts/Main";

const about = () => {
  return (
    <Main title="About">
      <div className="w-full h-screen py-28 px-48 flex flex-row">
        <div className="w-3/5 text-white">
          <h2 className="text-3xl font-bold">About Me</h2>
          <h3 className="text-xl">SUMMARY</h3>
          <p className="mt-8 w-4/5 text-justify text-base">
          Hello, I'm Saiful Nakeusa while focusing on front end web developer. Through innovation, passion and expertise. I want to create a high quality and useful website for everyone. My favorite libraries are React and styled Components, sometimes I also use the Tailwindcss framework. For the most part I studied it myself and like to learn new things.
          </p>
        </div>
        <div className="w-2/5 h-full">
          <img src="/images/profile.png" alt="profile" className="h-full w-full object-contain" />
        </div>
      </div>
    </Main>
  );
};

export default about;
