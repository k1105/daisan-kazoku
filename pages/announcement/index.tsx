import React from "react";
import Layout from "../layout";
import AnnouncementTable from "./AnnoucementTable";

const Announcement = () => {
  return (
    <Layout pageTitle="お知らせ" headline="お知らせ">
      <AnnouncementTable />
    </Layout>
  );
};

export default Announcement;
