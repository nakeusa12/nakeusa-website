import Main from "../layouts/Main"

export default function Home() {
  return (
    <Main>
     <div class="w-full h-screen flex justify-center items-center relative">
      <div class="w-1/2 text-white">
        <h2 className="text-4xl font-bold">My Name</h2>
        <h1 className="text-6xl font-bold">SAIFUL NAKEUSA</h1>
        <div class="mt-6 w-11/12 h-3 bg-gradient-to-r from-blue-400 via-red-500 to-pink-500"></div>
      </div>
      <div class="-mt-10">
        <p className="text-lg uppercase text-white">Web Developer</p>
        <p className="text-lg uppercase text-white">UI / UX Designer</p>
        <p className="text-lg uppercase text-white">Content Creator</p>
      </div>
      <div class="absolute bottom-8 left-20 -rotate-90">
        <p className="text-lg text-white">FOLLOW ME</p>
      </div>
    </div>
    </Main>
  );
}
