import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Circle from "./components/atoms/circle";

const App: React.FC = () => {
  return (
    <div id="home">
      <header className="text-gray-700 border-b border-gray-200 sticky top-0 backdrop-blur-xl bg-white/60 z-50">
        <div className="flex container mx-auto p-5 flex-col md:flex-row justify-between items-center">
          <a href="/#home" className="font-medium text-gray-900 mb-3 md:mb-0">
            <span className="text-xl ml-3">Tomoya's Portfolio</span>
          </a>
          <nav>
            <ul className="flex list-none text-base">
              <li>
                <a href="#home" className="mr-5 hover:text-blue-400 transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="#skills" className="mr-5 hover:text-blue-400 transition-all duration-300">Skills</a>
              </li>
              <li>
                <a href="#works" className="mr-5 hover:text-blue-400 transition-all duration-300">Works</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="about">
        <div className="flex container mx-auto flex-col-reverse md:flex-row py-8 md:py-16 px-5 items-center">
          <div className="md:w-1/2 text-center md:pl-10">
            <img
              src="./img/icon.jpg"
              alt="プロフィール画像"
              className="w-4/6 md:max-w-md block mx-auto"
            />
          </div>
          <div className="md:w-1/2 mb-16 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-gray-900 font-midium mb-4 font-bold">
              松田 知也(21)
              <br />
              <span className="text-lg md:text-xl lg:text-4xl my-2 md:my-3 lg:my-8 xl:my-10 block">
                HAL名古屋 高度情報学科 3年
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              技術をいかに使いやすい形に落とし込むかということに興味があってフロントエンドを中心に開発しています。
            </p>
            <div className="flex justify-around">
              <a href="https://github.com/minntoko" target="_blank" className="text-md md:text-xl lg:text-2xl flex items-center justify-between" >
                <GitHubIcon className="!text-3xl md:!text-4xl lg:!text-5xl mr-2" /> Github
              </a>
              <a href="https://twitter.com/minntoko0822" target="_blank" className="text-md md:text-xl lg:text-2xl flex items-center">
                <img src="./img/x-logo.svg" alt="x(twitter)" className="w-6 md:w-8 lg:w-10 mr-2" />
                X(Twitter)
              </a>
              <a href="https://zenn.dev/minntoko" target="_blank" className="text-md md:text-xl lg:text-2xl flex items-center">
                <img src="./img/zenn-logo.svg" alt="Zenn" className="w-6 md:w-8 lg:w-10 mr-2" />
                Zenn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="text-gray-700 border-t border-x-gray-700">
        <div className="conteinr px-5 py-16 mx-auto flex flex-wrap items-center">
          <div className="md:px-12 w-full">
            <div className="mb-4 w-full flex flex-col items-center md:flex-row">
              <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 xl:mb-10 text-center md:text-left">
                My Skills
              </h1>
              <span className="ml-auto text-base">2023年11月現在</span>
            </div>
            <div className="w-full flex justify-around flex-wrap">
              <div className="flex flex-col items-center w-[200px]">
                <Circle label="HTML" deg={285} color="#f2652a" />
                <p className="mt-6">開発経験: 2年半</p>
                <p className="mt-2">一番最初に触った言語で基礎になるから大事</p>
              </div>
              <div className="flex flex-col items-center w-[200px]">
                <Circle label="CSS" deg={300} color="#34a9dc" />
                <p className="mt-6">開発経験: 2年半</p>
                <p className="mt-2">UIを作るのが楽しくてハマった</p>
              </div>
              <div className="flex flex-col items-center w-[200px]">
                <Circle label="JavaScript" deg={300} color="#f0dc4f" />
                <p className="mt-6">開発経験: 1年9ヶ月</p>
                <p className="mt-2">フロントもバックもなんでもできて好きな言語</p>
              </div>
              <div className="flex flex-col items-center w-[200px]">
                <Circle label="React" deg={250} color="#62dafb" />
                <p className="mt-6">開発経験: 10ヶ月</p>
                <p className="mt-2">webアプリが作りたくて始めた</p>
              </div>
              <div className="flex flex-col items-center w-[200px]">
                <Circle label="TypeScript" deg={220} color="#007acc" />
                <p className="mt-6">開発経験: 7ヶ月</p>
                <p className="mt-2">型をつけて安全に、便利に開発がしたくて始めた</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="text-gray-700 border-t border-x-gray-700">
        <div className="conteinr px-5 py-16 mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 xl:mb-10 text-center md:text-left">
            Works
          </h1>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500 text-while rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M13 10H20L11 23V14H4L13 1V10Z"
                        fill="rgba(255,255,255,1)"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    FlashOrder
                  </h2>
                </div>
                <div>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto aliquam at est doloremque quas, atque rem
                    corrupti esse ea. Eaque.
                  </p>
                  <a href="#" className="flex text-blue-500 items-center">
                    プレイする
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500 text-while rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M13 10H20L11 23V14H4L13 1V10Z"
                        fill="rgba(255,255,255,1)"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    タブマネージャー for Zenn
                  </h2>
                </div>
                <div>
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto aliquam at est doloremque quas, atque rem
                    corrupti esse ea. Eaque.
                  </p>
                  <a href="#" className="flex text-blue-500 items-center">
                    ストアへ
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
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
