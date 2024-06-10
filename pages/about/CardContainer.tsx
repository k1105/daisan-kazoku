import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <div className="card-container">
        <Card
          headline="否定や暴言"
          examples={[
            "「成績や容姿を馬鹿にされる」",
            "「産まなきゃよかったと言われる」",
          ]}
        />
        <Card
          headline="過保護"
          examples={[
            "「自分は何もできないと思われてる」",
            "「何から何まで親が干渉してくる」",
          ]}
        />
        <Card
          headline="家族の不仲"
          examples={["「両親が揉めている」", "「きょうだいの反抗期が過激」"]}
        />
        <Card
          headline="病気への無理解"
          examples={[
            "「病院に連れて行ってもらえない」",
            "「病気を軽蔑・軽視される」",
          ]}
        />
        <Card
          headline="理想や価値観の押し付け"
          examples={[
            "「親の認めた進路しか選択できない」",
            "「昔の価値観を押し付けられる」",
          ]}
        />
        <Card
          headline="子ども間差別"
          examples={[
            "「妹には優しいのに自分には違う」",
            "「きょうだいと比較される」",
          ]}
        />
        <Card
          headline="激しい気分の浮き沈み"
          examples={[
            "「怒ると話し合いができない」",
            "「わざとらしく弱っているように見せる」",
          ]}
        />
        <Card
          headline="雑に扱われる・無視"
          examples={[
            "「話をちゃんと聞いてもらえない」",
            "「自分に興味がない」",
          ]}
        />
        <Card
          headline="監視・管理"
          examples={["「GPSで管理されている」", "「友達関係を制限される」"]}
        />
        <Card
          headline="生活に必要なことをしない"
          examples={["「部屋の中が汚い」", "「家事を過剰に任される」"]}
        />
      </div>
      <style jsx>{`
        .card-container {
          padding-top: 30px;
          padding-left: 30px;
          overflow-x: auto;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
};

export default CardContainer;
