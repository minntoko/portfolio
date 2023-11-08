import React from "react";
import Header from "./components/templates/Header";
import About from "./components/templates/About";
import Skills from "./components/templates/Skills";
import Work from "./components/organisms/Work";
import Work2 from "./components/organisms/Work2";

const App: React.FC = () => {
  return (
    <div id="home">
      <Header />
      <About />
      <Skills />

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
      <footer>
        <div className="conteinr px-5 py-8 mx-auto bg-blue-500 text-white text-center">
          <div className="flex flex-wrap items-center justify-around">
            <div>
              <a href="#home">Tomoya's Portfolioについて</a>
            </div>
            <div className="flex flex-col">
              <a href="#home">Home</a>
              <a href="#skills">My Skills</a>
              <a href="#works">Works</a>
            </div>
          </div>
          <small className="block mt-4">
            &copy; 2023 tomoya All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default App;
