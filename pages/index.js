import Main from "../layouts/Main"
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { useState } from "react";


export default function Home() {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show)

  return (
    <Main>
      <div className="w-full min-h-screen flex justify-center items-center relative">
        <div className="w-1/2 text-white">
          <h2 className="text-4xl font-bold font-custom">My Name</h2>
          <h1 className="text-6xl text-fill-transparent text-stroke text-stroke-white text-stroke-2 paint-fsm font-bold font-custom">SAIFUL NAKEUSA</h1>
          <div className="mt-6 w-11/12 h-3 bg-gradient-to-r from-red-600 via-pink-600 to-blue-600"></div>
        </div>
        <div className="-mt-10">
          <p className="text-lg uppercase text-white">Web Developer</p>
          <p className="text-lg uppercase text-white">UI / UX Designer</p>
          <p className="text-lg uppercase text-white">Content Creator</p>
        </div>
        <div className="absolute bottom-8 left-14 -rotate-90">
          <button className="text-lg text-white focus:outline-none" onClick={toggleShow}>FOLLOW ME</button>
          <div className={`flex bg-white absolute left-32 -bottom-1 h-10 items-center rounded ${show ? "block" : "hidden"} `}>
            <a href="#" className="mr-4 ml-4">
              <AiOutlineInstagram className="text-2xl transition-all duration-700 ease-in-out text-gray-700 hover:text-gray-900" />
            </a>
            <a href="#" className="mr-4">
              <AiOutlineFacebook className="text-2xl transition-all duration-700 ease-in-out text-gray-700 hover:text-gray-900" />
            </a>
            <a href="#" className="mr-4">
              <FiTwitter className="text-2xl transition-all duration-700 ease-in-out text-gray-700 hover:text-gray-900" />
            </a>
            <a href="#" className="mr-4">
              <FiGithub className="text-2xl transition-all duration-700 ease-in-out text-gray-700 hover:text-gray-900" />
            </a>
            <a href="#" className="mr-4">
              <AiOutlineLinkedin className="text-2xl transition-all duration-700 ease-in-out text-gray-700 hover:text-gray-900" />
            </a>
            <div className="absolute w-4 h-4 bg-white transform rotate-45 -left-2 bottom-3" />
          </div>
        </div>
      </div>
    </Main>
  );
}
