import GitHubIcon from "@mui/icons-material/GitHub";
import getSchoolYear from "../../utils/getSchoolYear";

const About = () => {
  const entranceYear = 2021;
  const schoolYear = getSchoolYear(entranceYear);

  return (
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
              HAL名古屋 高度情報学科 {schoolYear}年
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            技術をいかに使いやすい形に落とし込むかということに興味があってフロントエンドを中心に開発しています。
          </p>
          <div className="flex justify-around md:justify-between lg:w-[80%]">
            <a
              href="https://github.com/minntoko"
              target="_blank"
              className="text-md md:text-xl lg:text-2xl flex items-center justify-between"
            >
              <GitHubIcon className="!text-3xl md:!text-4xl mr-2" /> Github
            </a>
            <a
              href="https://twitter.com/minntoko_"
              target="_blank"
              className="text-md md:text-xl lg:text-2xl flex items-center"
            >
              <img
                src="./img/x-logo.svg"
                alt="x(twitter)"
                className="w-6 md:w-8 mr-2"
              />
              X(Twitter)
            </a>
            <a
              href="https://zenn.dev/minntoko"
              target="_blank"
              className="text-md md:text-xl lg:text-2xl flex items-center"
            >
              <img
                src="./img/zenn-logo.svg"
                alt="Zenn"
                className="w-6 md:w-8 mr-2"
              />
              Zenn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About