// pages/works/[slug].tsx
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {client} from "@/libs/client";
import Layout from "../layout";
import styles from "@/styles/Announcement.module.scss";
import ArticleBody from "./ArticleBody";
import ArticleHeader from "./ArticleHeader";

interface WorkPageProps {
  work: News;
}

const WorkPage: NextPage<WorkPageProps> = ({work}) => {
  return (
    <Layout pageTitle={work.title}>
      <>
        <div className={styles.contentWrapper}>
          <ArticleHeader
            isOpen
            title={work.title}
            categoryName={work.category.name}
            releaseDate={work.releaseDate}
          />

          <div>
            <ArticleBody
              imageWidth={work.ogp ? work.ogp.width : null}
              imageHeight={work.ogp ? work.ogp.height : null}
              imageUrl={work.ogp ? work.ogp.url : null}
              content={work.content}
            />
          </div>
        </div>
      </>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const limit = 100; // 一度に取得する件数
  let offset = 0;
  let allContents: News[] = [];
  let hasMore = true;

  try {
    // ページネーションで全データを取得
    while (hasMore) {
      const data = await client.get({
        endpoint: "news",
        queries: {limit, offset},
      });

      // データを追加
      allContents = [...allContents, ...data.contents];

      // 次のページがあるか判定
      hasMore = data.contents.length === limit;
      offset += limit;
    }

    // `id` を使ってパスを生成
    const paths = allContents.map((work) => ({
      params: {slug: work.id}, // URL のパスに使用するパラメータ
    }));

    console.log("Generated paths:", paths);

    return {paths, fallback: false}; // 静的生成のみ
  } catch (error) {
    console.error("Error fetching data in getStaticPaths:", error);
    return {paths: [], fallback: false}; // エラー時は空リスト
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {slug} = context.params as {slug: string};
  const data = await client.get({
    endpoint: "news",
    queries: {filters: `id[equals]${slug}`},
  });

  const work = data.contents[0];

  if (!work) {
    return {notFound: true};
  }

  return {props: {work}};
};

export default WorkPage;
