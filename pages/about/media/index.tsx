import Layout from "@/pages/layout";
import {client} from "@/libs/client";
import {useState, useEffect} from "react";
import ArticleCard from "@/pages/about/ArticleCard";
import styles from "./Media.module.scss";

const Media = () => {
  const [data, setData] = useState<Media[] | null>(null);
  // propsからデータを使用
  useEffect(() => {
    async function fetchData() {
      const response = await client.get({endpoint: "media"});
      setData(response.contents);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Layout pageTitle="メディア・登壇・出展一覧">
        <h1 style={{fontWeight: "100", marginBottom: "3rem"}}>
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
            <div className={styles.mediaContainer}>
              {data.map((elem, index) => (
                <ArticleCard
                  date={elem.date.split("T")[0]}
                  key={index}
                  headline={elem.title}
                  image={elem.thumbnail ? elem.thumbnail.url : ""}
                  url={elem.link}
                />
              ))}
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Media;
