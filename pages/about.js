import Main from "../layouts/Main";

const about = () => {
  return (
    <Main title="About">
      <div className="w-full h-screen py-28 px-48 flex flex-row">
        <div className="w-3/5 text-white">
          <h2 className="text-3xl font-bold">About Me</h2>
          <h3 className="text-xl">SUMMARY</h3>
          <p className="mt-8 w-4/5 text-justify text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            accusamus quo impedit! Praesentium laudantium error quas adipisci?
            Perferendis delectus nobis quasi, dolorem ipsa laborum? Itaque
            tempore minus at rerum nam commodi ad omnis quos accusamus quo
            placeat, doloremque unde iusto voluptatum, cupiditate aut
            repellendus natus illo molestias illum quod nulla?
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
