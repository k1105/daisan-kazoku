import Layout from "@/pages/layout";
import { client } from "@/libs/client";
import { useState, useEffect } from "react";
import ArticleCard from "@/pages/about/ArticleCard";

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

export default Media;
