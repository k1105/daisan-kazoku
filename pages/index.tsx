import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
// クライアントのインポート（コメントアウト解除）
import { client } from "@/libs/client";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
  };
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
      {(() => {
        const res = [];
        for (const elem of data) {
          console.log(elem.OGP);
          res.push(
            <>
              <h1 style={{ marginBottom: "3rem" }}>{elem.title}</h1>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  marginBottom: "2rem",
                  position: "relative",
                  border: "1px solid #eee",
                }}
              >
                <Image
                  src={elem.OGP.url}
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="ogp-image"
                />
              </div>

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: elem.content }}
              />
            </>
          );
        }
        return res;
      })()}
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
