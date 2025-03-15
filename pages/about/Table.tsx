import React from "react";

const Table = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>名称</th>
            <td>特定非営利活動法人第３の家族</td>
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
              掲示板サイト：gedokun
              <br />
              情報サイト：nigeruno
              <br />
              調査事業：家庭環境データ
              <br />
              イベント：Dai3 LIVE・裏母の日
            </td>
          </tr>
          <tr>
            <th>活動内容</th>
            <td>
              家庭環境問題のはざまの子ども・若者が社会資源に繋がるためのプラットフォームを運営する。
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
          padding: 10px;
          padding-bottom: 1rem;
        }

        tr {
          height: 2rem;
          background-color: white;
        }
        th {
          font-weight: normal;
          font-size: 0.9rem;
          width: 20%;
          vertical-align: top;
          text-align: left;
          color: #9a9a9a;
        }

        @media screen and (max-width: 600px) {
          table {
            font-size: 0.8rem;
          }
          th {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Table;
