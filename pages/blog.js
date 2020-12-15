import Main from "../layouts/Main"

const blog = () => {
  return (
    <Main heightDisplay="h-full" title="Blogs">
      <div className="w-full h-full py-28 px-48 flex flex-row">
        <div className="w-full text-white ">
          <h2 className="text-3xl font-bold">My Blog</h2>
          <h3 className="text-xl">LATEST ARTICLE</h3>
          <div className="pt-20 w-full grid gap-4 grid-cols-3">
            <div className="bg-gray-200 h-96 text-black w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-96 text-black w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-96 text-black w-full flex flex-col text-center justify-center">
              TES 1
            </div>
            <div className="bg-gray-200 h-96 text-black w-full flex flex-col text-center justify-center">
              TES 1
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default blog;