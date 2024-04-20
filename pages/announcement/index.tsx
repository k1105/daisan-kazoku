import React from "react";
import { useEffect, useState } from "react";
import { client } from "@/libs/client";
import { AnnouncementItem } from "@/components/AnnouncementItem";
import Link from "next/link";

const Announcement = () => {
  const [data, setData] = useState<Data[] | null>(null);
  // propsからデータを使用
  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "news" });
      setData(response.contents);
    }

    fetchData();
  }, []);
  if (!data)
    return (
      <>
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <p>loading...</p>
        </div>
      </>
    );
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <p>活動報告</p>
          <Link href=".." style={{ color: "black", textDecoration: "none" }}>
            ×
          </Link>
        </div>
        <div style={{ paddingTop: "10vh" }}>
          {(() => {
            const res = [];
            for (const elem of data) {
              res.push(<AnnouncementItem key={elem.id} elem={elem} />);
            }
            return res;
          })()}
        </div>
      </div>
      <style jsx>{`
        .main {
        }
        .container {
          width: 60vw;
          margin: 0 20vw;
          display: flex;
          flex-direction: column;
          position: fixed;
          z-index: 1;
          height: 85vh;
          border-bottom: 1px solid #ccc;
          overflow: scroll;
        }

        .container::-webkit-scrollbar {
          display: none;
        }

        .header {
          z-index: 10;
          position: fixed;
          width: 60vw;
          font-size: 1.5rem;
          font-weight: 100;
          display: flex;
          justify-content: space-between;
          height: 6rem;
          line-height: 6rem;
          border-bottom: 1px solid #ccc;
          background-color: #fafafa;
        }

        @media screen and (max-width: 600px) {
          .header {
            width: 94vw;
          }
          .header p {
            font-size: 1.5rem;
          }
          .container {
            width: 94vw;
            margin: 0 3vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Announcement;

// getStaticProps関数。ビルド時に実行される
export async function getStaticProps() {
  // データの取得
  const data = await client.get({
    endpoint: "news",
  });

  // 取得したデータをpropsとしてページコンポーネントに渡す
  return {
    props: { data }, // 注意: 実際にこのデータ構造がclient.getから返されるかはAPIの設計に依存します
  };
}
