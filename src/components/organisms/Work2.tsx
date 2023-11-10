import Headline from "../atoms/Headline";
import Img2 from "../atoms/Img2";
const Work2 = () => {
  return (
    <div className="md:w-1/2 p-4 min-w-[523px]">
      <div className=" border-[6px] border-[#222]">
        <div className="flex items-center justify-between pr-8">
          <Headline title="タブマネージャー for Zenn" />
          <p className="text-lg font-bold text-gray-900">
            <span className="text-2xl">Oct.</span> 2023
          </p>
        </div>
        <div className="px-8 pb-8">
          <Img2 />
          <p className="mt-3">
            <span className="font-bold">概要: </span>
            開きすぎたZennのタブを一つにするためのサービス
          </p>
          <p className="mt-3">
            <span className="font-bold">開発背景: </span>
            開発をしながら調べごとをしているとタブが気付いたら20や30、それ以上に膨らむことがあり、<br />整理するためのサービスを作りたいと思って開発しました。
          </p>
          <div className="flex justify-between flex-wrap">
            <p className="mt-3">
              <span className="font-bold">開発期間： </span>11日間
            </p>
            <p className="mt-3">
              <span className="font-bold">開発人数： </span>1人
            </p>
            <p className="mt-3">
              <span className="font-bold">開発言語: </span>HTML, CSS, JS
            </p>
          </div>
          <a href="https://chromewebstore.google.com/detail/omiakadibidaahojhjdmlmllmolieggc?hl=ja&utm_source=ext_sidebar" target="_blank" className="flex justify-center items-center text-white bg-blue-500 hover:bg-blue-400 transition-all p-3 w-36 mt-6 rounded-full">
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
  )
}

export default Work2