import React from "react";
import Link from "next/link";
import Layout from "../layout";
import { AnnouncementTable } from "../../components/annoucement/AnnoucementTable";

const Announcement = () => {
  return (
    <Layout pageTitle="お知らせ">
      <h1 style={{ fontWeight: "100", marginBottom: "3rem" }}>お知らせ</h1>
      <AnnouncementTable />
    </Layout>
  );
};

export default Announcement;
