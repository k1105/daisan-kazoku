import React from "react";
import Link from "next/link";
import Layout from "../layout";
import { AnnouncementTable } from "../../components/annoucement/AnnoucementTable";

const Announcement = () => {
  return (
    <Layout pageTitle="お知らせ">
      <AnnouncementTable />
    </Layout>
  );
};

export default Announcement;
