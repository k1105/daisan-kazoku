import Layout from "@/pages/layout";
import { client } from "@/libs/client";
import { useState, useEffect } from "react";
import ArticleCard from "@/pages/ArticleCard";

const Media = () => {
  const [data, setData] = useState<Media[] | null>(null);
  // propsからデータを使用
  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "media" });
      setData(response.contents);
    }

    fetchData();
  }, []);

  return (
    <>
      <Layout pageTitle="メディア・登壇・出展一覧">
        <h1 style={{ fontWeight: "100", marginBottom: "3rem" }}>
          メディア・登壇・出展一覧
        </h1>
        {!data ? (
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <p>loading...</p>
          </div>
        ) : (
          <>
            {data.map((elem, index) => (
              <ArticleCard
                date={elem.date.split("T")[0]}
                key={index}
                headline={elem.title}
                image={elem.thumbnail ? elem.thumbnail.url : ""}
                url={elem.link}
              />
            ))}
          </>
        )}
      </Layout>
    </>
  );
};

// getStaticProps関数。ビルド時に実行される
export async function getStaticProps() {
  // データの取得
  const data = await client.get({
    endpoint: "media",
  });

  console.log(data);

  // 取得したデータをpropsとしてページコンポーネントに渡す
  return {
    props: { data }, // 注意: 実際にこのデータ構造がclient.getから返されるかはAPIの設計に依存します
  };
}

export default Media;
