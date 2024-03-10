import { Helmet } from "react-helmet";

const ReactHelmet = () => {
  const url = window.location.href;
  return (
    <Helmet>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ポートフォリオ" />
      <meta
        property="og:description"
        content="技術スタックや今まで作ってきた作品を紹介するポートフォリオサイトです。"
      />
      <meta property="og:site_name" content="知也のポートフォリオサイト" />
      <meta property="og:image" content={`${url}img/portfolioOGP.png`} />
      <meta property="og:locale" content="ja_JP" />

      <meta
        name="keywords"
        content="ポートフォリオ,フロントエンド,学生,React"
      />
      <meta
        content="HAL名古屋のフロントエンドエンジニアを目指している学生です。
        技術スタックやや今まで作ってきた作品を紹介するポートフォリオサイトです。"
        name="description"
      />
    </Helmet>
  );
};

export default ReactHelmet;
