import React from "react";
import Layout from "../layout";
import AnnouncementTable from "./AnnoucementTable";
import {client} from "@/libs/client";

export async function getStaticProps() {
  const response = await client.get({
    endpoint: "news",
    queries: {
      offset: 0,
      limit: 10,
      orders: "-releaseDate", // 日付順（降順）でソート
    },
  });

  return {
    props: {
      initialData: response.contents || [],
      totalCount: response.totalCount || 0,
    },
  };
}

type Props = {
  initialData: News[];
  totalCount: number;
};

const Announcement = ({initialData, totalCount}: Props) => {
  return (
    <Layout pageTitle="お知らせ" headline="お知らせ">
      <AnnouncementTable initialData={initialData} totalCount={totalCount} />
    </Layout>
  );
};

export default Announcement;
