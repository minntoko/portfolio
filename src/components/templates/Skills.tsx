import Circle from "../atoms/Circle";

const Skills = () => {
  return (
    <section id="skills" className="text-gray-700 border-t border-x-gray-700">
      <div className="conteinr px-5 py-16 mx-auto flex flex-wrap items-center">
        <div className="md:px-12 w-full">
          <div className="mb-6 w-full flex flex-col items-center md:flex-row">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center md:text-left">
              My Skills
            </h1>
            <span className="ml-auto text-base">2023年11月現在</span>
          </div>
          <div className="w-full flex justify-around flex-wrap">
            <div className="flex flex-col items-center w-[200px] my-4">
              <Circle label="HTML" deg={285} color="#f2652a" />
              <p className="mt-6">開発経験: 2年半</p>
              <p className="mt-2">一番最初に触った言語で基礎になるから大事</p>
            </div>
            <div className="flex flex-col items-center w-[200px] my-4">
              <Circle label="CSS" deg={300} color="#34a9dc" />
              <p className="mt-6">開発経験: 2年半</p>
              <p className="mt-2">UIを作るのが楽しくてハマった</p>
            </div>
            <div className="flex flex-col items-center w-[200px] my-4">
              <Circle label="JavaScript" deg={300} color="#f0dc4f" />
              <p className="mt-6">開発経験: 1年9ヶ月</p>
              <p className="mt-2">
                フロントもバックもなんでもできて好きな言語
              </p>
            </div>
            <div className="flex flex-col items-center w-[200px] my-4">
              <Circle label="React" deg={250} color="#62dafb" />
              <p className="mt-6">開発経験: 10ヶ月</p>
              <p className="mt-2">webアプリが作りたくて始めた</p>
            </div>
            <div className="flex flex-col items-center w-[200px] my-4">
              <Circle label="TypeScript" deg={220} color="#007acc" />
              <p className="mt-6">開発経験: 7ヶ月</p>
              <p className="mt-2">
                型をつけて安全に、便利に開発がしたくて始めた
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <p className="text-sm ml-auto inline-block">*グラフはスキルのレベルを表しています</p>
          </div>
          <div className="mt-6 w-full flex flex-col items-center md:flex-row">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center md:text-left">
              Other Skills
            </h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between mt-10">
            <div className="flex justify-around w-full lg:w-[50%]">
              <img src="./img/nextjs-icon.svg" alt="nextjsロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/flutter-icon.svg" alt="flutterロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/sass-icon.svg" alt="sassロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/tailwindcss-icon.svg" alt="tailwindcssロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/git-icon.svg" alt="gitロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
            </div>
            <div className="flex justify-around w-full mt-10 lg:w-[50%] lg:mt-0">
              <img src="./img/firebase-icon.svg" alt="firebaseロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/supabase-icon.svg" alt="supabaseロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/nodejs-icon.svg" alt="nodejsロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/express-icon.svg" alt="expressロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
              <img src="./img/mysql-icon.svg" alt="mysqlロゴ" className="w-[48px] h-[48px] mx-2 md:w-[64px] md:h-[64px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills