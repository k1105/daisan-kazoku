import React from "react";

export const Table = () => {
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
            <td>神奈川県横浜市</td>
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
          border: 1px solid #ccc;
          padding: 10px;
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
          background-color: #eee;
        }
      `}</style>
    </>
  );
};
