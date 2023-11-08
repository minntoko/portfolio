import Work from "../organisms/Work";
import Work2 from "../organisms/Work2";

const Works = () => {
  return (
    <section id="works" className="text-gray-700 border-t border-x-gray-700">
      <div className="conteinr px-5 py-16 mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 xl:mb-10 text-center md:text-left">
          Works
        </h1>
        <div className="flex flex-wrap justify-around">
          <Work />
          <Work2 />
        </div>
      </div>
    </section>
  )
}

export default Works