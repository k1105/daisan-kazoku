import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <div className="card-container">
        <Card
          headline="厳しい理想"
          examples={["親の教育・職業・結婚などの", "理想が高すぎる"]}
          image="/img/diagram/status01.png"
        />
        <Card
          headline="過干渉"
          examples={["GPSの監視", "人間関係の制限", "年相応ではない門限"]}
          image="/img/diagram/status02.png"
        />
        <Card
          headline="家族の不仲"
          examples={["両親の不仲・親と兄弟の不仲", ""]}
          image="/img/diagram/status03.png"
        />
        <Card
          headline="無理解"
          examples={["精神科受診の拒否", "性自認をバカにする"]}
          image="/img/diagram/status04.png"
        />
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          padding-top: 30px;
          padding-left: 30px;
          overflow-x: auto;
          white-space: nowrap;
        }

        @media screen and (max-width: 600px) {
          .card-container {
            padding-top: 0px;
            padding-left: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default CardContainer;
