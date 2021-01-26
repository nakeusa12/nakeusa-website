import Main from "../layouts/Main";

const contact = () => {
  return (
    <Main heightDisplay="h-screen" title="Contact">
      <div className="w-full min-h-screen py-28 px-48 flex flex-col">
        <div className="w-full text-white">
          <h2 className="text-3xl font-bold">My Contact</h2>
          <h3 className="text-xl">GET IN TOUCH</h3>
        </div>
        <div className="pt-16 w-full h-full grid gap-4 grid-cols-2">
          <form class="flex flex-col w-full px-2">
            <div class="relative mb-3">
              <label for="name" class="leading-7 text-sm text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-3">
              <label for="email" class="leading-7 text-sm text-gray-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 focus:outline-none text-base text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </form>
          <div class="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63538.56350410564!2d95.30363905477579!3d5.543246414941255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040377ae63dbcdf%3A0x3039d80b220cb90!2sBanda%20Aceh%2C%20Banda%20Aceh%20City%2C%20Aceh!5e0!3m2!1sen!2sid!4v1610803529595!5m2!1sen!2sid"
            style={{filter: 'contrast(1.2) opacity(0.7)'}}
            ></iframe>
            
          </div>
        </div>
      </div>
    </Main>
  );
};

export default contact;
