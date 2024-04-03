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
        content="minntoko.comは技術スタックや今まで作ってきた作品を紹介するサイトです。"
      />
      <meta property="og:site_name" content="知也のポートフォリオサイト" />
      <meta property="og:image" content={`${url}img/defaultOGP.png`} />
      <meta property="og:locale" content="ja_JP" />

      <meta
        name="keywords"
        content="松田知也,HAL名古屋,ポートフォリオ,フロントエンド,学生,React"
      />
      <meta
        content="HAL名古屋のフロントエンドエンジニアを目指している松田知也です。
        技術スタックやや今まで作ってきた作品を紹介するポートフォリオサイトです。"
        name="description"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@minntoko_" />
    </Helmet>
  );
};

export default ReactHelmet;
