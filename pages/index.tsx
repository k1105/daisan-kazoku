import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { client } from "@/libs/client";
import { AnnouncementItem } from "@/components/AnnouncementItem";

type Data = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
  OGP: {
    url: string;
    height: number;
    width: number;
  } | null;
};

// Homeコンポーネント。props経由でデータを受け取る
const Home = () => {
  const [data, setData] = useState<Data[] | null>(null);
  // propsからデータを使用
  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "news" });
      console.log(response.contents);
      setData(response.contents);
    }

    fetchData();
  }, []);
  if (!data)
    return (
      <>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            lineHeight: "100vh",
          }}
        >
          <p>loading...</p>
        </div>
      </>
    );
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>お知らせ</p>
          <p>×</p>
        </div>
        <div style={{ paddingTop: "3rem" }}>
          {(() => {
            const res = [];
            for (const elem of data) {
              res.push(<AnnouncementItem key={elem.id} elem={elem} />);
            }
            return res;
          })()}
        </div>
      </div>
    </main>
  );
};

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

export default Home;
