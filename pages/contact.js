import Main from "../layouts/Main";

const contact = () => {
  return (
    <Main heightDisplay="h-screen" title="Contact">
      <div className="w-full min-h-screen py-28 px-48 flex flex-col">
        <div className="w-full text-white">
          <h2 className="text-3xl font-bold">My Contact</h2>
          <h3 className="text-xl">GET IN TOUCH</h3>
        </div>
        <div className="pt-20 w-full h-full grid gap-4 grid-cols-2">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="nick"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 resize-none text-sm"
                  id="message" placeholder="Your Idea or Message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
                <button
                  className="shadow w-full bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-20 rounded uppercase"
                  type="button"
                >
                  Send Message
                </button>
            </div>
          </form>
          <div className="bg-gray-200 text-black w-full flex flex-col text-center justify-center">
            TES 1
          </div>
        </div>
      </div>
    </Main>
  );
};

export default contact;
