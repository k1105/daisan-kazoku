import { AnnouncementItem } from "./AnnouncementItem";
import { client } from "@/libs/client";
import { useState, useEffect } from "react";

export const AnnouncementTable = () => {
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
    <>
      <div className="table">
        {(() => {
          const res = [];
          for (const elem of data) {
            res.push(<AnnouncementItem key={elem.id} elem={elem} />);
          }
          return res;
        })()}
      </div>
      <style jsx>{`
        .table {
          padding-top: 6rem;
        }

        @media screen and (max-width: 600px) {
          .table {
            padding-top: 3rem;
          }
        }
      `}</style>
    </>
  );
};

// getStaticProps関数。ビルド時に実行される
export async function getStaticProps() {
  // データの取得
  const data = await client.get({
    endpoint: "news",
  });

  console.log(data);

  // 取得したデータをpropsとしてページコンポーネントに渡す
  return {
    props: { data }, // 注意: 実際にこのデータ構造がclient.getから返されるかはAPIの設計に依存します
  };
}
