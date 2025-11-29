import React from "react";

const Table = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>名称</th>
            <td>認定NPO法人第３の家族</td>
          </tr>
          <tr>
            <th>設立</th>
            <td>2023年3月23日（活動開始2021年3月）</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>神奈川県横浜市中区相生町3-61 泰生ビル2F</td>
          </tr>
          <tr>
            <th>提供エリア</th>
            <td>Web：全国。イベント：神奈川・東京</td>
          </tr>
          <tr>
            <th>メンバー</th>
            <td>20名（業務委託含む）</td>
          </tr>
          <tr>
            <th>提供サービス</th>
            <td>
              コミュニティサイト：gedokun
              <br />
              情報サイト：nigeruno
              <br />
              調査事業：家庭環境データ
              <br />
              オンライン・オフラインイベント
            </td>
          </tr>
          <tr>
            <th>活動内容</th>
            <td>
              悩みを抱え込む子ども・若者が健全に成長できるWebプラットフォームを構築する。
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        table {
          border-collapse: collapse;
        }
        th,
        td {
          border-bottom: 1px solid var(--gray);
          padding-bottom: 2rem;
          padding-top: 2rem;
        }

        tr {
          height: 5rem;
          background-color: white;
        }
        th {
          font-weight: normal;
          font-size: 0.8rem;
          color: var(--dark-gray);
          font-weight: 600;
          width: 20%;
          vertical-align: center;
          text-align: left;
        }

        @media screen and (max-width: 600px) {
          table {
            font-size: 0.9rem;
          }
          th {
            font-size: 0.7rem;
            padding-right: 1rem;
            width: 5.5rem;
          }
          td,th{
            padding-bottom: 1rem;
            padding-top: 1rem;
        }
          tr {
          height: 4rem;
          }
          } 
      `}</style>
    </>
  );
};

export default Table;
