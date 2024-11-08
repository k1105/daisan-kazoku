// pages/works/[slug].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "@/libs/client";
import Layout from "../layout";
import { Open_Sans } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import AnnouncementItem from "./AnnouncementItem";

const EnTitle = Open_Sans({ weight: "700", subsets: ["latin"] });
const JaTitle = Zen_Kaku_Gothic_New({ weight: "700", subsets: ["latin-ext"] });

interface WorkPageProps {
  work: News;
}

const WorkPage: NextPage<WorkPageProps> = ({ work }) => {
  return (
    <Layout pageTitle={work.title} headline="お知らせ">
      <AnnouncementItem elem={work} />
      <style jsx>{`
        .image-container {
          margin-bottom: 3rem;
          display: block;
        }
        .headline {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .info {
          color: gray;
          margin-bottom: 2rem;
          display: flex;
          gap: 30px;
        }

        .description {
          margin-bottom: 2rem;
          width: 70%;
          line-height: 1.5rem;
        }

        @media screen and (max-width: 600px) {
          .headline {
            font-size: 1.2rem;
          }
          .info {
            font-size: 0.8rem;
          }

          .description {
            width: 100%;
            font-size: 0.8rem;
            line-height: 1.2rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((work: News) => ({
    params: { slug: work.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const data = await client.get({
    endpoint: "news",
    queries: { filters: `id[equals]${slug}` },
  });

  const work = data.contents[0];

  if (!work) {
    return { notFound: true };
  }

  return { props: { work } };
};

export default WorkPage;
