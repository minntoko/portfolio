import Img from "../atoms/Img";
import Headline from "../atoms/Headline";
const Work = () => {
  return (
    <div className="w-full mb-4 md:w-1/2 md:p-4 md:mb-4">
      <div className=" border-[6px] border-[#222]">
        <div className="flex items-center justify-between pr-8">
          <Headline title="FlashOrder" />
          <p className="text-sm font-bold text-gray-900 md:text-lg">
            <span className="text-sm md:text-2xl">Aug.</span> 2023
          </p>
        </div>
        <Img />
        <div className="px-8 pb-8">
          <p className="mt-3">
            <span className="font-bold">概要: </span>
            瞬時に切り替わるオーダーをメモして当てるゲーム
          </p>
          <p className="mt-3">
            <span className="font-bold">開発背景: </span>
            飲食店のホールバイトでオーダーを取るのが大変そうだと思ってバイトの中では敷居が高いと感じていました。
            <br />
            そこで、オーダーを取るための練習ができるサービスを開発しました。
          </p>
          <div className="flex justify-between flex-wrap">
            <p className="mt-3">
              <span className="font-bold">開発期間： </span>2日間
            </p>
            <p className="mt-3">
              <span className="font-bold">開発人数： </span>1人
            </p>
            <p className="mt-3">
              <span className="font-bold">開発言語: </span>React, TypeScript
            </p>
          </div>
          <a
            href="https://flash-order.minntoko.com/"
            target="_blank"
            className="flex justify-center items-center text-white bg-blue-500 hover:bg-blue-400 transition-all p-3 w-36 mt-6 rounded-full"
          >
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
  );
};

export default Work;
