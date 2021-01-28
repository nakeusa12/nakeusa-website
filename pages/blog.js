import Link from "next/link";
import Title from "../components/Title/Title";
import Main from "../layouts/Main";

const blog = () => {
  return (
    <Main heightDisplay="h-full" title="Blogs">
      <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white">
          <Title text="Latest Article" textTitle="My Blog" fontSize="text-xl" fontWeigth="font-normal" fontTitle="text-3xl" />
          <div className="pt-20 w-full grid gap-6 grid-cols-3 z-40">
              <div className="bg-gray-200 h-96 text-black w-full flex flex-col overflow-hidden rounded ">
                <Link href="/">
                  <div className="lg:h-44 md:h-36 w-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-500 cursor-pointer"
                    src="/images/blogTest.jpeg"
                    alt="blog"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    October 16, 2020 - 4 min read
                  </h2>
                  <Link href="/">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 cursor-pointer">
                    Update Covid-19 Tracker
                  </h1>
                  </Link>
                  <p className="leading-relaxed mb-3 text-gray-700">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0 py-1 px-3 text-xs rounded-lg bg-blue-500 uppercase select-none mr-1">
                      #Css
                    </a>
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0 py-1 px-3 text-xs rounded-lg bg-blue-500 uppercase select-none mr-1">
                      #html
                    </a>
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0 py-1 px-3 text-xs rounded-lg bg-blue-500 uppercase select-none">
                      #javascript
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default blog;
